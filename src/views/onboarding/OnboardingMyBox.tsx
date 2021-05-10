import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/*
  Components
*/
import OnboardingStep from '../../components/OnboardingStep';

const setLocalStorage = (boxId: string) => {
  if(!localStorage.box) {
    localStorage.box = JSON.stringify({ boxId })
  } else {

  }
  return JSON.parse(localStorage.box).boxId;

}

const MyBox = () => {
  const history = useHistory()
  const [selected, setSelected] = useState(setLocalStorage('btn-2'));
  console.log(selected);

  const handleBtnClick = (btnId: string) => {
    setSelected(btnId);
  }
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    history.push('/onboarding/my-details');
  };

  return (
    <>
      <header className="header">
        <div className="header__onboarding">
          <h2 className="header__logo">Charlie's closet</h2>
        </div>
      </header>
      <OnboardingStep handleNext={handleFormSubmit} previous="my-baby">
        <div className="boxes__container">
          <h1 className="boxes__title">Ma box</h1>
          <div className="split__container">
            <button
              type="button"
              onClick={() => handleBtnClick("btn-1")}
              className={`box ${selected === 'btn-1' ? 'selected' : ''}`}>
              <h2 className="box__title">La box fashion</h2>
              <ul>
                <li className="box__list">2 pantalons</li>
                <li className="box__list">2 hauts</li>
                <li className="box__list">1 ensemble</li>
              </ul>
              <p className="box__price">29,99€/mois</p>
            </button>
            <button
              type="button"
              onClick={() => handleBtnClick("btn-2")}
              className={`box ${selected === 'btn-2' ? 'selected' : ''}`}>
              <h2 className="box__title">La box compassion</h2>
              <ul>
                <li className="box__list">2 pantalons</li>
                <li className="box__list">2 hauts</li>
                <li className="box__list">2 nuits de babysitting</li>
                <li className="box__list">1 bouteille de rhum brun</li>
              </ul>
              <p className="box__price">39,99€/mois</p>
              <p className="box__tag">Best seller</p>
            </button>
          </div>
        </div>
      </OnboardingStep>
    </>
  );
};

export default MyBox;
