import PropTypes from 'prop-types';
import React from 'react';
import Check from '../../../assets/icons/Check-circle.svg';
import Close from '../../../assets/icons/x.svg';

const Toast = ({ onClick, title, text }) => {
  return (
    <div className="">
      <main className="w-full  bg-white shadow px-2 py-4 flex gap-2 absolute top-12 z-20 md:w-96 lg:w-96 lg:left-1/2 top-6">
        <div className=" my-auto ">
          <span>
            <img src={Check} alt="close icon" />
          </span>
        </div>
        <div className=" p-0 m-0 basis-full">
          <p className="text-success text-lg">{title}</p>
          <p className="text-sm text-text-2">{text}</p>
        </div>
        <div>
          <button onClick={onClick}>
            <img src={Close} alt="close icon " />
          </button>
        </div>
      </main>
    </div>
  );
};
Toast.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string
};
export default Toast;
