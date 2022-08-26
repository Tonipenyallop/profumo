import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "../Card/Cart";
import TopProfumoIcon from "../home/TopProfumoIcon";
import TopCartButton from "../Card/TopCartButton";
import Card from "../Card/Card";

export default function Winter({
  allItems,
  setAllItems,
  chosenItem,
  setChosenItem,
  tempCart,
  setTempCart,
}: any) {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [winterTopFive, setWinterTopFive] = useState<any>([]);
  async function getWinterAll(): Promise<void> {
    const res = await axios.get("winter-all");
    setWinterTopFive(res.data);
  }
  useEffect(() => {
    getWinterAll();
  }, []);
  return (
    <div className=" ">
      <Cart
        visibleCart={visibleCart}
        setVisibleCart={setVisibleCart}
        chosenItem={chosenItem}
      />
      <div className="bg-white"></div>
      <div className="relative">
        <TopProfumoIcon />
        <TopCartButton />
      </div>
      <Card
        top={winterTopFive}
        setVisibleCart={setVisibleCart}
        setChosenItem={setChosenItem}
        allItems={allItems}
        setAllItems={setAllItems}
        tempCart={tempCart}
        setTempCart={setTempCart}
      />
    </div>
  );
}
