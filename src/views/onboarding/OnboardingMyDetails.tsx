import React, { useState } from 'react';
import InputField from '../../components/InputField';
import OnboardingStep from '../../components/OnboardingStep';
import SnackBar from '../../components/SnackBar';

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://charlies-closet-dev.herokuapp.com'
  : 'http://localhost:8080';

const MyBaby = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(false);

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
      .catch(() => setError(true));
  };

  const handleLocationSelect = (placeId: string) => {
    fetch(`${baseUrl}/api/addresses/${placeId}`)
      .then(response => response.json())
      .then((data: any) => setAddress(data.address))
      .catch(() => setError(true));
    setSuggestions([]);
  }

  return (
    <>
      <header className="header">
        <div className="header__onboarding">
          <h2 className="header__logo">Charlie's closet</h2>
        </div>
      </header>
      <OnboardingStep next="payment" previous="my-box">
        <form className="form__container">
          <h1 className="form__title">Mes coordonnées</h1>
          <div className="split__container">
          <InputField
              id="first_name"
              label="Prénom"
              type="text"
              value={firstName}
              setValue={setFirstName}
              placeholder="Prénom" />
            <InputField
              id="last_name"
              label="Nom de famille"
              type="text"
              value={lastName}
              setValue={setLastName}
              placeholder="Nom de famille" />
            <InputField
              id="email"
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="Email" />
            <InputField
              id="telephone"
              label="Téléphone"
              type="tel"
              value={telephone}
              setValue={setTelephone}
              placeholder="Téléphone" />
            <div className="address">
              <label>
                Addresse
                <input
                  id="adresse"
                  type="text"
                  className={`form__input ${suggestions.length > 0 ? 'drop' : ''}`}
                  value={address}
                  onChange={handleAddressChange}
                  placeholder="Rechercher votre addresse" />
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
      </OnboardingStep>
      {error && <SnackBar type="error" message="Error fetching address" setState={setError} state={error} />}
    </>
  );
};

export default MyBaby;
