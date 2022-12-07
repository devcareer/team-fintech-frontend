// This component accepts a labeltext and placeholder prop to help you specify the
// label you want to use and placeholder <InputPassword label='your label'/>
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import eye from '../../../assets/icons/eye-icon.svg';

const InputPassword = ({ labeltext, placeholder, name, rhf }) => {
  const [dPassword, Setdpassword] = useState(false);
  const displayPassword = () => {
    Setdpassword(!dPassword);
  };
  return (
    <div className="relative">
      <label className="block text-text-2 text-sm  mb-2">{labeltext}</label>
      <input
        type={dPassword ? 'text' : 'password'}
        placeholder={placeholder}
        name={name}
        {...rhf}
        className="w-full  appearance-none border border-outline rounded-lg  py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-text-3 placeholder:text-base lg:w-[400px] "
      />
      <button
        type="button"
        className="absolute left-[280px] bottom-4 lg:left-[358px]"
        onClick={displayPassword}>
        <img src={eye} alt="eye-icon" />
      </button>
    </div>
  );
};
InputPassword.propTypes = {
  labeltext: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  rhf: PropTypes.object,
  onClick: PropTypes.func
};
export default InputPassword;
