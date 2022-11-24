// This component accepts a labeltext prop to help you specify the
// label you want to use <InputPassword label='your label'/>
// if you dont specify a label it uses the default
import PropTypes from 'prop-types';
import React from 'react';
import eye from '../../../assets/icons/eye-icon.svg';

const InputPassword = ({ labeltext }) => {
  return (
    <div className="relative">
      <label className="block text-text-2 text-sm  mb-2">{labeltext}</label>
      <input
        type="password"
        placeholder="*******"
        className={`w-80  appearance-none border border-outline rounded-lg  py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-text-3 placeholder:text-base`}
      />
      <button className={`absolute left-72  bottom-4`}>
        <img src={eye} alt="eye-icon" />
      </button>
    </div>
  );
};
InputPassword.propTypes = {
  labeltext: PropTypes.string
};
export default InputPassword;
