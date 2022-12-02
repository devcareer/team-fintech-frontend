import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import './InputPhone.css';

const InputPhone = () => {
  const [value, setValue] = useState();
  return (
    <div className="flex justify-center">
      <PhoneInput
        placeholder="Enter phone number"
        defaultCountry="RU"
        value={value}
        onChange={setValue}
        className="border border-outline py-3 px-4 flex w-96 rounded-lg"
      />
    </div>
  );
};

export default InputPhone;
