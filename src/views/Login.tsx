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
  const [error, setError] = useState(false);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
    }
  };

  return (
    <>
      <Header type="dark" fixed={false} />
      <main className="main">
        <section className="split__container background__white">
          <form onSubmit={handleFormSubmit} className="split__left">
            <h1 className="split__title">Espace Client</h1>
            <InputField
              id="username"
              label="Username"
              type="text"
              placeholder="Enter username"
              value={email}
              setValue={setEmail} />
            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              setValue={setPassword} />
            <button className="form__btn" type="submit">Login</button>
            <div className="form__link">
              <p>Pas encore de compte ?</p>
              <Link to="/register">S’inscrire</Link>
            </div>
            {error && <p className="form__error">Please provide valid credentials</p>}
          </form>
          <img className="split__img" src={charlie} alt="" />
        </section>
      </main>
      <Copyright type="light" />
    </>
  );
};

export default Login;
