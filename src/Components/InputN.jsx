import React from "react";

const InputN = ({ name, type }) => {
  return (
    <div className={`relative w-full px-20`}>
      <input
        type={type}
        placeholder=""
        className="peer border-2 text-white placeholder:text-transparent px-8 py-2 bg-gray-200 bg-opacity-10 rounded-2xl text-xs sm:text-base md:text-xl w-full"
        id="inputField"
      />
      <label
        htmlFor="inputField"
        className="absolute ml-2 mt-3 peer-focus:ml-0 left-24 peer-focus:text-white  text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:font-bold -translate-y-8 duration-500 transition-all  text-white"
      >
        {name}
      </label>
    </div>
  );
};

export default InputN;
