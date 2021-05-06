import React, { useState } from 'react';

interface InputFieldProps {
  value: string,
  class?: string,
  setValue: (arg: string) => void,
  type?: string,
  maxLength?: number,
  placeholder: string,
};

const InputField = (props: InputFieldProps) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValueChange = (e: any) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (props.type === 'email') {
      if (e.target.value && !regex.test(e.target.value)) {
        setError(true);
        setErrorMessage('Veuillez saisir une adresse valide');
      } else {
        setError(false);
      }
    }
    props.setValue(e.target.value.trim());
  };

  return (
    <>
      <input
        className={`form__input ${props.class ? props.class : ''} ${error ? 'error' : ''}`}
        value={props.value}
        onChange={handleValueChange}
        type={props.type}
        maxLength={props.maxLength}
        placeholder={props.placeholder} />
      {error && <p className="form__error-message">{errorMessage}</p>}
    </>
  );
};

export default InputField;

InputField.defaultProps = {
  type: 'text',
  maxLength: 30,
}
