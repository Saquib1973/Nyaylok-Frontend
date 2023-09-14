import React from "react";

const InputN = ({ name, type, value, nam, onChange }) => {
  return (
    <div className={`relative w-full px-10 md:px-20`}>
      <input
        type={type}
        placeholder=""
        className="peer border-2 text-white placeholder:text-transparent px-8 py-2 bg-gray-200 bg-opacity-10 rounded-2xl text-xs sm:text-base md:text-xl w-full"
        value={value}
        name={nam}
        autoComplete={`${type === "password" ? "new password" : ""}`}
        onChange={onChange}
      />
      <label className="absolute ml-2 mt-2 peer-focus:ml-0 left-12 md:left-24 peer-focus:text-white  peer-placeholder-shown:translate-y-0 text-xs sm:text-base md:text-xl peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:font-bold -translate-y-9 duration-500 transition-all  text-white">
        {name}
      </label>
    </div>
  );
};

export default InputN;
