import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

interface DateFieldProps {
  value: string,
  class?: string,
  id?: string,
  label?: string,
  required?: boolean,
  setValue: (arg: string) => void,
};

const DateField = (props: DateFieldProps) => {

  const handleDateChange = (e: any) => {

    props.setValue(e.target.value);
  }

  return (
    <>

      <div className="select__container">
        <div className="select__overlay">
          <div className="select__overlay--icon">
            <FontAwesomeIcon icon={faCalendarDay} />
          </div>
        </div>
        <label className={`${props.class ? props.class : ''}`} htmlFor={props.id}>
          {props.label}
          <input
            className="form__input date"
            id={props.id}
            value={props.value}
            onChange={handleDateChange}
            type="number"
            placeholder="JJ-MM-AAAA" />
      </label>
      </div>
    </>
  );
};

export default DateField;
