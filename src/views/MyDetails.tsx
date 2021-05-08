import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useHistory } from 'react-router-dom';
import InputField from '../components/InputField';

const MyBaby = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    history.push('/onboarding/payment');
  };

  const handleBtnBack = () => {
    history.push('/onboarding/my-box');
  }

  return (
    <>
      <header className="header">
        <div className="header__onboarding">
          <Link to="/"><h2 className="header__logo">Charlie's closet</h2></Link>
        </div>
      </header>
      <section className="onboarding">
        <div className="nav__container">
          <nav className="nav__links">
            <NavLink activeClassName="nav__link--selected" className="nav__link" to="/onboarding/my-baby">Mon bébé</NavLink>
            <NavLink activeClassName="nav__link--selected" className="nav__link" to="/onboarding/my-box">Ma box</NavLink>
            <NavLink activeClassName="nav__link--selected" className="nav__link" to="/onboarding/my-details">Mes coordonnées</NavLink>
            <NavLink activeClassName="nav__link--selected" className="nav__link" to="/onboarding/payment">Règlement</NavLink>
          </nav>
        </div>
        <form className="form__container">
          <h1 className="form__title">Mon bébé</h1>
          <div className="form__split">
            <InputField
              id="first_name"
              label="First name"
              type="text"
              value={firstName}
              setValue={setFirstName}
              placeholder="Enter first name" />
            <InputField
              id="last_name"
              label="Last name"
              type="text"
              value={lastName}
              setValue={setLastName}
              placeholder="Enter last name" />
            <InputField
              id="email"
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="Enter date of birth" />
            <InputField
              id="telephone"
              label="Téléphone"
              type="tel"
              value={telephone}
              setValue={setTelephone}
              placeholder="Enter telephone" />
            <InputField
              id="adresse"
              label="Adresse"
              class="search"
              type="text"
              value={address}
              setValue={setAddress}
              placeholder="Enter address" />
            <InputField
              id="postal_code"
              label="Zip code"
              type="text"
              value={zipcode}
              setValue={setZipcode}
              placeholder="Enter zipcode" />
            <InputField
              id="city"
              label="City"
              type="text"
              value={city}
              setValue={setCity}
              placeholder="Enter city" />
          </div>
        </form>
        <div className="btn__container">
          <button onClick={handleBtnBack} className="form__btn back" type="button">Back</button>
          <button onClick={handleSubmitForm} className="form__btn" type="submit">Next</button>
        </div>
      </section>
    </>
  );
};

export default MyBaby;
