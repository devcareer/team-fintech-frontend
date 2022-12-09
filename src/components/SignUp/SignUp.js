import React from 'react';
import Button from '../General/Button/Button';
import Input from '../General/Input/Input';
import InputPassword from '../General/Input/InputPassword';

import useForm from '../../hooks/useForm';

const SignUp = () => {
  const {
    value: enteredFullName,
    isValid: enteredFullNameIsValid,
    // hasError: enteredFullNameHasError,
    valueChangeHandler: FullNameChangeHandler,
    valueInputBlurHandler: FullNameInputBlurHandler,
    reset: fullNameInputReset
  } = useForm((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    // hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset
  } = useForm((value) => value.trim() !== '' && value.includes('@'));
  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    // hasError: enteredNumberHasError,
    valueChangeHandler: numberChangeHandler,
    valueInputBlurHandler: numberInputBlurHandler,
    reset: numberInputReset
  } = useForm((value) => {
    const phoneRegExp =
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    return phoneRegExp.test(value) === true;
  });

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueInputBlurHandler: passwordInputBlurHandler,
    reset: passwordInputReset
  } = useForm((value) => value.trim().length >= 8);
  let formIsValid = false;

  if (
    enteredFullNameIsValid &&
    enteredEmailIsValid &&
    enteredNumberIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log('submitted, yayy!!');

    //To clear the input field after submitting
    fullNameInputReset();
    emailInputReset();
    numberInputReset();
    passwordInputReset();
  };

  return (
    <form onSubmit={formSubmitHandler} className="lg:h-full flex flex-cols self-center">
      <div className="px-5 pt-[84px] pb-[164px] lg:w-[632px] my-[68px] mx-auto pb-[60px] pt-[60px] lg:border border-solid border-1 rounded-2xl border-outline">
        <h2 className="text-[32px] text-center text-text-1">Welcome to my App</h2>
        <p className="mx-[10px] text-center text-text-2 mb-10 leading-2xl text-base">
          Create an account to purchase data and airtime
        </p>
        <div className="w-80 lg:w-[400px] mx-auto ">
          <div className="mb-6">
            <Input
              value={enteredFullName}
              changeHandler={FullNameChangeHandler}
              blurHandler={FullNameInputBlurHandler}
              name="Full Name"
              type="text"
              labelText="Full Name"
              placeholder="enter full name"
            />
          </div>
          <div className="mb-6">
            <Input
              value={enteredEmail}
              changeHandler={emailChangeHandler}
              blurHandler={emailInputBlurHandler}
              name="Email"
              type="email"
              labelText="Email"
              placeholder="enter email"
            />
          </div>
          <div className="mb-6">
            <Input
              value={enteredNumber}
              changeHandler={numberChangeHandler}
              blurHandler={numberInputBlurHandler}
              name="Phone Number"
              type="phone"
              labelText="Phone Number"
              placeholder="enter phone number"
            />
          </div>
          <InputPassword
            value={enteredPassword}
            changeHandler={passwordChangeHandler}
            blurHandler={passwordInputBlurHandler}
            labeltext="Password"
            placeholder="enter password"
          />
          {enteredPasswordHasError && (
            <p className="mt-0.5 align-auto text-warning-2 text-xs leading-4">
              must be at least 8 characters
            </p>
          )}
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
