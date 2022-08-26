import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "../Card/Card";
import Cart from "../Card/Cart";
import TopCartButton from "../Card/TopCartButton";
import TopProfumoIcon from "../home/TopProfumoIcon";

export default function Top({
  allItems,
  setAllItems,
  chosenItem,
  setChosenItem,
  tempCart,
  setTempCart,
}: any) {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [top, setTop] = useState<any>([]);

  async function getAllTop(): Promise<void> {
    const res = await axios.get("/all");
    const data = res.data;

    setTop(data);
  }

  useEffect(() => {
    getAllTop();
  }, []);

  return (
    <div className="">
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
        top={top}
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
