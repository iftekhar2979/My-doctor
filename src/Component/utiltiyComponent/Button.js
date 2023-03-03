import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      class='inline-flex bg-green-100 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-grey-900 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
    >
      {children}
    </button>
  );
};

export default Button;
