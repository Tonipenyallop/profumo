import React from "react";
import Login from "./Login";
import SignIn from "./SignIn";

export default function Thanks() {
  return (
    <div className="relative top-[150px] flex justify-center">
      <div className="flex justify-center items-center w-[100%]">
        <SignIn mode={"thanks"} />
      </div>
    </div>
  );
}
