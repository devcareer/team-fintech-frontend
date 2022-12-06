import PropTypes from 'prop-types';
import React from 'react';
import Check from '../../../assets/icons/Check-circle.svg';
import Close from '../../../assets/icons/x.svg';

const Toast = ({ onClick }) => {
  return (
    <div className="">
      <main className="w-full bg-white shadow px-3 py-4 flex justify-center gap-5 absolute top-12 z-20 md:w-96 lg:w-96 lg:left-1/2 top-6">
        <div className=" my-auto ">
          <span>
            <img src={Check} alt="close icon" />
          </span>
        </div>
        <div className="">
          <p className="text-success text-lg">New password confirmed!</p>
          <p className="text-sm text-text-2">Please proceed to login</p>
        </div>
        <div className=" ml-5">
          <button onClick={onClick}>
            <img src={Close} alt="close icon " />
          </button>
        </div>
      </main>
    </div>
  );
};
Toast.propTypes = {
  onClick: PropTypes.func
};
export default Toast;
