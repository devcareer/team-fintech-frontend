import React from 'react';
import AccountBalance from '../components/Dashboard/AccountBalance';
import ProfileProgressBar from '../components/Dashboard/ProfileProgressBar';
import QuickActions from '../components/Dashboard/QuickActions';
import RecentTransactions from '../components/Dashboard/RecentTransactions';

const Dashboard = () => {
  return (
    <>
      <AccountBalance />
      <ProfileProgressBar />
      <QuickActions />
      <RecentTransactions />
    </>
  );
};

export default Dashboard;
