import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../hooks/useAuth';

const AccountNavigation = (props: {children: any}) => {
  const { children } = props;
  const { logoutUser } = useAuth();
  const [isClicked, setIsClicked] = useState(false);

  const handleSaveForm = (e: any) => {
    e.preventDefault();
    console.log('clicked');
  }

  const handleBtnClick = () => {
    setIsClicked(!isClicked);
  };
  
  return (
    <>
      <header className="header account">
        <div className="header__container">
          <Link to="/account/my-baby"><h2 className="header__logo">Charlie's closet</h2></Link>
          <button onClick={logoutUser} className="header__logout" type="button">Se déconnecter</button>
          <button type="button" onClick={handleBtnClick} className="header__icon" ><FontAwesomeIcon className="burger fixed" icon={faHamburger} /></button>
        </div>
      </header>
      <section className="account__container">
        <div className={`account__navigation ${isClicked ? 'clicked' : ''}`}>
          <div className="account__profile">
            <h3 className="profile__icon">TL</h3>
            <div className="profile__details">
              <h3 className="profile__title">Thom Lama</h3>
              <p className="profile__subtitle">sheep@example.com</p>
            </div>
          </div>
          <nav className="account__links">
            <NavLink activeClassName="account__link--selected" className="account__link" to="/account/my-baby">Mon bébé</NavLink>
            <NavLink activeClassName="account__link--selected" className="account__link" to="/account/my-box">Ma box</NavLink>
            <NavLink activeClassName="account__link--selected" className="account__link" to="/account/my-details">Mes coordonnées</NavLink>
            <button onClick={handleBtnClick} type="button" className="header__close"><FontAwesomeIcon icon={faTimes} /></button>
          </nav>
          <button onClick={logoutUser} className="account__logout" type="button">Se déconnecter</button>
        </div>
        <div>
          {children}
          <div className="btn__container account">
            <button onClick={handleSaveForm} className="form__btn" type="submit">Save</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountNavigation;
