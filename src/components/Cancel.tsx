import React from "react";
import { useNavigate } from "react-router-dom";
export default function Cancel() {
  const navigate = useNavigate();
  console.log("canceled payment");
  return (
    <div className="relative top-[145px] border-4 mx-10 my-10">
      <p className="text-7xl text-start my-20 mx-20">ORDER CANCELED</p>
      <p className="text-2xl mx-20 text-start">
        You are always welcome to visit PROFUMO. Please comeback once you decide
        items you would like to purchase.{" "}
      </p>
      <div className="flex justify-center">
        <button
          className="cursor-pointer hover:text-gray-400 relative mx-3 my-5"
          onClick={() => navigate("/top")}
        >
          Back to Top Seller
        </button>
        <button
          className="cursor-pointer hover:text-gray-400 relative mx-3 my-5"
          onClick={() => navigate("/summer")}
        >
          Back to Best Summer
        </button>
        <button
          className="cursor-pointer hover:text-gray-400 relative mx-3 my-5"
          onClick={() => navigate("/winter")}
        >
          Back to Best Winter
        </button>
      </div>
    </div>
  );
}
