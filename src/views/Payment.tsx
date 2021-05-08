import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useHistory } from 'react-router-dom';

const Payment = () => {
  const history = useHistory();

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
  };
  
  const handleBtnBack = () => {
    history.push('/onboarding/my-details');
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
        <div className="btn__container">
          <button onClick={handleBtnBack} className="form__btn back" type="button">Back</button>
          <button onClick={handleSubmitForm} className="form__btn" type="submit">
            <FontAwesomeIcon className="btn__icon" icon={faLock} />
            Pay
          </button>
        </div>
      </section>
    </>
  );
};

export default Payment;
