import React from "react";
import Loader from "./Loader";

//Button componetn requires a name and a submit handle function

const Button = ({ name, handleSubmit, loading }) => {
  return (
    <button
      className={`disabled:cursor-not-allowed w-1/2 mx-auto flex items-center justify-center bg-redPrim/80 px-6 md:px-10 cursor-pointer text-xs sm:text-base md:text-xl hover:bg-redPrim transition-all duration-500 py-3 md:py-4 rounded-full`}
      onClick={handleSubmit}
    >
      {loading ? <Loader /> : name}
    </button>
  );
};

export default Button;
