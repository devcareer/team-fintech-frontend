import React from 'react';
const Header = () => {
  return (
    <div className="flex border border-red-500 p-8 gap-60 justify-center items-center">
      <span>
        <p>Brand name</p>
      </span>
      <span>
        <ul className="flex gap-20">
          <li>Products</li>
          <li>About us</li>
          <li>FAQ</li>
        </ul>
      </span>
      <span className="flex items-center gap-20 ">
        <p className="text-primary-300">Sign In</p>
        <button className="bg-primary-300 text-white py-[14px] px-8 rounded-lg">
          Create account
        </button>
      </span>
    </div>
  );
};

export default Header;
