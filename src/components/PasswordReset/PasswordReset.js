import React from 'react';
import Button from '../General/Button/Button';
import Input from '../General/Input/Input';

const PasswordReset = () => {
  return (
    <form>
      <div className="mx-0 my-0 px-5 pt-[84px] lg:w-[687px] lg:px-[143.5px] bg-white  py-[60px] lg:mx-auto lg:my-[53px] lg:shadow-lg">
        <h3 className="mb-2 text-center text-[24px] lg:text-[30px] mb-4">Forgot Password</h3>
        <p className="text-center mb-10 lg:mb-[60px]">
          Enter your registered email to reset your password
        </p>
        <div className="w-80 lg:w-[400px] mx-auto">
          <Input type="email" labelText="Email" placeholder="janedoe@gmail.com" />
          <div className="my-10">
            <Button type="submit">Reset Password</Button>
          </div>
          <p className="text-primary-300 text-center lg:text-[18px]">Back to Login</p>
        </div>
      </div>
    </form>
  );
};

export default PasswordReset;
