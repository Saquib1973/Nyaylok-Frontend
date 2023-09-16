import React from "react";

//Button componetn requires a name and a submit handle function

const Button = ({ name, handleSubmit }) => {
  return (
    <button
      className={`disabled:cursor-not-allowed bg-redPrim/80 px-6 md:px-10 cursor-pointer text-xs sm:text-base md:text-xl hover:bg-redPrim transition-all duration-500 py-2 md:py-4 rounded-full`}
      onClick={handleSubmit}
    >
      {name}
    </button>
  );
};

export default Button;
