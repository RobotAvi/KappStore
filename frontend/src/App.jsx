import React from "react";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import "./App.css";

function App() {
  const isLoggedUser = true;

  return (
    <div id="startBackground" className="flex">
      <div className="mx-auto my-20">
        <span className="text-3xl">KorusAppStore</span>
        <br />
        <LoginSignup mode="login" loggind={isLoggedUser} />
      </div>
    </div>
  );
}

export default App;
