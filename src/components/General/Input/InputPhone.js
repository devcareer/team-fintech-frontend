import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const InputPhone = () => {
  const [value, setValue] = useState();
  return (
    <>
      <label className="block text-text-2 text-sm  mb-2 font-normal">Phone Number</label>
      <div className="flex justify-center">
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="RU"
          value={value}
          onChange={setValue}
          className="border border-outline py-3 px-4 flex w-full rounded-lg"
        />
      </div>
    </>
  );
};

export default InputPhone;
