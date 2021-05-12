import React, { useContext, useState } from 'react';
import { UserContext } from '../../hooks/UserContext';
import { updateUser } from '../../helpers/api-helpers';
import { Redirect } from 'react-router-dom';

/*
  Components
*/
import AccountNavigation from '../../components/AccountNavigation';
import InputField from '../../components/InputField';
import DateField from '../../components/DateField';
import ColorSelector from '../../components/ColorSelector';
import SelectField from '../../components/SelectField';
import SnackBar from '../../components/SnackBar';

const MyBaby = () => {
  const token = JSON.parse(localStorage.token);
  const { user, findUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState(user.babyDetails.first_name);
  const [birth, setBirth] = useState(user.babyDetails.birth_date);
  const [gender, setGender] = useState(user.babyDetails.gender);
  const [size, setSize] = useState(user.babyDetails.size);
  const [preferences, setPreferences] = useState(user.babyDetails.preferences);
  const [color, setColor] = useState(user.babyDetails.color);
  const [error, setError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  if (!user.onboardingProgress.finished) {
    return (
      <Redirect push to={user.onboardingProgress.step} />
    )
  }

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

  const handleSaveForm = async (e: any) => {
    e.preventDefault();
    if (!firstName || !birth || !gender || !size || !preferences || !color) {
      window.scrollTo(0, 0);
      setError(true);
    } else {
      setError(false);
      const newBabyObj = {
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
      setIsValid(true);
    }
  };

  return (
    <>
      {error && <SnackBar type="error" message="There has been an error saving your information" setState={setError} state={error} />}
      {isValid && <SnackBar type="success" message="Your information has been updated" setState={setIsValid} state={isValid} />}
      <AccountNavigation handleSaveForm={handleSaveForm}>
        <form className="form__container account">
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
      </AccountNavigation>
    </>
  );
};


export default MyBaby;