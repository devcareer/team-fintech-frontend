import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../components/General/Button/Button';
import Input from '../components/General/Input/Input';
import InputPassword from '../components/General/Input/InputPassword';
import Toast from '../components/General/Toast/Toast';
const CreateNewPassword = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Please use a correct email').required('email is required'),
    newPassword: yup
      .string()
      .min(8, 'must be at leaset 8 characters')
      .max(15, 'max value 15')
      .required('This Field is required'),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Password must be the same')
  });
  const formOptions = { resolver: yupResolver(schema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm(formOptions);
  const [toast, settoast] = useState(false);

  const handleClick = (data) => {
    console.log(data);
    settoast(!false);
    reset();
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
        <form className="flex flex-col gap-6 lg:w-[400px] mx-auto ">
          <Input
            labelText="Email"
            placeholder="janedoe@gmail.com"
            type="email"
            name="email"
            rhf={{ ...register('email') }}
          />
          <p className="text-warningstate mt-0 ">{errors.email?.message}</p>
          <InputPassword
            labeltext="New password"
            placeholder="enter new password"
            name="newPassword"
            rhf={{ ...register('newPassword') }}
          />
          <p className="text-warningstate mt-0 ">{errors.newPassword?.message}</p>
          <InputPassword
            labeltext="Confirm password"
            placeholder="retype new password"
            name="confirmPassword"
            rhf={{ ...register('confirmPassword') }}
          />
          <p className="text-warningstate mt-0 ">{errors.confirmPassword?.message}</p>

          <Button type="submit" onClick={handleSubmit(handleClick)}>
            Reset Password
          </Button>
        </form>

        <p className="text-center mt-10 text-primary-300 lg:mt-[60px]">
          <a href="#">Back to login</a>
        </p>
      </div>
    </div>
  );
};

export default CreateNewPassword;
