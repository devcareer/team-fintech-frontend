import PropTypes from 'prop-types';
import React from 'react';
import Menu from '../assets/icons/menu.svg';
import Notification from '../assets/icons/notification.svg';
import Avatar from '../assets/images/Avatar.svg';

const Header = ({ onClick }) => {
  return (
    <div className="border ">
      <div className="w-[90%] mx-auto lg:hidden py-8 ">
        <div className="items-center flex justify-between">
          <button onClick={onClick}>
            <img src={Menu} className="h-6 w-6" alt="notification" />
          </button>
          <button>
            <img src={Notification} className="h-6 w-6" alt="notification" />
          </button>
        </div>
      </div>
      <div className=" pt-8 border-t-2 lg:border-b-2 border-outline">
        <div className=" lg:w-[95%] w-[90%] mx-auto items-center lg:pr-10 pr-0 lg:mb-7 flex justify-between">
          <div>
            <p className="lg:text-4xl text-xl font-medium text-text-1 mb-4">Hi Chinwendu</p>
            <p className="lg:text-xl text-base font-normal text-text-2">
              Good morning. What do you want to do today?
            </p>
          </div>
          <div className="lg:w-24 lg:h-24 h-14 w-14 relative">
            <img src={Avatar} className="lg:w-24 lg:h-24 h-14 w-14 " alt="Profile-Image" />
            <div className=" lg-block hidden h-10 w-10 absolute -right-2 -bottom-1 rounded-full flex justify-center items-center bg-[#ffffff]">
              <img src={Notification} className="h-5 w-5" alt="notification" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  state: PropTypes.bool,
  onClick: PropTypes.func
};
export default Header;
