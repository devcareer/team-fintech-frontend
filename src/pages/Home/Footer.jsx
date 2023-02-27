import React from 'react';

const Footer = () => {
  return (
    <div className="bg-primary-900 p-10 py-20">
      <section className="flex text-white justify-center gap-44 mt-10">
        <ul className=" flex flex-col gap-2">
          <li className="mb-4">My App</li>
          <li>About us</li>
          <li>Services</li>
          <li>Careers</li>
        </ul>
        <ul className=" flex flex-col gap-2">
          <li className="mb-4">Resources</li>
          <li>FAQ</li>
          <li>Help & Support</li>
        </ul>
        <ul className=" flex flex-col gap-2">
          <li className="mb-4">Legal</li>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
          <li>Accessibility</li>
        </ul>
        <ul className=" flex flex-col gap-2">
          <li className="mb-4">Contact Us</li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </section>
      <hr className="text-white w-3/4 my-10 flex mx-auto " />

      <section className="text-white justify-center items-center flex flex-col gap-4 pb-20">
        <span className="flex gap-10">
          <p>All rights reserved.</p>
          <p>&copy; 2023 My app</p>
        </span>
        <p>The financial services provided by my app are supported by WEMA Bank Nigeria PLC. </p>
        <p>My app is not a bank, but a financial technology (fintech) company</p>
      </section>
    </div>
  );
};

export default Footer;
