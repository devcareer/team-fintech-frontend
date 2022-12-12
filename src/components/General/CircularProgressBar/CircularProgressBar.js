import React from 'react';

const CircularProgressBar = () => {
  //Lines 5-12 is just to test. management of state will be in redux like you said
  const BVN = true;
  const info = true;
  const pin = false;
  let percent = 0;

  if (BVN === true) percent += 33;
  if (info === true) percent += 33;
  if (pin === true) percent += 34;

  const circumference_1 = 471;
  const circumference_2 = 596;

  const offset_1 = circumference_1 - (percent / 100) * circumference_1;
  const offset_2 = circumference_2 - (percent / 100) * circumference_2;

  return (
    <div className="">
      <svg className="w-[200px] h-[200px]">
        <circle
          className=""
          cy="100"
          cx="100"
          r="75"
          fill="transparent"
          stroke={percent === 0 ? '#e7e9ed80' : '#FFEEE3'}
          strokeDasharray={circumference_1}
          strokeDashoffset={percent === 0 ? 0 : offset_1}
          strokeWidth="45"></circle>
        <circle
          className=""
          cy="100"
          cx="100"
          r="95"
          fill="transparent"
          stroke={percent === 0 ? '#b4b5b780' : '#FECDAA'}
          strokeDasharray={circumference_2}
          strokeDashoffset={percent === 0 ? 0 : offset_2}
          strokeWidth="3"></circle>
        <text
          className="percent"
          fill="#292627"
          x="100"
          y="100"
          textAnchor="middle"
          alignmentBaseline="middle">
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
