import React, { useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';
import { updateUser } from '../../helpers/api-helpers';

/*
  Components
*/
import InputField from '../../components/inputs/InputField';
import OnboardingStep from '../../components/OnboardingStep';
import ColorSelector from '../../components/inputs/ColorSelector';
import SelectField from '../../components/inputs/SelectField';
import DateField from '../../components/inputs/DateField';
import SnackBar from '../../components/SnackBar';

const MyBaby = () => {
  const { user, findUser } = useContext(UserContext);
  const token = JSON.parse(localStorage.token);
  const history = useHistory();
  const [firstName, setFirstName] = useState(user.babyDetails.first_name);
  const [birth, setBirth] = useState(user.babyDetails.birth_date);
  const [gender, setGender] = useState(user.babyDetails.gender);
  const [size, setSize] = useState(user.babyDetails.size);
  const [preferences, setPreferences] = useState(user.babyDetails.preferences);
  const [color, setColor] = useState(user.babyDetails.color);
  const [error, setError] = useState(false);

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

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (!firstName || !birth || !gender || !size || !preferences || !color) {
      window.scrollTo(0, 0);
      setError(true);
    } else {
      setError(false);
      const newBabyObj = {
        onboardingProgress: {
          finished: false,
          step: '/onboarding/my-box',
        },
        babyDetails: {
          first_name: firstName,
          birth_date: birth,
          gender,
          size,
          preferences,
          color,
        }
      };
      const response = await updateUser(user._id, token, newBabyObj);
      if (!response.ok) {
        return setError(true);
      }
      findUser();
      history.push('/onboarding/my-box');
    }
  };

  if (user.onboardingProgress.finished) {
    return (
      <Redirect to="/account/dashboard" />
    )
  }

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
