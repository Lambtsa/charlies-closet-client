import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

const MyBox = () => {
  const history = useHistory();
  const [selected, setSelected] = useState('btn-2');

  const handleBtnClick = (btnId: string) => {
    setSelected(btnId);
  }

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    history.push('/onboarding/my-details');
  };

  const handleBtnBack = () => {
    history.push('/onboarding/my-baby');
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
        <div className="boxes__container">
          <h1 className="boxes__title">Ma box</h1>
          <div className="boxes">
            <button
              type="button"
              onClick={() => handleBtnClick("btn-1")}
              className={`box ${selected === 'btn-1' ? 'selected' : ''}`}>
              <h2 className="box__title">La box fashion</h2>
              <ul>
                <li className="box__list">2 pantalons</li>
                <li className="box__list">2 hauts</li>
                <li className="box__list">1 ensemble</li>
              </ul>
              <p className="box__price">29,99€/mois</p>
            </button>
            <button
              type="button"
              onClick={() => handleBtnClick("btn-2")}
              className={`box ${selected === 'btn-2' ? 'selected' : ''}`}>
              <h2 className="box__title">La box compassion</h2>
              <ul>
                <li className="box__list">2 pantalons</li>
                <li className="box__list">2 hauts</li>
                <li className="box__list">2 nuits de babysitting</li>
                <li className="box__list">1 bouteille de rhum brun</li>
              </ul>
              <p className="box__price">39,99€/mois</p>
              <p className="box__tag">Best seller</p>
            </button>
          </div>
        </div>
        <div className="btn__container">
          <button onClick={handleBtnBack} className="form__btn back" type="button">Back</button>
          <button onClick={handleSubmitForm} className="form__btn" type="submit">Next</button>
        </div>
      </section>
    </>
  );
};

export default MyBox;
