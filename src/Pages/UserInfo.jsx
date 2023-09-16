import React from "react";
import Wrapper from "../Components/Wrapper";
import { UserCard } from "./AboutUs";

// UserInfo Page Component

const UserInfo = () => {
  return (
    <Wrapper>
      <div className="h-screen flex items-center justify-center">
        <UserCard name="User" role="Data Entry" />
      </div>
    </Wrapper>
  );
};

export default UserInfo;
