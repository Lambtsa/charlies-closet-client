import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';

/*
  Components
*/
import InputField from '../../components/InputField';
import OnboardingStep from '../../components/OnboardingStep';
import ColorSelector from '../../components/ColorSelector';
import SelectField from '../../components/SelectField';
import DateField from '../../components/DateField';
import SnackBar from '../../components/SnackBar';

const checkLocalStorage = (query: string) => {
  if(!localStorage.baby) {
    localStorage.baby = JSON.stringify({
      first_name: '',
      birthday: '',
      gender: '',
      size: '',
      preferences: '',
      color: '',
    })
  };
  return JSON.parse(localStorage.baby)[query];
}

const MyBaby = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [firstName, setFirstName] = useState(checkLocalStorage('first_name'));
  const [birth, setBirth] = useState(checkLocalStorage('birthday'));
  const [gender, setGender] = useState(checkLocalStorage('gender'));
  const [size, setSize] = useState(checkLocalStorage('size'));
  const [preferences, setPreferences] = useState(checkLocalStorage('preferences'));
  const [color, setColor] = useState(checkLocalStorage('color'));
  const [error, setError] = useState(false);

  console.log(user);

  useEffect(() => {
    console.log('this is first_name', firstName);
  }, [firstName]);

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

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!firstName || !birth || !gender || !size || !preferences || !color) {
      window.scrollTo(0, 0);
      setError(true);
    } else {
      setError(false);
      const newBabyObj = {
        first_name: firstName,
        birthday: birth,
        gender,
        size,
        preferences,
        color,
      };
      localStorage.baby = JSON.stringify(newBabyObj);
      history.push('/onboarding/my-box');
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__onboarding">
          <h2 className="header__logo">Charlie's closet</h2>
        </div>
      </header>
      <OnboardingStep handleNext={handleFormSubmit}>
        <form className="form__container">
          {error && <SnackBar state={error} setState={setError} type="error" message="Please fill in all the fields" />}
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
