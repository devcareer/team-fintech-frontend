// The button component accepts a type and onClick prop to use <Button>{title}</Button>
import PropTypes from 'prop-types';
import React from 'react';
const Button = ({ children, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="p-2.5 bg-primary-300 w-full  rounded-lg whitespace-nowrap text-white text-base hover:bg-primary-200 lg:h-[60px]">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;
