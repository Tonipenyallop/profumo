import React, { useState, useEffect } from "react";

import axios from "axios";

import UserpageMenubar from "../userpage/UserpageMenubar";
import OrderElement from "./OrderElement";
export default function Orders() {
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [order, setOrder] = useState<any>([]);
  let emailLocal: any;

  useEffect(() => {
    getUserAddress();
    emailLocal = window.localStorage.getItem("email");
    setEmail(emailLocal);
    getOrder();
  }, []);

  async function getOrder(): Promise<void> {
    const request = await axios.post("/get_order", { email: emailLocal });
    const response = request.data;
    setOrder(response);
  }

  async function getUserAddress(): Promise<void> {
    const email: any = window.localStorage.getItem("email");

    const response = await axios.post("/address", { email });
    setAddress(response.data);
  }
  console.log(order);
  return (
    <div className="relative top-[150px] ">
      <UserpageMenubar />
      <p className="text-2xl mx-10 py-3">ORDERS</p>

      {order.length === 0 ? (
        <div className="top-96 text-center">No items are purchased yet</div>
      ) : (
        order.map((e: any, idx: number) => {
          return (
            <OrderElement
              key={`${idx}`}
              idx={idx}
              e={e}
              address={address}
              email={email}
            />
          );
        })
      )}
    </div>
  );
}
