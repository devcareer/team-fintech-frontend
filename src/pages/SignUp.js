import React from 'react';
import Button from '../components/General/Button/Button';
import Input from '../components/General/Input/Input';
import InputPassword from '../components/General/Input/InputPassword';

const SignUp = () => {
  return (
    <form className="lg:h-full flex flex-cols self-center">
      <div className="px-5 pt-[84px] pb-[164px] lg:w-[632px] my-[68px] mx-auto pb-[60px] pt-[60px] lg:border border-solid border-1 rounded-2xl border-outline">
        <h2 className="text-[32px] text-center text-text-1">Welcome to my App</h2>
        <p className="mx-[10px] text-center text-text-2 mb-10 leading-2xl text-base">
          Create an account to purchase data and airtime
        </p>
        <div className="w-80 lg:w-[400px] mx-auto ">
          <div className="mb-6">
            <Input
              name="Full Name"
              type="text"
              labelText="Full Name"
              placeholder="enter full name"
            />
          </div>
          <div className="mb-6">
            <Input name="Email" type="email" labelText="Email" placeholder="enter email" />
          </div>
          <div className="mb-6">
            <Input
              name="Phone Number"
              type="phone"
              labelText="Phone Number"
              placeholder="enter phone number"
            />
          </div>
          <InputPassword labeltext="Password" placeholder="enter password" />
          <p className="mt-0.5 align-auto text-warningstate text-xs leading-4">
            must be at least 8 characters
          </p>
          <div className="mt-[58px] lg:mt-[60px]">
            <Button type="submit">Create Account</Button>
          </div>
          <p className="text-center mt-10 ">
            Already have an account? <span className="text-primary-300">Sign In</span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
