import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useHistory } from 'react-router-dom';
import InputField from '../components/InputField';

const baseUrl = process.env.NODE_ENV === 'production'
  ? ''
  : 'http://localhost:8080';

const MyBaby = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    console.log(suggestions);
  }, [suggestions]);

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    history.push('/onboarding/payment');
  };

  const handleBtnBack = () => {
    history.push('/onboarding/my-box');
  }

  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
    const search = e.target.value.replace(/\s/g, '');
    fetch(`${baseUrl}/api/addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        search,
      }),
    })
      .then(response => response.json())
      .then((data: any) => setSuggestions(data))
      .catch(err => console.log(err));
  };

  const handleLocationSelect = (placeId: string) => {
    fetch(`${baseUrl}/api/addresses/${placeId}`)
      .then(response => response.json())
      .then((data: any) => setAddress(data.address))
      .catch(err => console.log(err));
    setSuggestions([]);
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
            <div className="address">
              <label>
                Address
                <input
                  id="adresse"
                  type="text"
                  className={`form__input ${suggestions.length > 0 ? 'drop' : ''}`}
                  value={address}
                  onChange={handleAddressChange}
                  placeholder="Start typing to search" />
              </label>
              {suggestions.length > 0 && (
                <ul className="address__list">
                {suggestions.map((s: any) => (
                  <li className="address__btn" key={s.place_id}>
                    <button type="button" onClick={() => handleLocationSelect(s.place_id)}>
                      {s.description}
                    </button>
                  </li>
                ))}
                </ul>
              )}
            </div>
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
