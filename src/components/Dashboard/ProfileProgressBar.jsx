import React from 'react';
import PieChart from '../../assets/images/Piechart.svg';

const ProfileProgressBar = () => {
  return (
    <div className="flex py-20 pl-8">
      <img src={PieChart} alt="" />
      <div>
        <p className="text-2xl font-medium text-text-1">Complete your profile</p>
        <p className="text-lg font-normal text-text-2">
          You’re almost there. Just add a few steps left to finish setting up your account
        </p>
        <p className="text-lg text-text-2 font-normal">Add your BVN</p>
        <p className="text-lg text-text-2 font-normal">Upload your personal information</p>
        <p className="text-lg text-text-2 font-normal">Set a transaction pin</p>
      </div>
    </div>
  );
};

export default ProfileProgressBar;
