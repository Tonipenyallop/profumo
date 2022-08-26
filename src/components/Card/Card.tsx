import React from "react";
import FirstPageCard from "./first-page/FirstPageCard";
export default function Card({
  top,
  setVisibleCart,
  setChosenItem,
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  return (
    <div className="relative preserve-3d">
      <div className="flex mt-24">
        <FirstPageCard
          top={top}
          setChosenItem={setChosenItem}
          setVisibleCart={setVisibleCart}
          allItems={allItems}
          setAllItems={setAllItems}
          tempCart={tempCart}
          setTempCart={setTempCart}
        />
      </div>
    </div>
  );
}
