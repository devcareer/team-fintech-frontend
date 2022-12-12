import React from 'react';
import SendData from '../../assets/icons/Internet-Share.svg';
import SendMoney from '../../assets/icons/money-2.svg';
import SendMoney2 from '../../assets/icons/money-send.svg';
import FundAccount from '../../assets/icons/wallet.svg';
import Card from './Card';

const QuickActions = () => {
  return (
    <div className=" lg:w-[95%] w-[90%] mx-auto lg:pr-12 pb-8">
      <p className="lg:text-2xl text-base font-normal text-text-2 mb-4">QUICK ACTIONS</p>
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-4">
        <Card
          Icon={SendMoney}
          bgColor="bg-primary-25"
          iconColor="bg-primary-500"
          borderColor="border-primary-200"
          Text="Send Money"
          url="/sendmoney"
        />
        <Card
          Icon={SendData}
          bgColor="bg-secondary-50"
          iconColor="bg-secondary-500"
          borderColor="border-[#D4AB8E]"
          Text="Send Data"
        />
        <Card
          Icon={SendMoney2}
          bgColor="bg-[#FFF4E1]"
          iconColor="bg-[#FBAE26]"
          borderColor="border-[#FBAE26]"
          Text="Send Airtime"
        />
        <Card
          Icon={FundAccount}
          bgColor="bg-[#EDFEEC]"
          iconColor="bg-[#1BF516]"
          borderColor="border-[#1BF516]"
          Text="Fund Account"
        />
      </div>
    </div>
  );
};

export default QuickActions;
