import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

/*
  Components
*/
import OnboardingStep from '../../components/OnboardingStep';
import InputField from '../../components/InputField';
import DateField from '../../components/DateField';

const Payment = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    history.push('/account/my-baby');
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
