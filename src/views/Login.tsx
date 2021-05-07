import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import charlie from '../assets/charlies_closet.webp';

/*
  Components
*/
import Header from '../components/Header';
import InputField from '../components/InputField';
import Copyright from '../components/Copyright';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header type="dark" fixed={false} />
      <main className="main">
        <section className="split">
          <form className="split__left">
            <h1 className="split__title">Espace Client</h1>
            <InputField
              type="text"
              placeholder="Enter username"
              value={email}
              setValue={setEmail} />
            <InputField
              type="password"
              placeholder="Enter password"
              value={password}
              setValue={setPassword} />
            <button className="form__btn" type="submit">Login</button>
            <div className="form__link">
              <p>Pas encore de compte ?</p>
              <Link to="/register">S’inscrire</Link>
            </div>
          </form>
          <img className="split__img" src={charlie} alt="" />
        </section>
      </main>
      <Copyright type="light" />
    </>
  );
};

export default Login;
