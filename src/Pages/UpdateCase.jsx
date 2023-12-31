import React, { useState } from "react";
import Wrapper from "../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import InputN from "../Components/InputN";
import Button from "../Components/Button";
import { clearMessage, setMessage } from "../Redux/reducer/globalReducer";
import { scrollToTop } from "../Components/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Update Case
const UpdateCase = () => {
  // Config
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States
  const [selectedCases, setSelectedCase] = useState(["402", "320"]); // Initialize state for selected flavors
  const IPC = ["402", "320", "420", "295", "370"];
  const [userInfo, setUserInfo] = useState({
    victimName: "",
    fir: "",
    policeStation: "",
    phone: 0,
    pincode: 0,
    ipc: [],
    prevCase: "",
  });

  //  Functions
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

  // Form Update functions
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userInfo);
    setUserInfo({
      victimName: "",
      fir: "",
      policeStation: "",
      phone: 0,
      pincode: 0,
      ipc: [],
      prevCase: "",
    });
    setSelectedCase([]);
    dispatch(setMessage({ message: "Case Updated", type: true }));
    setTimeout(() => {
      dispatch(clearMessage());
    }, 2000);
    scrollToTop();
    navigate("/viewCases/1");
  };

  // Case Completed handler
  const handleCompleted = (e) => {
    e.preventDefault();
    setUserInfo({
      victimName: "",
      fir: "",
      policeStation: "",
      phone: 0,
      pincode: 0,
      ipc: [],
      prevCase: "",
    });
    setSelectedCase([]);
    dispatch(setMessage({ message: "Case Completed", type: true }));
    setTimeout(() => {
      dispatch(clearMessage());
    }, 2000);
    scrollToTop();
    navigate("/viewCases/1");
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
          <div className="flex gap-6 flex-col w-full items-center">
            <div className="flex w-[80%] justify-between">
              <InputN
                name={"Enter Victims Name"}
                type={"text"}
                nam={"victimName"}
                value={userInfo.victimName}
                onChange={onChange}
                width={"40%"}
              />

              <InputN
                name={"Enter Mobile Number"}
                type={"number"}
                nam={"phone"}
                value={userInfo.phone}
                onChange={onChange}
                width={"50%"}
              />
            </div>
            <div className="flex justify-between w-[80%]">
              <InputN
                name={"Enter FIR number"}
                type={"number"}
                nam={"fir"}
                value={userInfo.fir}
                onChange={onChange}
                width={"45%"}
              />
              <InputN
                name={"Enter Police Station Name"}
                type={"text"}
                nam={"policeStation"}
                value={userInfo.policeStation}
                onChange={onChange}
                width={"45%"}
              />
            </div>
            <div className="flex justify-between w-[80%]">
              <InputN
                type={"text"}
                name={"Enter pincode"}
                nam={"pincode"}
                value={userInfo.pincode}
                onChange={onChange}
                width={"40%"}
              />
              <InputN
                type={"text"}
                name={"Previous case reference (if any)"}
                nam={"prevCase"}
                value={userInfo.prevCase}
                onChange={onChange}
                width={"50%"}
              />
            </div>
            {/* Display selected flavors */}
            {selectedCases.length !== 0 && (
              <div className="flex text-xs sm:text-base md:text-xl  justify-between gap-4 w-[80%] items-center">
                <h2>Selected Cases:</h2>
                <ul className="flex gap-2 flex-wrap">
                  {selectedCases.map((cas, index) => (
                    <li
                      key={index}
                      className="bg-redPrim animate-pulse px-4 py-2 rounded-full cursor-pointer text-xs sm:text-base "
                      onClick={() => removeCase(cas)}
                    >
                      {cas}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-center w-[80%]">
              <input
                list="IPC"
                id="IPC call"
                name="IPC call"
                placeholder="Select the IPC sections involved"
                className="w-full h-16 p-3 pt-4 placeholder-transparent rounded-md peer border-2 placeholder:text-white  text-white px-8 py-2 bg-gray-400 bg-opacity-10 outliine-none border-none md:text-xl text-xs sm:text-base "
                onChange={handleIpcSelection}
              />

              <datalist id="IPC">
                {IPC.map((item, index) => {
                  return <option value={item} key={index}></option>;
                })}
              </datalist>
            </div>
          </div>
          <div className="flex gap-4">
            <Button name={"Update"} handleSubmit={handleSubmit} />
            <Button name={"Completed"} handleSubmit={handleCompleted} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UpdateCase;
