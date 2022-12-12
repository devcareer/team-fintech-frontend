import React from 'react';
import Icon from '../../assets/icons/wallet.svg';

const RecentTransactions = () => {
  return (
    <div className=" lg:w-[95%] w-[90%] mx-auto mt-10 lg:pr-12">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-normal text-text-2 mb-2">RECENT TRANSACTIONS</p>
        <p className="text-primary-300 font-normal text-sm">See all</p>
      </div>
      <div className="bg-primary-25 h-20 rounded-lg flex justify-between items-center px-6 mb-4">
        <div className="flex">
          <div className="w-10 h-10 bg-secondary-600 rounded-full flex justify-center mr-5">
            <img src={Icon} className="w-4 h-4 my-auto" alt="" />
          </div>
          <div>
            <p className="font-normal text-lg text-text-1">Airtime sent to Chidi</p>
            <p className="font-normal text-sm text-text-2">November 28, 2022</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-normal text-warningstate">
            <span className="mr-1">&#8358;</span>1,234.00
          </p>
        </div>
      </div>

      <div className="bg-primary-25 h-20 rounded-lg flex justify-between items-center px-6 mb-4">
        <div className="flex">
          <div className="w-10 h-10 bg-secondary-600 rounded-full flex justify-center mr-5">
            <img src={Icon} className="w-4 h-4 my-auto" alt="" />
          </div>
          <div>
            <p className="font-normal text-lg text-text-1">Airtime sent to Chidi</p>
            <p className="font-normal text-sm text-text-2">November 28, 2022</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-normal text-success">
            <span className="mr-1">&#8358;</span>1,234.00
          </p>
        </div>
      </div>

      <div className="bg-primary-25 h-20 rounded-lg flex justify-between items-center px-6 mb-4">
        <div className="flex">
          <div className="w-10 h-10 bg-secondary-600 rounded-full flex justify-center mr-5">
            <img src={Icon} className="w-4 h-4 my-auto" alt="" />
          </div>
          <div>
            <p className="font-normal text-lg text-text-1">Airtime sent to Chidi</p>
            <p className="font-normal text-sm text-text-2">November 28, 2022</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-normal text-warningstate">
            <span className="mr-1">&#8358;</span>1,234.00
          </p>
        </div>
      </div>

      <div className="bg-primary-25 h-20 rounded-lg flex justify-between items-center px-6 mb-4">
        <div className="flex">
          <div className="w-10 h-10 bg-secondary-600 rounded-full flex justify-center mr-5">
            <img src={Icon} className="w-4 h-4 my-auto" alt="" />
          </div>
          <div>
            <p className="font-normal text-lg text-text-1">Airtime sent to Chidi</p>
            <p className="font-normal text-sm text-text-2">November 28, 2022</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-normal text-success">
            <span className="mr-1">&#8358;</span>1,234.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
