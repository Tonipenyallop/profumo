import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [warningMessage, setWarningMessage] = useState<string>("");

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

  async function signUp() {
    if (!email || !password || !address || !username) {
      appearErrorMessage("up");
      setWarningMessage("Please fill out this form");
      return;
    }

    const request = await axios.post("/sign-up", {
      email,
      password,
      address,
      username,
    });
    const response = request.data;

    if (response === "already user") {
      appearErrorMessage("up");
      setWarningMessage("Already have an account");
      return;
    } else if (response === "success") {
      console.log("success page or something to show");
      navigate("/thanks");
    }
  }

  function changeForm() {
    const createAccount = document.getElementById("sign-up");
    const signUpForm = document.getElementById("sign-up-form");
    createAccount?.classList.add("opacity-0", "pointer-events-none");
    setTimeout(() => {
      signUpForm?.classList.remove("opacity-0", "pointer-events-none");
    }, 500);
  }

  return (
    <div className="relative top-[145px]">
      <p className="text-center text-4xl my-3 ">YOUR ACCOUNT</p>
      <div className="relative flex justify-around items-center  ">
        <div
          id="sign-up"
          className="flex flex-col justify-center items-center w-[50%] transition-all duration-1000"
        >
          <div className="text-2xl my-10">NEW CLIENT</div>
          <div className="mx-5 break-words">
            Create an account to track & manage orders, view your account &{" "}
            <br />
            loyalty information, as well as manage your Wishlist.
          </div>
          <button
            className="button my-5 z-20"
            onClick={() => {
              changeForm();
            }}
          >
            CREATE ACCOUNT
          </button>
        </div>
        <div
          id="sign-up-form"
          className="absolute flex flex-col justify-around items-center left-0 top-0 w-[50%] my-3 transition-all duration-700 pointer-events-none opacity-0"
        >
          <div className="flex mt-10 text-2xl">REGISTER</div>
          <div
            id="warning-sign-up"
            className="opacity-0 text-red-500 bg-red-200 transition-all duration-700 px-4 my-1"
          >
            {warningMessage}
          </div>
          <input
            id="nameInput"
            className="border-b-2 focus:border-b-2 focus:border-black outline-none my-3 transition-color duration-500"
            type="text"
            placeholder="*Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="emailInput"
            className="border-b-2 focus:border-b-2 focus:border-black outline-none my-3 transition-color duration-500 "
            type="text"
            placeholder="*Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="passwordInput"
            className="border-b-2 focus:border-b-2 focus:border-black outline-none my-3 transition-color duration-500"
            type="password"
            placeholder="*Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            id="addressInput"
            className="border-b-2 focus:border-b-2 focus:border-black outline-none my-3 transition-color duration-500"
            type="text"
            placeholder="*Address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <button className="button my-5" onClick={signUp}>
            SIGN UP
          </button>
        </div>

        <SignIn
        // warningMessage={warningMessage}
        // setWarningMessage={setWarningMessage}
        // email={email}
        // setEmail={setEmail}
        // password={password}
        // setPassword={setPassword}
        />
      </div>
    </div>
  );
}
