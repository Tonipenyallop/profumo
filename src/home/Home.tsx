import React from "react";
import { useNavigate } from "react-router-dom";
import TopCartButton from "../Card/TopCartButton";
import Count from "./Count";
import HomeSummer from "./HomeSummer";
import HomeTop from "./HomeTop";
import HomeWinter from "./HomeWinter";
import MenuBar from "./MenuBar";
export default function Home() {
  const navigate = useNavigate();
  const toHomePage = () => {
    navigate("/");
  };
  return (
    <div className="absolute bg-black top-[120px]">
      <TopCartButton />
      <div className="flex flex-col justify-center items-center">
        <HomeTop />
        <div className="flex">
          <HomeSummer />
          <HomeWinter />
        </div>
      </div>
    </div>
  );
}
