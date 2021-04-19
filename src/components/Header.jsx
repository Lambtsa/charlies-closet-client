import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <header className="header">
      <nav className="header__container">
        <div className="header__links">
          <Link className="header__link" to="/">Nos coffrets</Link>
          <Link className="header__link" to="/">Notre boutique</Link>
        </div>
        <h2 className="header__title">Charlie&apos;s Closet</h2>
        <div className="header__links">
          <Link className="header__link" to="/">Mes favoris</Link>
          <Link className="header__link" to="/">S&apos;inscire</Link>
          <Link className="header__link" to="/">Se connecter</Link>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
