import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useHistory } from 'react-router-dom';

interface OnboardingType {
  children: any,
  previous?: string,
  next?: string,
  paymentStep?: boolean,

}

const OnboardingStep = (props: OnboardingType) => {
  const { children, previous, next, paymentStep } = props;
  const history = useHistory();

  const handleSubmitPayment = (e: any) => {
    e.preventDefault();
    history.push(`/account/my-baby`);
  }
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    history.push(`/onboarding/${next}`);
  };

  const handleBtnBack = () => {
    if (previous) {
      history.push(`/onboarding/${previous}`);
    }
  };

  return (
    <>
      <section className="onboarding">
        <div className="nav__container">
          <nav className="nav__links">
            <NavLink activeClassName="nav__link--selected" className="nav__link" to="/onboarding/my-baby">Mon bébé</NavLink>
            <NavLink activeClassName="nav__link--selected" className="nav__link" to="/onboarding/my-box">Ma box</NavLink>
            <NavLink activeClassName="nav__link--selected" className="nav__link" to="/onboarding/my-details">Mes coordonnées</NavLink>
            <NavLink activeClassName="nav__link--selected" className="nav__link" to="/onboarding/payment">Règlement</NavLink>
          </nav>
        </div>
        {children}
        <div className="btn__container">
          {previous && <button onClick={handleBtnBack} className="form__btn back" type="button">Back</button>}
          {next && <button onClick={handleSubmitForm} className="form__btn" type="submit">Next</button>}
          {paymentStep && (
            <button onClick={handleSubmitPayment} className="form__btn" type="submit">
              <FontAwesomeIcon className="btn__icon" icon={faLock} />
              Pay
          </button>
          )}
        </div>
      </section>
    </>
  )
};

export default OnboardingStep;
