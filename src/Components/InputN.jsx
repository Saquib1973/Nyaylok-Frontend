import React from "react";

// Input Component with floating label

const InputN = ({ name, type, value, nam, onChange, width = "100%" }) => {
  return (
    <div className={`relative w-[${width}]`}>
      <input
        name={nam}
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        className="w-full h-16 p-3 py-0 sm:p-3 pt-4 placeholder-transparent rounded-md peer border-none text-white bg-gray-200 bg-opacity-10 outline-none text-xs sm:text-base "
        placeholder=""
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className="md:text-lg text-sm sm:text-base absolute top-0 left-0 h-full px-3 py-5 text-gray-400 transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-5 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 md:peer-focus:text-sm peer-placeholder-shown:translate-y-0 peer-focus:underline peer-focus:-translate-y-5 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1"
      >
        {name}
      </label>
    </div>
  );
};

export default InputN;
/*
<div className={`relative w-full px-4`}>
      <input
        type={type}
        placeholder=""
        className={`peer border-2 text-white placeholder:text-transparent px-${8} py-2 bg-gray-200 bg-opacity-10 rounded-2xl text-xs sm:text-base md:text-xl w-full`}
        value={value}
        name={nam}
        autoComplete={`${type === "password" ? "new password" : ""}`}
        onChange={onChange}
      />
      <label className="absolute ml-2 mt-2 peer-focus:ml-0 left-12 md:left-24 peer-focus:text-white  peer-placeholder-shown:translate-y-0 text-xs sm:text-base md:text-xl peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:font-bold -translate-y-9 duration-500 transition-all  text-white">
        {name}
      </label>
    </div>
*/
