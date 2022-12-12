import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../components/General/Button/Button';
import Input from '../components/General/Input/Input';
import InputPassword from '../components/General/Input/InputPassword';
const SignUp = () => {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const schema = yup.object().shape({
    fullName: yup.string().min(3).required('This field is required'),
    email: yup.string().email('Please use a correct email').required('email is required'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: yup
      .string()
      .min(8, 'must be at least 8 characters')
      .max(15, 'max value 15')
      .required('This field is required')
  });
  const formOptions = { resolver: yupResolver(schema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm(formOptions);

  const handleClick = (data) => {
    console.log(data);
    reset();
  };

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
              name="fullName"
              type="text"
              labelText="Full Name"
              placeholder="enter full name"
              rhf={{ ...register('fullName') }}
            />
            <p className="mt-0.5 align-auto text-warningstate text-xs leading-4">
              {errors.fullName?.message}
            </p>
          </div>
          <div className="mb-6">
            <Input
              name="email"
              type="email"
              labelText="Email"
              placeholder="enter email"
              rhf={{ ...register('email') }}
            />
            <p className="mt-0.5 align-auto text-warningstate text-xs leading-4">
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-6">
            <Input
              name="phoneNumber"
              type="phone"
              labelText="Phone Number"
              placeholder="enter phone number"
              rhf={{ ...register('phoneNumber') }}
            />
            <p className="mt-0.5 align-auto text-warningstate text-xs leading-4">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <InputPassword
            name="password"
            labeltext="Password"
            placeholder="enter password"
            rhf={{ ...register('password') }}
          />
          <p className="mt-0.5 align-auto text-warningstate text-xs leading-4">
            {errors.password?.message}
          </p>
          <div className="mt-[58px] lg:mt-[60px]">
            <Button type="submit" onClick={handleSubmit(handleClick)}>
              Create Account
            </Button>
          </div>
          <p className="text-center mt-10 ">
            Already have an account?{' '}
            <Link to="/signin" className="text-primary-300">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
