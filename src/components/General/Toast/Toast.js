import PropTypes from 'prop-types';
import React from 'react';
import Check from '../../../assets/icons/Check-circle.svg';
import Close from '../../../assets/icons/x.svg';

const Toast = ({ onClick }) => {
  return (
    <div className="">
      <main className="w-full bg-white shadow px-3 py-4 flex gap-3 absolute top-12 z-20">
        <div className=" my-auto ">
          <span>
            <img src={Check} alt="close icon" />
          </span>
        </div>
        <div className="">
          <p className="text-success text-lg">Reset was successfu!</p>
          <p className="text-sm text-text-2">
            Check you mail -janedoe@gmail.com for reset instructions.if not found,try another mail
          </p>
        </div>
        <div className=" ">
          <button onClick={onClick}>
            <img src={Close} alt="close icon" />
          </button>
        </div>
      </main>
    </div>
  );
};
Toast.propTypes = {
  onClick: PropTypes.string
};
export default Toast;
