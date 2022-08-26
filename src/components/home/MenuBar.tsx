import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Card/Icon";
import TopProfumoIcon from "./TopProfumoIcon";
import { HiOutlineUser } from "react-icons/hi";
export default function MenuBar() {
  const navigate = useNavigate();

  return (
    <div className="py-5 bg-black w-full">
      <div className="flex justify-center items-center">
        <div className="relative mx-3 py-5">
          <p
            className="text-white text-5xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            PROFUMO
          </p>
        </div>

        <div className="flex justify-center items-center">
          <p className="menubar-text" onClick={() => navigate("/top")}>
            Top Seller 2022
          </p>
          <p className="menubar-text" onClick={() => navigate("/summer")}>
            Top 5 In Summer
          </p>
          <p className="menubar-text" onClick={() => navigate("/winter")}>
            Top 5 In Winter
          </p>
        </div>
        <div
          className="cursor-pointer white-icon"
          onClick={() => navigate("/account")}
        >
          <Icon icon={<HiOutlineUser size="24" color="" />} />
        </div>
      </div>
    </div>
  );
}
