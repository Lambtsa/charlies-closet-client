import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import OnboardingStep from '../components/OnboardingStep';

/*
  Components
*/
import InputField from '../components/InputField';

const Payment = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <>
      <header className="header">
        <div className="header__onboarding">
          <h2 className="header__logo">Charlie's closet</h2>
        </div>
      </header>
      <OnboardingStep previous="my-details" next="" paymentStep>
        <div className="form__container">
          <h1 className="form__title">Paiement</h1>
          <div className="split__container">
            <form className="split__left">
              <InputField
                id="name"
                label="Name on card"
                type="text"
                value={name}
                setValue={setName}
                placeholder="Enter name on card" />
              <InputField
                id="card_number"
                label="Card number"
                type="number"
                value={cardNumber}
                setValue={setCardNumber}
                placeholder="Enter card number" />
              <InputField
                id="expiry"
                label="Expiry Date"
                type="date"
                value={expiry}
                setValue={setExpiry}
                placeholder="Enter expiry date" />
              <InputField
                id="cvv"
                label="CVV"
                type="password"
                value={cvv}
                setValue={setCvv}
                placeholder="Enter CVV" />
            </form>
            <div className="payment__details">
              <div className="box__details">
                <h2 className="box__title">La box compassion</h2>
                <ul>
                  <li className="box__list payment">
                    <p>2 pantalons</p>
                    <p>inclus</p>
                  </li>
                  <li className="box__list payment">
                    <p>2 hauts</p>
                    <p>inclus</p>
                  </li>
                  <li className="box__list payment">
                    <p>2 nuits de babysitting</p>
                    <p>inclus</p>
                  </li>
                  <li className="box__list payment">
                    <p>1 bouteille de rhum brun</p>
                    <p>inclus</p>
                  </li>
                </ul>
              </div>
              <p className="box__price">39,99€/mois</p>
            </div>
          </div>
          <div className="info__container">
            <FontAwesomeIcon className="info__icon" icon={faLock} />
            <p>Ce site utilise SSL pour s’assurer que votre paiement est sécurisé.</p>
          </div>
        </div>
        
      </OnboardingStep>
    </>
  );
};

export default Payment;
