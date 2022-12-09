import React from 'react';
import EyeIcon from '../../assets/icons/eye-icon.svg';

const AccountBalance = () => {
  return (
    <div className="w-[90%] lg:pt-0 lg:pt-10 lg:mx-0 mx-auto lg:w-[95%] lg:ml-8 lg:pr-12 mt-10">
      <div className="bg-primary-25 h-40 rounded-lg px-5 flex justify-between items-center">
        <div>
          <p className="text-2xl font-medium mb-2 text-text-1">Account Balance</p>
          <p className="text-3xl font-medium text-text-1">
            <span className="mr-2">&#8358;</span>1,234.00
          </p>
        </div>
        <div>
          <img src={EyeIcon} className="w-8 h-8" alt="Eye-Icon" />
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
