import React, { useEffect, useState } from "react";
import Wrapper from "../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import InputN from "../Components/InputN";
import Button from "../Components/Button";
import { useDispatch } from "react-redux";
import { scrollToTop } from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { clearMessage, setMessage } from "../Redux/reducer/globalReducer";
import { useRegisterCaseMutation } from "../Redux/services/caseService";
import { useIpcQuery } from "../Redux/services/ipcService";

// RegisterCase Component
const RegisterCase = () => {
  // Config
  const [registerCase, registerCaseResponse] = useRegisterCaseMutation();
  const ipcs = useIpcQuery();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const navigate = useNavigate();

  // States
  const [selectedCases, setSelectedCase] = useState([]); // Initialize state for selected flavors
  const IPC = [];
  const [userInfo, setUserInfo] = useState({
    victim: "",
    fir: "",
    policeStation: "",
    phone: null,
    pincode: null,
    ipc: null,
    prevCase: null,
  });
  // console.log(selectedCases);
  useEffect(() => {
    setUserInfo({ ...userInfo, ipc: selectedCases });
    // eslint-disable-next-line
  }, [selectedCases]);

  // Functions
  // Hanlde Ipc Selection
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
  };
  // Handle Ipc Removal
  const removeCase = (cas) => {
    setSelectedCase((prevCas) => prevCas.filter((item) => item !== cas));
  };
  // Form Handler functions
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerCase(userInfo);
  };
  useEffect(() => {
    if (registerCaseResponse?.status === "fulfilled") {
      setUserInfo({
        victim: "",
        fir: "",
        policeStation: "",
        phone: 0,
        pincode: 0,
        ipc: [],
        prevCase: "",
      });
      setSelectedCase([]);
      dispatch(
        setMessage({ message: registerCaseResponse?.data?.message, type: true })
      );
      setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);
      scrollToTop();
      // navigate("/viewCases/1");
    } else if (registerCaseResponse?.status === "rejected") {
      dispatch(setMessage({ message: "Error", type: false }));
      setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);
    }

    //eslint-disable-next-line
  }, [registerCaseResponse?.status]);
  for (var i = 0; i < ipcs?.data?.length; i += 1) {
    IPC.push(ipcs?.data[i]?.section);
  }
  console.log(registerCaseResponse);
  return (
    <Wrapper>
      <form
        className={`h-screen bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-gray-600 bg-opacity-50 rounded-xl h-auto py-10 w-full mb-10 flex flex-col items-center justify-evenly">
          <p className="heading">Register case</p>
          <div className="flex py-10 gap-6 flex-col w-full items-center">
            <div className="flex w-[80%] justify-between">
              <InputN
                name={"Enter Victims Name"}
                type={"text"}
                nam={"victim"}
                value={userInfo.victim}
                onChange={onChange}
                width={"40%"}
              />

              <InputN
                name={"Enter Mobile Number"}
                type={"number"}
                nam={"phone"}
                value={userInfo.number === null ? "" : userInfo.number}
                onChange={onChange}
                width={"50%"}
              />
            </div>
            <div className="flex justify-between w-[80%]">
              <InputN
                name={"Enter FIR number"}
                type={"number"}
                nam={"fir"}
                value={userInfo.fir === null ? "" : userInfo.fir}
                onChange={onChange}
                width={"50%"}
              />
              <InputN
                name={"Enter Police Station Name"}
                type={"text"}
                nam={"policeStation"}
                value={userInfo.policeStation}
                onChange={onChange}
                width={"40%"}
              />
            </div>
            <div className="flex justify-between w-[80%]">
              <InputN
                type={"number"}
                name={"Enter pincode"}
                nam={"pincode"}
                value={userInfo.pincode === null ? "" : userInfo.pincode}
                onChange={onChange}
                width={"40%"}
              />
              <InputN
                type={"text"}
                name={"Previous case Id"}
                nam={"prevCase"}
                value={userInfo.prevCase === null ? "" : userInfo.prevCase}
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
                disabled={ipcs?.isFetching}
                list="IPC"
                id="IPC call"
                name="IPC call"
                placeholder={`${
                  ipcs?.isFetching
                    ? "IPCs Loading..."
                    : ipcs?.isError
                    ? "Error , Reload Page"
                    : "Select the IPC sections involved"
                }`}
                className="w-full h-16 p-3 pt-4 placeholder-transparent  rounded-md peer border-2 placeholder:text-white  text-white px-8 py-2 bg-gray-400 bg-opacity-10 outliine-none border-none md:text-xl text-xs sm:text-base "
                onChange={handleIpcSelection}
              />

              <datalist id="IPC">
                {IPC.map((item, index) => {
                  return <option value={item} key={index}></option>;
                })}
              </datalist>
            </div>
          </div>

          <Button
            name={"Submit"}
            handleSubmit={handleSubmit}
            loading={registerCaseResponse?.isLoading}
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default RegisterCase;
