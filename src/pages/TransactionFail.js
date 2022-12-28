import React from 'react';
import failure from '../assets/images/Failure_mobile.svg';
import Button from '../components/General/Button/Button';

const TransactionFail = () => {
  return (
    <div className="text-center  h-screen">
      {/* <div> */}
      <p className="pt-[60px] pb-[25px] leading-10 text-3xl font-medium tracking-[-0.021em] font- ">
        Money not sent
      </p>
      <img
        src={failure}
        className="w-full h-[400px] object-top object-cover"
        alt="transaction failed image"
      />
      <p className="py-10 px-5 text-left text-lg leading-6 font-normal font-custom tracking-[-0.011em] text-[#292627]">
        Sorry, we had an issue confirming your transaction.
      </p>
      <Button type="button" className="text-primary-300 bg-white mx-5">
        Back to home
      </Button>
      {/* </div> */}
    </div>
  );
};

export default TransactionFail;
