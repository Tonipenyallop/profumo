import React, { useEffect, useState } from "react";
import CardButtons from "./card-element/CardButtons";

import FirstPageName from "./card-element/FirstPageName";
import SecondPageCard from "./second-page/SecondPageCard";
import FirstPageBody from "./card-element/FirstPageBody";
import AddToCart from "./card-element/AddToCart";
import Icon from "../Icon";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  getChosenItemImage,
  getChosenItemName,
  getChosenItemPrice,
  getElement,
} from "../../../app/gettingFunctions";
export default function FirstPageCard({
  top,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  const [isChanged, setIsChanged] = useState<boolean>(false);

  // for toggle heart when page was loaded
  useEffect(() => {
    const likesLocal: any = window.localStorage.getItem("liked");
    const parsedLikes = JSON.parse(likesLocal);
    const obj = window.localStorage.getItem("liked");
    if (obj === null) window.localStorage.setItem("liked", JSON.stringify({}));

    for (let key in parsedLikes) {
      top.map((e: any, idx: number) => {
        const element = getElement(idx);
        const name = getChosenItemName(element);
        if (key === name && parsedLikes[key].liked) {
          const heart = document?.getElementsByClassName("heart")[idx];
          heart.textContent = "♥";
          heart.classList.add("text-3xl", "outline-none");
        }
      });
    }
  }, [top]);

  function toggleHeart(idx: number): void {
    let heart = document.getElementsByClassName("heart")[idx];
    let isLiked: boolean;
    if (heart.textContent === "♥") {
      isLiked = false;
      heart.textContent = "♡";
    } else {
      isLiked = true;
      heart.textContent = "♥";
    }
    heart.classList.add("text-3xl", "outline-none");

    // // storing in local storage
    storeLikesOnLocalStorage(idx, isLiked);
  }

  function storeLikesOnLocalStorage(idx: number, isLiked: boolean): void {
    const element = getElement(idx);
    const name = getChosenItemName(element);
    const url = getChosenItemImage(element);
    const price = getChosenItemPrice(element);
    const localObjLiked: any = window.localStorage.getItem("liked");
    let parsedObjLiked = JSON.parse(localObjLiked);

    if (isLiked) parsedObjLiked[name] = { liked: true, name, url, price };
    else parsedObjLiked[name] = { liked: false };
    window.localStorage.setItem("liked", JSON.stringify(parsedObjLiked));
    setIsChanged(!isChanged);
  }

  return (
    <div className="relative flex flex-wrap justify-around items-center">
      {top?.map((e: any, idx: number) => {
        return (
          <div
            className="relative preserve-3d transition-all duration-1000 z-10"
            key={`${idx}`}
          >
            <div
              className="relative preserve-3d transition-all duration-1000  h-[750px] w-[500px] "
              id={`${idx}`}
            >
              <div className="absolute backface-hidden  top-0 w-full h-full">
                <FirstPageBody
                  concentration={e.concentration}
                  size={e.size}
                  url={e.url}
                  price={e.price}
                />
                <FirstPageName name={e.name} price={e.price} />
                <div className="flex justify-center items-center">
                  <CardButtons idx={idx} />
                  <AddToCart
                    idx={idx}
                    setChosenItem={setChosenItem}
                    setVisibleCart={setVisibleCart}
                    allItems={allItems}
                    setAllItems={setAllItems}
                    tempCart={tempCart}
                    setTempCart={setTempCart}
                  />
                  <div
                    id="heart"
                    className="heart cursor-pointer outline-none"
                    onClick={() => {
                      toggleHeart(idx);
                    }}
                  >
                    <div className=" text-3xl">♡</div>
                  </div>
                </div>
              </div>
              {/* below is back page */}
              <SecondPageCard
                idx={idx}
                concentration={e.concentration}
                size={e.size}
                description={e.description}
                setChosenItem={setChosenItem}
                setVisibleCart={setVisibleCart}
                allItems={allItems}
                setAllItems={setAllItems}
                seasons={e.seasons}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
