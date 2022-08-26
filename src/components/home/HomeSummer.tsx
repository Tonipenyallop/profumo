import React from "react";
import { useNavigate } from "react-router";

export default function HomeSummer() {
  const navigate = useNavigate();

  return (
    <div
      className="relative hover:scale-105 duration-1000 transition-all cursor-pointer"
      onClick={() => navigate("/summer")}
    >
      <img
        className="h-[100%] "
        src={require("../../images/summer.jpeg")}
        alt=""
      />
      <div className="absolute top-[10px] mx-5 my-2">
        <p className="flex text-white text-sm">VIEW NOW </p>
        <p className="flex text-white text-3xl">Best Summer Cologne</p>
      </div>
    </div>
  );
}
