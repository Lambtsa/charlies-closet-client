import React, { useState } from 'react';
import InputField from '../../components/InputField';
import OnboardingStep from '../../components/OnboardingStep';
import ColorSelector from '../../components/ColorSelector';
import SelectField from '../../components/SelectField';
import DateField from '../../components/DateField';

const MyBaby = () => {
  const [firstName, setFirstName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');
  const [preferences, setPreferences] = useState('');
  const [color, setColor] = useState('');

  const genderOptions = {
    'boy': 'Boy',
    'girl': 'Girl',
  }
  const sizeOptions = {
    "3 months": '3 months',
    "6 months": '6 months',
    "9 months": '9 months'
  };

  const preferencesOptions = {
    'pants': 'Pants',
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
          <div className="split__container">
            <InputField
              id="first_name"
              label="First name"
              type="text"
              value={firstName}
              setValue={setFirstName}
              placeholder="Enter first name" />
            <DateField
              id="birth_date"
              label="Date of birth"
              value={birth}
              setValue={setBirth}
              placeholder="JJ-MM-AAAA" />
            <ColorSelector state={color} setState={setColor} />
            <SelectField
              state={gender}
              setState={setGender}
              name="gender"
              label="Gender"
              options={genderOptions} />
            <SelectField
              state={size}
              setState={setSize}
              name="size"
              label="Size"
              options={sizeOptions} />
            <SelectField
              state={preferences}
              setState={setPreferences}
              name="preferences"
              label="Preferences"
              options={preferencesOptions} />
          </div>
        </form>
      </OnboardingStep>
    </>
  );
};

export default MyBaby;
