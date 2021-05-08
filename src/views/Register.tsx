import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import charlie from '../assets/charlies_closet.webp';

/*
  Components
*/
import Header from '../components/Header';
import InputField from '../components/InputField';
import Copyright from '../components/Copyright';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <>
      <Header type="dark" fixed={false} />
      <main className="main">
        <section className="split">
          <form className="split__left">
            <h1 className="split__title">Inscription</h1>
            <InputField
              id="first_name"
              label="First name"
              type="text"
              placeholder="Enter first name"
              value={firstName}
              setValue={setFirstName} />
            <InputField
              id="last_name"
              label="Last name"
              type="text"
              placeholder="Enter last name"
              value={lastName}
              setValue={setLastName} />
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              value={email}
              setValue={setEmail} />
            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              setValue={setPassword} />
            <div className="checkbox">
              <div className="checkbox__container">
                <div className={`checkbox__overlay ${isAccepted ? 'checked' : ''}`}>
                  <FontAwesomeIcon className={`check ${isAccepted ? 'checked' : ''}`} icon={faCheck} />
                </div>
                <input className="checkbox__input" type="checkbox" checked={isAccepted} onChange={() => setIsAccepted(!isAccepted)} />
              </div>
              <p className="checkbox__text">J’accepte les conditions générales et la politique de confidentialité</p>
            </div>
            <button className="form__btn" type="submit">Login</button>
            <div className="form__link">
              <p>Déjà inscrit ?</p>
              <Link to="/login">Se connecter</Link>
            </div>
          </form>
          <img className="split__img" src={charlie} alt="" />
        </section>
      </main>
      <Copyright type="light" />
    </>
  );
};

export default Register;
