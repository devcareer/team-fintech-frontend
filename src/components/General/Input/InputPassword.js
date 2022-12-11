// This component accepts a labeltext and placeholder prop to help you specify the
// label you want to use and placeholder <InputPassword label='your label'/>
import PropTypes from 'prop-types';
import React from 'react';
import eye from '../../../assets/icons/eye-icon.svg';

const InputPassword = ({ value, changeHandler, blurHandler, labeltext, placeholder }) => {
  return (
    <div className="relative">
      <label className="block text-text-2 text-sm  mb-2">{labeltext}</label>
      <input
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
        type="password"
        placeholder={placeholder}
        className="w-full  appearance-none border border-outline rounded-lg  py-3 px-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-text-3 placeholder:text-base lg:w-[400px] "
      />
      <button className="absolute left-[280px] bottom-4 lg:left-[358px]">
        <img src={eye} alt="eye-icon" />
      </button>
    </div>
  );
};
InputPassword.propTypes = {
  changeHandler: PropTypes.func,
  blurHandler: PropTypes.func,
  value: PropTypes.string,
  labeltext: PropTypes.string,
  placeholder: PropTypes.string
};
export default InputPassword;
