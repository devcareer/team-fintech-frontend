import React from 'react';
import { useState } from 'react';
import InputPhone from '../General/Input/InputPhone';
import Input from '../General/Input/Input';
import InputPassword from '../General/Input/InputPassword';
import Button from '../General/Button/Button';

const SignIn = () => {
  const [email, setEmail] = useState(true);
  const emailClickHandler = () => {
    setEmail(true);
  };
  const phoneClickHandler = () => {
    setEmail(false);
  };
  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-text-1 font-medium font-custom mb-2 text-2xl">Welcome back</h1>
      <p className="font-normal text-text-2 mb-10 text-base">
        Nice to have you back. Sign In to access all our services
      </p>
      <div className={`bg-primary-25 py-3 px-4 rounded-lg flex gap-4 mb-9`}>
        <button
          className={`basis-6/12 py-2.5 rounded-lg ${
            email ? `bg-white text-text-1` : `text-text-3`
          }`}
          onClick={emailClickHandler}>
          Email
        </button>
        <button
          className={`basis-6/12 py-2.5 rounded-lg ${
            !email ? `bg-white text-text-1` : `text-text-3`
          }`}
          onClick={phoneClickHandler}>
          Number
        </button>
      </div>
      {/* {email ? (
        <Input type="email" name="email" placeholder="janedoe@gmail.com" className="mb-4" />
      ) : (
        <InputPhone />
      )} */}
      <div className="mb-6">
        {email ? (
          <Input type="email" name="email" placeholder="janedoe@gmail.com" />
        ) : (
          <InputPhone />
        )}
      </div>
      <InputPassword />
      <a className="block text-end text-primary-300 ">Forgot password</a>
      <div className="mt-8">
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default SignIn;
