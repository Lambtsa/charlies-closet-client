import React, { useEffect, useState, useContext } from 'react';
import {loadStripe} from "@stripe/stripe-js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory, Redirect } from 'react-router-dom';
import { getBoxById } from '../../helpers/api-helpers';
import { UserContext } from '../../hooks/UserContext';
import { updateUser } from '../../helpers/api-helpers';

/*
  Components
*/
import OnboardingStep from '../../components/OnboardingStep';
import InputField from '../../components/inputs/InputField';
import DateField from '../../components/inputs/DateField';
import Loader from '../../components/Loader';
import SnackBar from '../../components/SnackBar';

const stripeLoadedPromise = loadStripe('pk_test_51IqCHuCMc4r979byCs8JDKIFuggy18xHjxbmsPGxtbZPSHlJRLCKLVdVE8NzyHh5BgW7aZoXZyq1HpQYiYFvRiJf00vROOR21S');

const Payment = () => {
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.token);
  const history = useHistory();
  const [selectedBox, SetSelectedBox] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState(false);

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
    const response = await updateUser(user._id, token, { 
      onboardingProgress: {
        finished: true,
        step: '/account/dashboard',
      },
    });
    if (!response.ok) {
      return setError(true);
    }
    history.push('/account/dashboard');
  }

  if (user.onboardingProgress.finished) {
    return (
      <Redirect to="/account/dashboard" />
    )
  }

  return (
    <>
      <header className="header">
        <div className="header__onboarding">
          <h2 className="header__logo">Charlie's closet</h2>
        </div>
      </header>
      <OnboardingStep previous="my-details" handlePayment={handleFormSubmit}>
        <div className="form__container">
          <h1 className="form__title">Paiement</h1>
          {error && <SnackBar type="error" message="There has been an issue" setState={setError} state={error} />}
          {isLoading && <Loader />}
          {!isLoading && (
            <>
              <div className="split__container">
                <form onSubmit={handleFormSubmit} className="split__left payment">
                  <InputField
                    id="name"
                    label="Nom indiqué sur la carte"
                    type="text"
                    value={name}
                    setValue={setName}
                    placeholder="Nom indiqué sur la carte" />
                  <InputField
                    id="card_number"
                    label="Numéro de carte"
                    type="number"
                    value={cardNumber}
                    setValue={setCardNumber}
                    placeholder="Numéro de carte" />
                  <DateField
                    id="expiry"
                    label="Date d'expiration"
                    value={expiry}
                    setValue={setExpiry}
                    placeholder="MM-AA" />
                  <InputField
                    id="cvv"
                    label="Cryptogramme visuel"
                    type="password"
                    value={cvv}
                    setValue={setCvv}
                    placeholder="CVV" />
                </form>
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

export default Payment;
