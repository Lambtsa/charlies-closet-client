import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from '../../components/CheckoutForm';

const PUBLIC_KEY = "pk_test_51IqCHuCMc4r979byCs8JDKIFuggy18xHjxbmsPGxtbZPSHlJRLCKLVdVE8NzyHh5BgW7aZoXZyq1HpQYiYFvRiJf00vROOR21S";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const OnboardingPayment = () => {

  return (
    <Elements options={{ locale: 'fr' }}  stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default OnboardingPayment;
