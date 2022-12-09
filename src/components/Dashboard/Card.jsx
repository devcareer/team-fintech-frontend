import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ Icon, bgColor, iconColor, borderColor, Text }) => {
  return (
    <div className={` border-2 ${borderColor} ${bgColor} h-40 rounded-lg px-4`}>
      <div className={`w-12 h-12 ${iconColor} rounded-full flex justify-center mt-5`}>
        <img src={Icon} className="w-8 h-8 my-auto" alt="" />
      </div>
      <p className="mt-10 text-lg font-normal text-text-2">{Text}</p>
    </div>
  );
};

Card.propTypes = {
  bgColor: PropTypes.any,
  iconColor: PropTypes.any,
  borderColor: PropTypes.any,
  Text: PropTypes.string,
  Icon: PropTypes.any
};

export default Card;
