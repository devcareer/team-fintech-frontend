import { useState } from 'react';
import Button from '../components/General/Button/Button';
import Input from '../components/General/Input/Input';
import InputPassword from '../components/General/Input/InputPassword';
import Toast from '../components/General/Toast/Toast';
const CreateNewPassword = () => {
  const [toast, settoast] = useState(false);
  const [resetPassword, SetresetPassword] = useState({
    email: '',
    newPassword: '',
    confirmPassword: ''
  });
  const handleClick = () => {
    console.log(resetPassword);
    settoast(!false);
  };
  const handleOnchange = (e) => {
    SetresetPassword({
      ...resetPassword,
      [e.target.name]: e.target.value
    });
  };
  const closeModal = () => {
    settoast(false);
  };
  return (
    <div className="">
      {toast && <Toast onClick={closeModal} />}
      {toast && (
        <div className=" bg-dark z-10 fixed top-0 left-0 w-full h-screen opacity-30 "></div>
      )}

      <div className=" py-20 pb-72 w-80 mx-auto lg:w-[687px] pb-10  py-0  mt-[89px] mb-[89px] lg:shadow-xl">
        <p className="text-2xl text-center lg:text-2xl font-medium">Reset Password</p>
        <p className="text-base px-5 text-center mb-10 lg:text-lg ">
          Enter the code sent to your email and create your new pasword
        </p>
        <div className="flex flex-col gap-6 lg:w-[400px] mx-auto lg:gap-14">
          <Input
            labelText="Email"
            placeholder="janedoe@gmail.com"
            type="email"
            name="email"
            value={resetPassword.Email}
            onChange={handleOnchange}
          />
          <InputPassword
            labeltext="New password"
            placeholder="enter new password"
            name="newPassword"
            value={resetPassword.NewPassword}
            onChange={handleOnchange}
          />
          <InputPassword
            labeltext="Confirm password"
            placeholder="retype new password"
            name="confirmPassword"
            value={resetPassword.confirmPassword}
            onChange={handleOnchange}
          />
          <Button onClick={handleClick}>Reset Password</Button>
        </div>

        <p className="text-center mt-10 text-primary-300 lg:mt-[60px]">
          <a href="#">Back to login</a>
        </p>
      </div>
    </div>
  );
};

export default CreateNewPassword;