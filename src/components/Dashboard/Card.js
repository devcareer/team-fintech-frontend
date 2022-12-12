import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ Icon, bgColor, iconColor, borderColor, Text, url }) => {
  return (
    <Link to={url}>
      <div className={` border-2 ${borderColor} ${bgColor} h-40 rounded-lg px-4`}>
        <div className={`w-12 h-12 ${iconColor} rounded-full flex justify-center mt-5`}>
          <img src={Icon} className="w-8 h-8 my-auto" alt="" />
        </div>
        <p className="mt-10 text-lg font-normal text-text-2">{Text}</p>
      </div>
    </Link>
  );
};

Card.propTypes = {
  bgColor: PropTypes.any,
  iconColor: PropTypes.any,
  borderColor: PropTypes.any,
  Text: PropTypes.string,
  url: PropTypes.any,
  Icon: PropTypes.any
};

export default Card;
