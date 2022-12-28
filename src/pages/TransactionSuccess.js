import React from 'react';
import success from '../assets/images/succ.png';
import Button from '../components/General/Button/Button';

const TransactionSuccess = () => {
  return (
    <div className="text-center  h-screen">
      {/* <div> */}
      <p className="pt-[60px] pb-[25px] leading-10 text-3xl font-medium tracking-[-0.021em] font- ">
        Transaction Successful!
      </p>
      <img
        src={success}
        className="w-full h-[400px] object-top object-cover"
        alt="transaction successful image"
      />
      <p className="py-10 px-5 text-left text-lg leading-6 font-normal font-custom tracking-[-0.011em] text-[#292627]">
        Money sent successfully. You sent #15,000 to James Uyi. You can review it in your
        transaction history
      </p>
      <Button type="button" className="text-primary-300 bg-white mx-5">
        Back to home
      </Button>
      {/* </div> */}
    </div>
  );
};

export default TransactionSuccess;
