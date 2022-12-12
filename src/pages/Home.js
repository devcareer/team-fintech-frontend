import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar/Navbar';
const Home = () => {
  const [show, SetShow] = useState(false);
  const handleClick = () => {
    SetShow(!show);
  };
  return (
    <div className="relative flex border">
      <div
        className={`absolute top-0 left-0 w-[70%] bg-white z-40 transition duration-1000 ease-in-out ${
          show ? `translate-x-0 ` : `-translate-x-full `
        } lg:translate-x-0 lg:static lg:w-[20%]`}>
        <NavBar state={show} onClick={handleClick} />
      </div>
      <div className="border relative w-full">
        <Header onClick={handleClick} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
