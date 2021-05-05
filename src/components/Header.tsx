import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  type: string
}

const Header = (props: HeaderProps) => {
  const { type } = props;

  return (
    <>
      <header className="header">
        <div className={`header__container ${type}`}>
          <h2 className="header__logo">Charlie's closet</h2>
          <div className="header__links">
            <Link className="header__link" to="/">Our boxes</Link>
            <Link className="header__link" to="/">Our store</Link>
            <Link className="header__link" to="/">My favourites</Link>
            <Link className="header__link" to="/">Register</Link>
            <Link className="header__link" to="/">Login</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
