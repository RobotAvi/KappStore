import React, { useState } from "react";
import "./LoginSignup.css";
import LoginPage from "./LoginPage/LoginPage";
import { Button, Space, Switch } from "antd";
import SignUpPage from "./SignUpPage/SignUpPage";

export default function LoginSignup() {
  const [isLoginState, setIsLoginState] = useState(true);

  const formSwither = () => (
    <Space direction="vertical">
      <Switch
        checkedChildren="Login"
        unCheckedChildren="SignUp"
        checked={isLoginState}
        onChange={() => setIsLoginState(!isLoginState)}
      />
    </Space>
  );

  return (
    <div className="inline-grid grid-cols-2">
      <div className="inline-block items-center gap-3 ">
        {isLoginState ? <h1>Log In</h1> : <h1>Sign UP</h1>}
        {formSwither()}
      </div>

      <br />
      <div className="flex items-center gap-4">
        {isLoginState ? <LoginPage /> : <SignUpPage />}
      </div>
    </div>
  );
}
