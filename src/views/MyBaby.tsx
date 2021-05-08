import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import InputField from '../components/InputField';
import OnboardingStep from '../components/OnboardingStep';

const MyBaby = () => {
  const [firstName, setFirstName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');
  const [preferences, setPreferences] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    console.log(color);
  }, [color])

  const handleColorChange = (e: any) => {
    e.preventDefault();
    setColor(e.target.value);
  }

  return (
    <>
      <header className="header">
        <div className="header__onboarding">
          <h2 className="header__logo">Charlie's closet</h2>
        </div>
      </header>
      <OnboardingStep next="my-box">
        <form className="form__container">
          <h1 className="form__title">Mon bébé</h1>
          <div className="form__split">
            <InputField
              id="first_name"
              label="First name"
              type="text"
              value={firstName}
              setValue={setFirstName}
              placeholder="Enter first name" />
            <InputField
              id="birth_date"
              label="Date of birth"
              type="date"
              value={birth}
              setValue={setBirth}
              placeholder="Enter date of birth" />
            <div className="color__selector">
              <button
                className={`color ${color === 'black' ? 'selected' : ''}`}
                value="black"
                onClick={handleColorChange} />
              <button
                className={`color ${color === 'white' ? 'selected' : ''}`}
                value="white"
                onClick={handleColorChange} />
              <button
                className={`color ${color === 'blue' ? 'selected' : ''}`}
                value="blue"
                onClick={handleColorChange} />
              <button
                className={`color ${color === 'pink' ? 'selected' : ''}`}
                value="pink"
                onClick={handleColorChange} />
              <button
                className={`color ${color === 'green' ? 'selected' : ''}`}
                value="green"
                onClick={handleColorChange} />
              <button
                className={`color ${color === 'beige' ? 'selected' : ''}`}
                value="beige"
                onClick={handleColorChange} />
            </div>
            <div className="select__container">
              <div className="select__overlay">
                <div className="select__overlay--icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <select value={gender} onChange={(e:any) => setGender(e.target.value)} className="select">
                <option value="select gender">Select gender</option>
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
              </select>
            </div>
            <div className="select__container">
              <div className="select__overlay">
                <div className="select__overlay--icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <select value={size} onChange={(e:any) => setSize(e.target.value)} className="select">
                <option value="select size">Select size</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="9 months">9 months</option>
              </select>
            </div>
            <div className="select__container">
              <div className="select__overlay">
                <div className="select__overlay--icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <select value={preferences} onChange={(e:any) => setPreferences(e.target.value)} className="select">
                <option value="select preferences">Select preferences</option>
                <option value="pants">Pants</option>
              </select>
            </div>
          </div>
        </form>
      </OnboardingStep>
    </>
  );
};

export default MyBaby;
