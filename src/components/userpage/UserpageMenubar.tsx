import React from "react";
import { useNavigate } from "react-router-dom";
export default function UserpageMenubar() {
  const navigate = useNavigate();
  function logout(): void {
    window.localStorage.setItem("isLogin", "false");
    navigate("/");
  }
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center w-[80%]">
        <div
          className="cursor-pointer mx-3 transition-all duration-300  hover:border-black text-gray-400 hover:text-black"
          onClick={() => navigate("/orders")}
        >
          ORDER CONFIRMATION
        </div>
        <p
          className="cursor-pointer mx-3 transition-all duration-300 hover:border-black text-gray-400 hover:text-black"
          onClick={() => navigate("/account")}
        >
          WISH LIST
        </p>
      </div>

      <button
        className="border-b-2 border-black cursor-pointer font-thin "
        onClick={logout}
      >
        LOG OUT
      </button>
    </div>
  );
}
