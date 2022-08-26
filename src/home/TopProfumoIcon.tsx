import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopProfumoIcon() {
  const navigate = useNavigate();
  return (
    <img
      className="z-10  bg-white w-[50px] cursor-pointer"
      src={require("../../images/cologne-icon.webp")}
      alt=""
      onClick={() => navigate("/")}
    />
  );
}
