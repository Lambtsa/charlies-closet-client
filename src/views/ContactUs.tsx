import React, { useState } from 'react';
import charlie from '../assets/charlies_closet.webp';

/*
  Components
*/
import Header from '../components/Header';
import InputField from '../components/InputField';
import Copyright from '../components/Copyright';
import SocialIcons from '../components/SocialIcons';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <Header type="dark" />
      <main className="main">
        <section className="split">
          <form className="split__left">
            <h1 className="split__title">Contact us</h1>
            <InputField
              type="text"
              placeholder="Enter first name"
              value={firstName}
              setValue={setFirstName} />
            <InputField
              type="email"
              placeholder="Enter email"
              value={email}
              setValue={setEmail} />
            <select value={object} onChange={(e:any) => setObject(e.target.value)} className="form__input">
              <option value="livraison">Livraison</option>
            </select>
            <textarea
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
              className="form__input"
              placeholder="Enter message" />
            <button className="form__btn" type="submit">Login</button>
            <SocialIcons class="dark"/>
          </form>
          <img className="split__img" src={charlie} alt="" />
        </section>
      </main>
      <Copyright type="fixed" />
    </>
  );
};

export default ContactUs;
