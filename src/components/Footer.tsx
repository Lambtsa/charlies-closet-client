import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from './InputField';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="links">
            <h3 className="links__title">Charlie's Closet</h3>
            <Link className="links__anchor" to="/boxes">Boxes</Link>
            <Link className="links__anchor" to="/boutique">Boutique</Link>
            <Link className="links__anchor" to="/Register">Register</Link>
            <Link className="links__anchor" to="/Login">Login</Link>
            <Link className="links__anchor" to="/about-us">About us</Link>
          </div>
          <div className="links">
            <h3 className="links__title">Information</h3>
            <Link className="links__anchor" to="/faq">FAQ</Link>
            <Link className="links__anchor" to="/terms">Terms & conditions</Link>
            <Link className="links__anchor" to="/contact-us">Contact us</Link>
          </div>
          <div className="links">
            <h3 className="links__title">Social</h3>
            <p className="links__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <SocialIcons />
          </div>
          <div className="links">
            <h3 className="links__title">Newsletter</h3>
            <p className="links__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form onSubmit={handleFormSubmit}>
              <InputField
                value={email}
                setValue={setEmail}
                type="email"
                placeholder="Votre mail"
                maxLength={30} />
              <button className="form__btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </footer>
      <div className="copyright">
        {`© ${new Date().getFullYear()} Charlie's Closet. Tous droits réservés`}
      </div>
    </>
  );
};

export default Footer;
