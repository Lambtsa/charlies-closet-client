import React, { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { UserContext } from '../hooks/UserContext';
import { getBoxById, updateUser } from '../helpers/api-helpers';

/*
  Components
*/
import OnboardingStep from './OnboardingStep';
import SnackBar from './SnackBar';
import Loader from './Loader';
import InputField from './inputs/InputField';

export const CheckoutForm = () => {
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.token);
  const history = useHistory();
  const [name, setName] = useState('');
  const [selectedBox, SetSelectedBox] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const stripe: any = useStripe();
  const elements: any = useElements();

  useEffect(() => {
    setIsLoading(true);
    getBoxById(user.boxId)
      .then(response => response.json())
      .then((data: any) => SetSelectedBox(data))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
      /* eslint-disable-next-line */
  }, []);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
    } else {
      console.log(error.message);
    }
    // const response = await updateUser(user._id, token, { 
    //   onboardingProgress: {
    //     finished: true,
    //     step: '/account/dashboard',
    //   },
    // });
    // if (!response.ok) {
    //   return setError(true);
    // }
    // history.push('/account/dashboard');
  };

  const CARD_OPTIONS: any = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#60764D",
        backgroundColor: 'transparent',
        color: "#60764D",
        fontWeight: 500,
        fontFamily: "'Nunito', sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#60764D"
        },
        "::placeholder": {
          color: "#60764D"
        }
      },
      invalid: {
        iconColor: "#E08585",
        color: "#E08585"
      }
    }
  };

  return (
    <>
      <OnboardingStep previous="my-details" handlePayment={handleFormSubmit}>
      <div className="form__container">
          <h1 className="form__title">Paiement</h1>
          {error && <SnackBar type="error" message="There has been an issue" setState={setError} state={error} />}
          {isLoading && <Loader />}
          {!isLoading && (
            <>
              <div className="split__container">
                <div>
                  <InputField
                    id="name"
                    label="Nom indiqué sur la carte"
                    type="text"
                    value={name}
                    setValue={setName}
                    placeholder="Nom indiqué sur la carte" />
                  <CardNumberElement options={CARD_OPTIONS} className="form__card" />
                  <CardExpiryElement options={CARD_OPTIONS} className="form__card" />
                  <CardCvcElement options={CARD_OPTIONS} className="form__card" />
                </div>
                <div className="payment__details">
                  <div className="box__details">
                    <h2 className="box__title">{selectedBox.boxTitle}</h2>
                    <ul>
                      {selectedBox.boxServices.map((service: any, index: number) => (
                        <li key={index} className="box__list payment">
                          <p>{service}</p>
                          <p>inclus</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="box__price">{`${selectedBox.boxPrice} €/mois`}</p>
                </div>
              </div>
              <div className="info__container">
                <FontAwesomeIcon className="info__icon" icon={faLock} />
                <p>Ce site utilise SSL pour s’assurer que votre paiement est sécurisé.</p>
              </div>
            </>
          )}
        </div>
      </OnboardingStep>
    </>
  );
};