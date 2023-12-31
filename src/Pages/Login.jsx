import React, { useEffect, useState } from "react";
import Wrapper from "../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import InputN from "../Components/InputN";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../Redux/reducer/authReducer";
import { clearMessage, setMessage } from "../Redux/reducer/globalReducer";
import { scrollToTop } from "../Components/Header";
import { useLoginMutation } from "../Redux/services/authService";
// axios.defaults.withCredentials = true;

// Login Component
const Login = () => {
  const [login, loginRes] = useLoginMutation();
  // Config
  // eslint-disable-next-line
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const navigate = useNavigate();

  // States
  const [userInfo, setUserInfo] = useState({
    empId: "",
    password: "",
  });

  // Form Handler functions
  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      await login(userInfo);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (loginRes?.status === "fulfilled") {
      setUserInfo({
        empId: "",
        password: "",
      });
      const token = loginRes?.data?.value;
      dispatch(setToken(token));
      dispatch(setMessage({ message: loginRes?.data?.message, type: true }));
      setTimeout(() => {
        dispatch(clearMessage());
      }, 2500);
      scrollToTop();
      // navigate("/");
    } else if (loginRes?.status === "rejected") {
      dispatch(
        setMessage({ message: loginRes?.error?.data?.message, type: false })
      );
      setTimeout(() => {
        dispatch(clearMessage());
      }, 3000);
    }
    // eslint-disable-next-line
  }, [loginRes?.status]);
  return (
    <Wrapper>
      <div
        className={`h-screen bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <form className="bg-gray-600 bg-opacity-50 rounded-xl h-auto py-4 pt-8 mx-2 sm:mx-5 text-xs md:text-xl w-full sm:w-2/3 mb-10 flex flex-col items-center justify-evenly">
          <p className="heading">Login</p>
          <div className="flex gap-8 flex-col w-full px-8 py-10">
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
              type={"password"}
              value={userInfo.password}
              onChange={onChange}
            />
            <Button
              name={"Login"}
              loading={loginRes?.isLoading}
              handleSubmit={handleSubmit}
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
