import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  getChosenItemPrice,
  getChosenItemName,
  getQuantity,
} from "../../app/gettingFunctions";
export default function Total({ allItems, tempCart }: any) {
  const [totalFlag, setTotalFlag] = useState<boolean>(false);
  let cart: any = window.localStorage.getItem("cart");
  cart = JSON.parse(cart);
  const keys: any = [];
  for (let key in cart) {
    keys.push(key);
  }

  useEffect(() => {
    getTotal();
    setTotalFlag(!totalFlag);
  }, [totalFlag]);

  function getTotal(): number {
    return keys.reduce((a: any, b: any) => {
      let price = parseInt(cart[b].price.split("€")[1]);
      // const cart: any window.localStorage.getItem("cart");
      // const parsedCart: any = JSON.parse(cart);
      const quantity = cart[b].quantity;
      price *= quantity;
      return a + price;
    }, 0);
  }

  return (
    <div className="">
      {keys.length === 0 ? (
        <div className=""></div>
      ) : (
        <div className="flex flex-col justify-start items-center text-black bg-gray-200 w-[450px] h-56 my-5 py-5 mx-5 ">
          <div className="flex ">ORDER SUMMARY</div>

          <div className="flex my-10">TOTAL - €{getTotal()} </div>
          <form action={`/create-checkout-session`} method="POST">
            <input
              type="hidden"
              name="cart"
              value={`${JSON.stringify(cart)}`}
            />
            <button className="button" type="submit">
              Checkout
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
