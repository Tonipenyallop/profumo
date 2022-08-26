import React, { useEffect } from "react";
import {
  getElement,
  getChosenItemName,
  isMoreThanTwo,
  getChosenItemImage,
  getChosenItemPrice,
} from "../../../../app/gettingFunctions";

export default function AddToCart({
  idx,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  function addToCart(): void {
    const chosenElement = getElement(idx);
    setChosenItem(chosenElement);
    const nameOfBottle = getChosenItemName(chosenElement);
    const url = getChosenItemImage(chosenElement);
    const price = getChosenItemPrice(chosenElement);
    let temp = tempCart;

    if (!temp[`${nameOfBottle}`]) {
      temp[`${nameOfBottle}`] = {};
      temp[`${nameOfBottle}`].quantity = 1;
      temp[`${nameOfBottle}`].name = nameOfBottle;
      temp[`${nameOfBottle}`].url = url;
      temp[`${nameOfBottle}`].price = price;
    } else if (temp[`${nameOfBottle}`].quantity < 10)
      temp[`${nameOfBottle}`].quantity += 1;
    else {
      console.log("u cannot add item anymore");
      return;
    }
    setVisibleCart(true);
    setTempCart(temp);

    // for setting cart in local storage
    window.localStorage.setItem("cart", JSON.stringify(tempCart));
    const allItemsSoFar = allItems;
    // for removing duplicated items on my cart
    const isFirstTimeAdded = isMoreThanTwo(chosenElement, tempCart);
    if (isFirstTimeAdded) setAllItems([...allItemsSoFar, chosenElement]);
  }

  // for after refreshing page and not setting empty object to local storage
  useEffect(() => {
    const localCart: any = window.localStorage.getItem("cart");
    localCart && setTempCart(JSON.parse(localCart));
  }, []);

  useEffect(() => {
    let obj: any = {};
    for (let e of allItems) {
      const name = getChosenItemName(e);
      const url = getChosenItemImage(e);
      const price = getChosenItemPrice(e);

      obj[`${name}`] = {};
      obj[`${name}`].name = name;
      obj[`${name}`].url = url;
      obj[`${name}`].price = price;

      window.localStorage.setItem("items", JSON.stringify(obj));
    }
  }, [allItems]);
  // gotta fix this one

  return (
    <div className="flex justify-center items-center">
      <button
        className="button disable"
        onClick={(): void => {
          addToCart();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
