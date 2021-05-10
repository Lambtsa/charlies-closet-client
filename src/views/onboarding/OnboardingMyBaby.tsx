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
    'garçon': 'Garçon',
    'fille': 'Fille',
  }
  const sizeOptions = {
    "3 mois": '3 mois',
    "6 mois": '6 mois',
    "9 mois": '9 mois'
  };

  const preferencesOptions = {
    'pantalons': 'Pantalons',
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
              label="Prénom"
              type="text"
              value={firstName}
              setValue={setFirstName}
              placeholder="Prénom" />
            <DateField
              id="birth_date"
              label="Date de naissance"
              value={birth}
              setValue={setBirth}
              placeholder="JJ-MM-AAAA" />
            <ColorSelector state={color} setState={setColor} />
            <SelectField
              state={gender}
              setState={setGender}
              name="gender"
              label="Genre"
              options={genderOptions} />
            <SelectField
              state={size}
              setState={setSize}
              name="size"
              label="Taille"
              options={sizeOptions} />
            <SelectField
              state={preferences}
              setState={setPreferences}
              name="preferences"
              label="Préférences"
              options={preferencesOptions} />
          </div>
        </form>
      </OnboardingStep>
    </>
  );
};

export default MyBaby;
