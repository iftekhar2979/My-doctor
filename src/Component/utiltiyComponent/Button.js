import React from 'react';

const Button = ({ children }) => {
  return (
    <button class='text-white btn border-green-400 uppercase rounded bg-green-500 hover:bg-green-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 hover:border-green-600'>
      {children}
    </button>
  );
};

export default Button;
