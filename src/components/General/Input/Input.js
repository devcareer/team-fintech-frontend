// THis components accepts some props like the
// type---the type of input ,name---name of input,
// labelText---title of the label, placeholder and width if you dont specify a default is used
import PropTypes from 'prop-types';
import React from 'react';
const Input = ({ type, name, labelText, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-text-2 text-sm  mb-2">
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full appearance-none border border-outline rounded-lg  py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-text-3 placeholder:text-base"
      />
    </div>
  );
};
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string
};
export default Input;