// The button component accepts some props
//  the size and the type of button
//  to use <Button size='' type=''>button name</Button>
//  If you dont specify it uses the default
// currently there are only 2 button size the default and lg
import PropTypes from 'prop-types';
import React from 'react';
const Button = ({ children, size, type }) => {
  return (
    <button type={type} className={`btn btn-${size}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  type: PropTypes.string
};
export default Button;
