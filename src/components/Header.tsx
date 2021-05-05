import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  type: string
}

const Header = (props: HeaderProps) => {
  console.log(props);

  return (
    <>
      <header className="header">
        <nav className="header__container">
          <Link to="/">Our boxes</Link>
          <Link to="/">Our store</Link>
          <h2>Charlie's closet</h2>
          <Link to="/">My favourites</Link>
          <Link to="/">Register</Link>
          <Link to="/">Login</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
