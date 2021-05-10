import React, { useState } from 'react';

/*
  Components
*/
import AccountNavigation from '../../components/AccountNavigation';
import InputField from '../../components/InputField';
import DateField from '../../components/DateField';
import ColorSelector from '../../components/ColorSelector';
import SelectField from '../../components/SelectField';

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
      <AccountNavigation>
        <form className="form__container account">
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
      </AccountNavigation>
    </>
  );
};

export default MyBaby;
