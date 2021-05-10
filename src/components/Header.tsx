import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext'

interface HeaderProps {
  type: string,
  fixed: boolean,
}

const Header = (props: HeaderProps) => {
  const { type, fixed } = props;
  const { user } = useContext(UserContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleScrolling = () => {
    if (!fixed) {
      return;
    }
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

  const handleBtnClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'isScrolled' : ''} ${fixed ? 'fixed' : ''}`}>
        <div className={`header__container ${type}`}>
          <Link to="/"><h2 className="header__logo">Charlie's closet</h2></Link>
          <nav className={`header__links ${isClicked ? 'clicked' : ''}`}>
            <Link className="header__link" to="/boxes">Our boxes</Link>
            <Link className="header__link" to="/boutique">Our store</Link>
            {user === null && (
              <>
                <Link className="header__link" to="/register">Register</Link>
                <Link className="header__link" to="/login">Login</Link>
              </>
            )}
            {user !== null && <Link className="header__link" to="/account/my-baby">My account</Link>}
            <button onClick={handleBtnClick} type="button" className="header__close"><FontAwesomeIcon icon={faTimes} /></button>
          </nav>
          <button type="button" onClick={handleBtnClick} className="header__icon" ><FontAwesomeIcon className={`burger ${fixed ? 'fixed' : ''}`} icon={faHamburger} /></button>
        </div>
      </header>
    </>
  );
};

export default Header;
