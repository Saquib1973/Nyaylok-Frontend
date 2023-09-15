import React, { useState } from "react";
import Wrapper from "../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import InputN from "../Components/InputN";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../Redux/reducer/authReducer";
import { clearMessage, setMessage } from "../Redux/reducer/globalReducer";
import { scrollToTop } from "../Components/Header";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Form Handler functions
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const [userInfo, setUserInfo] = useState({
    empId: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    setUserInfo({
      empId: "",
      password: "",
    });
    const token = "token";
    dispatch(setToken(token));
    dispatch(setMessage({ message: "Login Success", type: true }));
    setTimeout(() => {
      dispatch(clearMessage());
    }, 2000);
    scrollToTop();
    navigate("/");
  };
  return (
    <Wrapper>
      <div
        className={`h-screen bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-gray-600 bg-opacity-50 rounded-xl h-3/5 mx-5 text-xs md:text-xl w-full sm:w-2/3 mb-10 flex flex-col items-center justify-evenly">
          <p className="heading">Login</p>
          <div className="flex gap-8 flex-col w-full items-center">
            <InputN
              name={"Employee Id"}
              nam={"empId"}
              type={"text"}
              value={userInfo.empId}
              onChange={onChange}
            />
            <InputN
              name={"Password"}
              nam={"password"}
              type={"text"}
              value={userInfo.password}
              onChange={onChange}
            />
            <Button name={"Login"} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
