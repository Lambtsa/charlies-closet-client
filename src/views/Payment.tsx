import React from 'react';
import OnboardingStep from '../components/OnboardingStep';

const Payment = () => {

  return (
    <>
      <header className="header">
        <div className="header__onboarding">
          <h2 className="header__logo">Charlie's closet</h2>
        </div>
      </header>
      <OnboardingStep previous="my-details" next="" paymentStep>
        <h2>Payment</h2>
      </OnboardingStep>
    </>
  );
};

export default Payment;
