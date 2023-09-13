import React from "react";
// Reusable Component needs placeholders , type
const Input = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-gray-400 placeholder:text-white outline-none rounded-2xl p-3 bg-opacity-60 px-12 w-full text-xl md:text-3xl placeholder:tracking-wider placeholder:pl-2"
    />
  );
};

export default Input;