import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignIn({ mode }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");

  const navigate = useNavigate();
  function appearErrorMessage(upOrIn: string): void {
    const warning = document.getElementById(`warning-sign-${upOrIn}`);
    warning?.classList.remove("opacity-0");
    warning?.classList.add("opacity-100");
    setTimeout(() => {
      warning?.classList.remove("opacity-100");
      warning?.classList.add("opacity-0");
    }, 5000);
    return;
  }
  async function login() {
    if (!email || !password) {
      appearErrorMessage("in");
      setWarningMessage("Please fill out this form");
      return;
    }
    const login = await axios.post("/login", {
      email,
      password,
    });
    const response = login.data;
    if (response === "success") {
      window.localStorage.setItem("isLogin", "true");
      window.localStorage.setItem("email", email);
      navigate("/user-page");
    } else {
      appearErrorMessage("in");
      setWarningMessage("Password or Email is wrong");
    }
  }
  return (
    <div className="border-l-2- flex flex-col justify-center items-center w-[50%]">
      <div className="text-2xl mt-10">
        {mode === "thanks"
          ? "THANK YOU FOR SIGN UP "
          : "ALREADY HAVE AN ACCOUNT?"}
      </div>
      <div
        id="warning-sign-in"
        className="opacity-0 text-red-500 bg-red-200 transition-all duration-700 px-4 my-1"
      >
        {warningMessage}
      </div>
      <input
        id="emailInput-sign-in"
        className="border-b-2 focus:border-b-2 focus:border-black outline-none my-3 transition-color duration-500"
        type="text"
        placeholder="*Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="passwordInput-sign-in"
        className="border-b-2 focus:border-b-2 focus:border-black outline-none my-3 transition-color duration-500"
        type="password"
        placeholder="*Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button my-5 " onClick={login}>
        SIGN IN
      </button>
    </div>
  );
}
