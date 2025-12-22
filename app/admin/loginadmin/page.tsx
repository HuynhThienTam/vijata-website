import LoginRedirectLayout from "@/components/Helpers/LoginRedirectRoute";
import LoginPage from "@/components/Login/LoginPage";
import React from "react";

const login = () => {
  return (
    <LoginRedirectLayout>
      <LoginPage/>
    </LoginRedirectLayout>
  );
};

export default login;
