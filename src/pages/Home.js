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
      <div className="absolute   lg:static basis-1/5 ">
        <NavBar state={show} onClick={handleClick} />
      </div>
      <div className="border w-full">
        <Header onClick={handleClick} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
