import React, { useEffect, useState } from "react";
import Wrapper from "../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import InputN from "../Components/InputN";
import Button from "../Components/Button";
import { clearMessage, setMessage } from "../Redux/reducer/globalReducer";
import { scrollToTop } from "../Components/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../Redux/services/authService";

// Register Component
const Register = () => {
  // Config
  // eslint-disable-next-line
  const [register, registerResponse] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States
  const [userInfo, setUserInfo] = useState({
    empId: "",
    name: "",
    email: "",
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
    register(userInfo);
  };
  useEffect(() => {
    if (registerResponse?.status === "fulfilled") {
      setUserInfo({
        empId: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      dispatch(setMessage({ message: "Login Success", type: true }));
      setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);
      scrollToTop();
      navigate("/login");
    } else if (registerResponse?.status === "rejected") {
      dispatch(setMessage({ message: "Error", type: false }));
      setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);
    }
    // eslint-disable-next-line
  }, [registerResponse?.status]);
  return (
    <Wrapper>
      <div
        className={`h-screen bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-gray-600 bg-opacity-50 rounded-xl h-auto py-4 mx-0 sm:mx-5 w-4/5 sm:w-2/3 mb-4 md:mb-10 flex flex-col items-center justify-evenly">
          <p className="heading">Register</p>
          <form className="flex gap-8 md:gap-8 flex-col w-full px-8 py-10">
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
              type={"email"}
              nam={"email"}
              value={userInfo.email}
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
