import React, { useState } from "react";
import Wrapper from "../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import InputN from "../Components/InputN";
import Button from "../Components/Button";

const UpdateCase = () => {
  const [selectedCases, setSelectedCase] = useState(["402", "320"]); // Initialize state for selected flavors
  const IPC = ["402", "320", "420", "295", "370"];
  const handleIpcSelection = (e) => {
    const selectedCase = e.target.value;
    for (var j = 0; j < selectedCases.length; j++) {
      if (selectedCase === selectedCases[j]) {
        e.target.value = null;
        return;
      }
    }
    const datalistOptions = document.getElementById("IPC").options;
    for (var i = 0; i < datalistOptions.length; i++) {
      if (datalistOptions[i].value === selectedCase) {
        setSelectedCase((prevCas) => [...prevCas, selectedCase]);
        e.target.value = null;
      }
    }
    setUserInfo({ ...userInfo, ipc: selectedCases });
  };

  const removeCase = (cas) => {
    setSelectedCase((prevCas) => prevCas.filter((item) => item !== cas));
  };
  // Form Handler functions
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const [userInfo, setUserInfo] = useState({
    victimName: "",
    firNumber: "",
    ipc: [],
    prevCase: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userInfo);
    setUserInfo({
      victimName: "",
      firNumber: "",
      ipc: [],
      prevCase: "",
    });
    setSelectedCase([]);
  };

  return (
    <Wrapper>
      <div
        className={`h-screen bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-gray-600 bg-opacity-50 rounded-xl h-[70%] w-full mb-10 flex flex-col items-center justify-evenly">
          <p className="heading">Register case</p>
          <div className="flex gap-8 flex-col w-full items-center">
            <InputN
              name={"Enter Victims Name"}
              type={"text"}
              nam={"victimName"}
              value={userInfo.victimName}
              onChange={onChange}
            />
            <InputN
              name={"Enter FIR number"}
              type={"text"}
              nam={"firNumber"}
              value={userInfo.firNumber}
              onChange={onChange}
            />
            {/* Display selected flavors */}
            {selectedCases.length !== 0 && (
              <div className="flex text-xs sm:text-base md:text-xl  justify-center gap-4 w-2/3 items-center">
                <h2>Selected Cases:</h2>
                <ul className="flex gap-2 flex-wrap">
                  {selectedCases.map((cas, index) => (
                    <li
                      key={index}
                      className="bg-redPrim animate-pulse px-4 py-2 rounded-full cursor-pointer"
                      onClick={() => removeCase(cas)}
                    >
                      {cas}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-center w-full px-20">
              <input
                list="IPC"
                id="IPC call"
                name="IPC call"
                placeholder="Select the IPC sections involved"
                className="w-full rounded-2xl border-2 text-white px-8 py-2 bg-gray-200 bg-opacity-10 text-xs sm:text-base md:text-xl"
                onChange={handleIpcSelection}
              />

              <datalist id="IPC">
                {IPC.map((item, index) => {
                  return <option value={item} key={index}></option>;
                })}
              </datalist>
            </div>
            <InputN
              type={"text"}
              name={"Previous case reference (if any)"}
              nam={"prevCase"}
              value={userInfo.prevCase}
              onChange={onChange}
            />
          </div>
          <Button name={"Submit"} handleSubmit={handleSubmit} />
        </div>
      </div>
    </Wrapper>
  );
};

export default UpdateCase;
