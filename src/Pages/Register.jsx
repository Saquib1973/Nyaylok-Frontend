import React, { useState } from "react";
import Wrapper from "../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import InputN from "../Components/InputN";
import Button from "../Components/Button";
import { clearMessage, setMessage } from "../Redux/reducer/globalReducer";
import { scrollToTop } from "../Components/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Register Component
const Register = () => {
  // Config
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States
  const [userInfo, setUserInfo] = useState({
    empId: "",
    name: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });
  // Functions
  // Form handle functions
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    setUserInfo({
      empId: "",
      name: "",
      emailId: "",
      password: "",
      confirmPassword: "",
    });
    dispatch(setMessage({ message: "Registered", type: true }));
    setTimeout(() => {
      dispatch(clearMessage());
    }, 2000);
    scrollToTop();
    navigate("/login");
  };
  return (
    <Wrapper>
      <div
        className={`h-screen bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-gray-600 bg-opacity-50 rounded-xl h-[70%] md:h-[80%] mx-0 sm:mx-5 w-4/5 sm:w-2/3 mb-4 md:mb-10 flex flex-col items-center justify-evenly">
          <p className="heading">Register</p>
          <form className="flex gap-8 md:gap-8 flex-col w-full items-center">
            <InputN
              name={"Employee Id"}
              type={"text"}
              nam={"empId"}
              value={userInfo.empId}
              onChange={onChange}
            />
            <InputN
              name={"Name"}
              type={"text"}
              nam={"name"}
              value={userInfo.name}
              onChange={onChange}
            />
            <InputN
              name={"E-mail Id"}
              type={"text"}
              nam={"emailId"}
              value={userInfo.emailId}
              onChange={onChange}
            />
            <InputN
              name={"Password"}
              type={"password"}
              nam={"password"}
              value={userInfo.password}
              onChange={onChange}
            />
            <InputN
              name={"Confirm Password"}
              type={"password"}
              nam={"confirmPassword"}
              value={userInfo.confirmPassword}
              onChange={onChange}
            />
            <Button name={"Register"} handleSubmit={handleSubmit} />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
