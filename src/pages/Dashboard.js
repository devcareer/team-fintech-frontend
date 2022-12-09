import React, { useState } from 'react';
import AccountBalance from '../components/Dashboard/AccountBalance';
import DashboardMenu from '../components/Dashboard/DashboardMenu';
import Header from '../components/Dashboard/Header';
import ProfileProgressBar from '../components/Dashboard/ProfileProgressBar';
import QuickActions from '../components/Dashboard/QuickActions';
import RecentTransactions from '../components/Dashboard/RecentTransactions';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-[#FCFFEB] relative flex flex-col lg:grid lg:grid-cols-5 lg:pb-10">
      <div

      // className={`${
      //   showMenu ? 'block bg-red-500' : 'hidden'
      //   //   showMenu ? 'absolute left-[-200px] top-0 z-10' : 'left-0 relative'
      // } lg:block`}
      >
        <DashboardMenu />
      </div>
      <div className="col-span-4">
        <Header show={() => setShowMenu(!showMenu)} />
        <AccountBalance />
        <ProfileProgressBar />
        <QuickActions />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
