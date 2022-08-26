import React from "react";
import AllItems from "./AllItems";
import Total from "./Total";

export default function MyCart({
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  return (
    <div className="">
      <div className="flex justify-evenly items-start flex-wrap mt-32 pb-5">
        <div className="flex ">
          <AllItems
            allItems={allItems}
            setAllItems={setAllItems}
            tempCart={tempCart}
            setTempCart={setTempCart}
          />
        </div>

        <Total allItems={allItems} tempCart={tempCart} />
      </div>
    </div>
  );
}
