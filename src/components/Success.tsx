import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Success() {
  const navigate = useNavigate();

  async function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  // why useeffect run twice in a row?
  useEffect(() => {
    let isCanceled = false;
    const localCart: any = window.localStorage.getItem("cart");
    window.localStorage.setItem("purchasedItem", localCart);

    const waitSecond = async () => {
      await timeout(1000);
      if (!isCanceled) setOrderItem();
    };

    waitSecond();

    setTimeout(() => {
      window.localStorage.setItem("cart", JSON.stringify({}));
    }, 500);
    return () => {
      isCanceled = true;
    };
  }, []);

  async function setOrderItem() {
    const item = window.localStorage.getItem("purchasedItem");
    const email = window.localStorage.getItem("email");

    // comment out from here
    const numberRequest = await axios.get("order_number");

    console.log(numberRequest);
    let order_number = numberRequest.data["order_number"];
    order_number += 1;

    // update the order number in database
    const aaa = await axios.post("/order_number", { order_number });
    // console.log("order-number response", aaa.data);
    console.log(item, email, order_number);
    const request = await axios.post("/order", { item, email, order_number });
    // const response = request.data;
    // console.log(response);
  }

  return (
    <div className="relative top-[145px] border-4 mx-10 my-10">
      <p className="text-7xl text-center my-4">PROFUMO</p>
      <div className="text-5xl text-start mx-20 my-20 ">Order Confirmed</div>
      <p className=" text-2xl text-start mx-20 mb-10 ">
        Thank you for shopping at Profumo. We confirm that we have received your
        order and that it is being prepared.
      </p>
      <p className="text-center text-lg cursor-pointer hover:text-gray-400 relative mx-3 my-5">
        Check My Order
      </p>
      <div className="flex justify-center items-center">
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
    </div>
  );
}
