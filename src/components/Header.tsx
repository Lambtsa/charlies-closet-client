import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  type: string
}

const Header = (props: HeaderProps) => {
  const { type } = props;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrolling = () => {
    // scroll position for navbar colour
    const scrollPos = window.scrollY;
    // navbar scroll logic (colour when scrolled)
    if (scrollPos !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling);
    return () => {
      window.removeEventListener('scroll', handleScrolling);
    };
  });

  return (
    <>
      <header className={`header ${isScrolled ? 'isScrolled' : ''}`}>
        <div className={`header__container ${type}`}>
          <Link to="/"><h2 className="header__logo">Charlie's closet</h2></Link>
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
