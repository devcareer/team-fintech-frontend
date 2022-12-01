import React from 'react';
import Document from '../assets/icons/Document.svg';
const DocumentSubmitted = () => {
  return (
    <div className="text-center mt-20 lg:mt-20">
      <p className="font-meduim text-2xl text-text-1 lg:text-3xl">Documents Submitted</p>
      <div className="w-[120px] mx-auto mt-12 lg:mt-20 w-[160px]">
        <img src={Document} alt="documents illustration" />
      </div>
      <p className=" mt-12 text-left w-80 mx-auto text-base text-text-2 lg:w-[394px] mx-auto mt-20 text-lg ">
        Once confirmed, your personal identity will be verified and protected. This takes about
        12-4hrs. You will recieve a mail on confirmation.
      </p>
      <a className="block mt-14 text-primary-300 lg:text-lg " href="#">
        Back to dashboard
      </a>
    </div>
  );
};

export default DocumentSubmitted;
