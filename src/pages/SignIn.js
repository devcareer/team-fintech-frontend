import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/General/Button/Button';
import Input from '../components/General/Input/Input';
import InputPassword from '../components/General/Input/InputPassword';
import InputPhone from '../components/General/Input/InputPhone';

const SignIn = () => {
  const [email, setEmail] = useState(true);
  const emailClickHandler = () => {
    setEmail(true);
  };
  const phoneClickHandler = () => {
    setEmail(false);
  };
  return (
    <div className="py-20 pb-72 w-80 mx-auto lg:w-[687px] pb-10  py-0  mt-[89px] mb-[89px] lg:shadow-xl">
      <h1 className="text-text-1 font-medium font-custom mb-2 text-2xl text-center">
        Welcome back
      </h1>
      <p className="font-normal text-text-2 mb-10 text-base text-center">
        Nice to have you back. Sign In to access all our services
      </p>
      <form className="flex flex-col  lg:w-[400px] mx-auto">
        <div className={`bg-primary-25 py-3 px-4 rounded-lg flex gap-4 mb-9`}>
          <button
            type="button"
            className={`basis-6/12 py-2.5 rounded-lg ${
              email ? `bg-white text-text-1` : `text-text-3`
            }`}
            onClick={emailClickHandler}>
            Email
          </button>
          <button
            type="button"
            className={`basis-6/12 py-2.5 rounded-lg ${
              !email ? `bg-white text-text-1` : `text-text-3`
            }`}
            onClick={phoneClickHandler}>
            Number
          </button>
        </div>

        <div className="mb-6">
          {email ? (
            <Input type="email" name="email" placeholder="janedoe@gmail.com" labelText="Email" />
          ) : (
            <InputPhone />
          )}
        </div>
        <InputPassword labeltext="Password" />
        <a className="block text-end text-primary-300 ">Forgot password</a>
        <div className="mt-8">
          <Button type="button">Sign In</Button>
        </div>
        <p className="mt-8 text-center">
          Don&apos;t have an account?
          <Link to="/signup" className="text-primary-300 ">
            Create One
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
