import React from "react";
import Wrapper from "../Components/Wrapper";
import backgroundImage from "../Utils/background2.jpg";
import InputN from "../Components/InputN";
import Button from "../Components/Button"

const Register = () => {
  return (
    <Wrapper>
       <div className={`h-screen bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        >
      <div className="bg-gray-600 bg-opacity-50 rounded-xl h-2/3 w-full mb-10 flex flex-col items-center justify-evenly">
          <p className="heading">Register</p>
          <div className="flex gap-8 flex-col w-full items-center">
            <InputN name={"Employee Id"} type={"text"}/>
            <InputN name={"Name"} type={"text"}/>
            <InputN name={"E-mail Id"} type={"text"}/>
            <InputN name={"Password"} type={"password"}/>
            <InputN name={"Confirm Password"} type={"password"}/>
            <Button name={"Register"}/>
            </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Register;
