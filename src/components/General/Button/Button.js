// The button component accepts some props
//  the size and the type of button
// It now accepts a margin top prop too mt
//  to use <Button size='' type=''>button name</Button>
//  If you dont specify it uses the default
// currently there are only 2 button size the default and lg
// mt-${mt} p-2.5 bg-primary-300 w-full  rounded-lg whitespace-nowrap text-white text-base hover:bg-primary-200
//       lg:text-lg py-4 px-14;
import PropTypes from 'prop-types';
import React from 'react';
const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="p-2.5 bg-primary-300 w-full  rounded-lg whitespace-nowrap text-white text-base hover:bg-primary-200 lg:h-[60px]">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};
export default Button;
