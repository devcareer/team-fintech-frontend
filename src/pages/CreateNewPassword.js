import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../components/General/Button/Button';
import Input from '../components/General/Input/Input';
import InputPassword from '../components/General/Input/InputPassword';
const CreateNewPassword = () => {
  const notify = () => toast('Wow so easy!');
  return (
    <div className="py-20 pb-72 w-80 mx-auto  lg:w-[687px] pb-10  py-0  mt-[89px] mb-[89px] lg:shadow-xl">
      <p className="text-2xl text-center lg:text-2xl font-medium">Reset Password</p>
      <p className="text-base px-5 text-center mb-10 lg:text-lg ">
        Enter the code sent to your email and create your new pasword
      </p>
      <div className="flex flex-col gap-6 lg:w-[400px] mx-auto lg:gap-14">
        <Input labelText="Email" placeholder="janedoe@gmail.com" type="email" />
        <InputPassword labeltext="New password" placeholder="enter new password" />
        <InputPassword labeltext="Confirm password" placeholder="retype new password" />
        <Button onClick={notify}>Reset Password</Button>
        <ToastContainer />
      </div>

      <p className="text-center mt-10 text-primary-300 lg:mt-[60px]">
        <a href="#">Back to login</a>
      </p>
    </div>
  );
};

export default CreateNewPassword;
