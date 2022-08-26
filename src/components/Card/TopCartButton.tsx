import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function TopCartButton() {
  const navigate = useNavigate();

  function getQuantity(): string | null {
    const cart: any = window.localStorage.getItem("cart");
    const parsedCart = JSON.parse(cart);
    let total = 0;
    for (let key in parsedCart) {
      total += parsedCart[key].quantity;
    }
    return total === 0 ? "" : total.toString();
  }
  return (
    <div className=" fixed top-[25px] right-0 z-10">
      <div className="relative ">
        <div className="absolute text-center w-[25px] top-2 right-4 rounded-3xl bg-white text-black">
          {getQuantity()}
        </div>
        <button
          className="white-icon mx-6 my-5"
          onClick={() => navigate("/my-cart")}
        >
          <Icon icon={<AiOutlineShoppingCart size="24" />} />
        </button>
      </div>
    </div>
  );
}
