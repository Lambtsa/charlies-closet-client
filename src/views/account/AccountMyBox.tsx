import React, { useContext, useState } from 'react';
import { UserContext } from '../../hooks/UserContext';
import { Redirect } from 'react-router-dom';

/*
  Components
*/
import AccountNavigation from '../../components/AccountNavigation';

const MyBaby = () => {
  const { user } = useContext(UserContext);
  const [selected, setSelected] = useState('btn-2');

  if (!user.onboardingProgress.finished) {
    return (
      <Redirect push to={user.onboardingProgress.step} />
    )
  }

  const handleBtnClick = (btnId: string) => {
    setSelected(btnId);
  }

  const handleSaveForm = (e: any) => {
    e.preventDefault();
    console.log('clicked save');
  };

  return (
    <>
      <AccountNavigation handleSaveForm={handleSaveForm}>
        <div className="boxes__container account">
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
      </AccountNavigation>
    </>
  );
};

export default MyBaby;
