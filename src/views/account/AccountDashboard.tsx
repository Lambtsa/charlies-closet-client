import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';

/*
  Components
*/
import AccountNavigation from '../../components/AccountNavigation';

const AccountDashboard = () => {
  const { user } = useContext(UserContext);

  if (!user.onboardingProgress.finished) {
    return (
      <Redirect push to={user.onboardingProgress.step} />
    )
  }

  return (
    <>
      <AccountNavigation>
        <h2>Hello Dashboard</h2>
      </AccountNavigation>
    </>
  );
};

export default AccountDashboard;
