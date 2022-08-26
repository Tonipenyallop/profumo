import React from "react";
import { useNavigate } from "react-router";
export default function HomeTop() {
  const navigate = useNavigate();
  return (
    <div
      className="relative hover:scale-105 duration-1000 transition-all cursor-pointer"
      onClick={() => navigate("/top")}
    >
      <img src={require("../../images/applying-cologne.webp")} alt="" />
      <div className="absolute bottom-[10px] mx-4 px-4">
        <p className="flex text-white text-sm">VIEW NOW </p>
        <p className="flex text-white text-3xl mb-5">Top Seller of All Time</p>
      </div>
    </div>
  );
}
