import React, { useState } from "react";
import { getChosenItemName } from "../../app/gettingFunctions";
export default function AllItems({
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  const [addFlag, setAddFlag] = useState<boolean>(false);

  function removeItem(name: string): void {
    const filteredItem = allItems.filter(
      (e: any) => name !== getChosenItemName(e)
    );
    setAllItems(filteredItem);

    // for removing quantity of a chosen item
    const temp = tempCart;
    temp[`${name}`] = undefined;
    setTempCart(temp);

    // for removing items from local storage
    cart[name] = undefined;

    window.localStorage.setItem("cart", JSON.stringify(tempCart));
  }

  let cart: any = window.localStorage.getItem("cart");
  cart = JSON.parse(cart);
  const keys: any = [];
  for (let key in cart) {
    keys.push(key);
  }

  function getQuantity(name: string): string {
    const cart: any = window.localStorage.getItem("cart");
    const parsedCart = JSON.parse(cart);
    const quantity = parsedCart[name].quantity;
    return quantity;
  }

  function addQuantity(name: string): void {
    const cart: any = window.localStorage.getItem("cart");
    const parsedCart = JSON.parse(cart);
    const quantity = parsedCart[name].quantity + 1;
    if (quantity > 10) return;

    parsedCart[name].quantity = quantity;

    window.localStorage.setItem("cart", JSON.stringify(parsedCart));
    setTempCart(parsedCart);
    setAddFlag(!addFlag);
  }
  function decreaseQuantity(name: string): void {
    const cart: any = window.localStorage.getItem("cart");
    const parsedCart = JSON.parse(cart);
    const quantity = parsedCart[name].quantity - 1;
    if (quantity <= 0) return;
    parsedCart[name].quantity = quantity;
    window.localStorage.setItem("cart", JSON.stringify(parsedCart));
    setTempCart(parsedCart);
    setAddFlag(!addFlag);
  }
  return (
    <div className="px-5 ">
      {keys?.length === 0 ? (
        <div className="text-center w-screen top-[100px] relative ">
          <div className="text-lg">No items are added yet!</div>
        </div>
      ) : (
        <div className=""></div>
      )}
      {keys.map((e: any, idx: number) => {
        return (
          <div
            className=" border-b-2 border-r-2 flex justify-between items-center"
            key={`${idx}`}
            id={`${idx}`}
          >
            <img
              className="flex w-[100px] max-h-[125px] bg-white"
              src={`${cart[`${e}`].url}`}
              alt=""
            />
            <div className="flex name  break-words mx-3">
              {cart[`${e}`].name}
            </div>
            <div className="flex items-center ">
              <div className="flex items-center">
                <button
                  className="flex button "
                  onClick={() => decreaseQuantity(e)}
                >
                  -
                </button>
                <div className="flex ">{getQuantity(e)}</div>
                <button className="flex button" onClick={() => addQuantity(e)}>
                  +
                </button>
              </div>

              <div className="flex  mx-3">{cart[`${e}`].price}</div>
              <button className="button" onClick={() => removeItem(e)}>
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
