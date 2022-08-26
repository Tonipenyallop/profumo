import React from "react";
import { getElement } from "../../../../app/gettingFunctions";
import SeasonData from "./SeasonData";
import Stars from "./Stars";

export default function SecondPageCard({
  idx,
  concentration,
  size,
  description,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
  seasons,
}: any) {
  function addToCart(): void {
    const chosenElement = getElement(idx);
    setChosenItem(chosenElement);
    setVisibleCart(true);
    const allItemsSoFar = allItems;
    setAllItems([...allItemsSoFar, chosenElement]);
  }
  const seasonName = ["spring", "summer", "fall", "winter", "day", "night"];

  return (
    // backface-hidden
    <div className="absolute card-flip-180 backface-hidden top-0 w-full h-full ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-wrap ">{concentration}</div>
        <div className="flex ">{size}</div>
        <div className="mx-3 my-3 break-words">{description}</div>

        <div className="flex justify-center items-center ">
          <div className="flex flex-col items-start w-full">
            {seasonName.map((e: string, index: number) => {
              return (
                <SeasonData
                  key={`${index}`}
                  seasonName={`${e}`}
                  seasonNumber={seasons[e]}
                />
              );
            })}
          </div>
        </div>
        <button
          className="button w-full"
          onClick={() => {
            addToCart();
          }}
        >
          Add to Cart
        </button>
        <button
          className="button "
          onClick={() =>
            document.getElementById(`${idx}`)?.classList.remove("card-flip-180")
          }
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
