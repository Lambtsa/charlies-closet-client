import React, { useState } from 'react';
import charlie from '../../assets/charlies_closet.webp';

/*
  Components
*/
import Header from '../../components/Header';
import InputField from '../../components/InputField';
import Copyright from '../../components/Copyright';
import SocialIcons from '../../components/SocialIcons';
import SelectField from '../../components/SelectField';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');

  const objectOptions = {
    "livraison": 'Livraison',
    'produit': 'Produit',
  }
  return (
    <>
      <Header type="dark" fixed={false} />
      <main className="main">
        <section className="split__container background__white">
          <form className="split__left">
            <h1 className="split__title">Contact us</h1>
            <InputField
              id="first_name"
              label="First name"
              type="text"
              placeholder="Enter first name"
              value={firstName}
              setValue={setFirstName} />
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              value={email}
              setValue={setEmail} />
            <SelectField
              state={object}
              setState={setObject}
              name="object"
              label="Object"
              options={objectOptions} />
            <label htmlFor="message">
              Message
              <textarea
              id="message"
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                className="form__input"
                placeholder="Enter message" />
            </label>
            <button className="form__btn" type="submit">Login</button>
            <SocialIcons class="dark"/>
          </form>
          <img className="split__img" src={charlie} alt="" />
        </section>
      </main>
      <Copyright type="light" />
    </>
  );
};

export default ContactUs;
