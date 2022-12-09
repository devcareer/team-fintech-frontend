import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../components/General/Button/Button';
import Input from '../components/General/Input/Input';
import Toast from '../components/General/Toast/Toast';

const PasswordReset = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Please use a correct email').required('email is required')
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
    <>
      {toast && <Toast onClick={closeModal} />}
      {toast && (
        <div className=" bg-dark z-10 fixed top-0 left-0 w-full h-screen opacity-30 "></div>
      )}
      <form>
        <div className="mx-0 my-0 px-5 pt-[84px] lg:w-[687px] lg:px-[143.5px] bg-white  py-[60px] lg:mx-auto lg:my-[53px] lg:shadow-lg">
          <h3 className="mb-2 text-center text-[24px] lg:text-[30px] mb-4">Forgot Password</h3>
          <p className="text-center mb-10 lg:mb-[60px]">
            Enter your registered email to reset your password
          </p>
          <div className="w-80 lg:w-[400px] mx-auto">
            <Input
              type="email"
              name="email"
              labelText="Email"
              placeholder="janedoe@gmail.com"
              rhf={{ ...register('email') }}
            />
            <p className="text-warningstate mt-0 ">{errors.email?.message}</p>
            <div className="my-10">
              <Button type="button" onClick={handleSubmit(handleClick)}>
                Reset Password
              </Button>
            </div>
            <p className="text-primary-300 text-center lg:text-[18px]">Back to Login</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default PasswordReset;
