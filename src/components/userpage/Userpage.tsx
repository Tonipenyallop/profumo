import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserpageMenubar from "./UserpageMenubar";
export default function Userpage({ isLogin, setIsLogin }: any) {
  const likedLocal: any = window.localStorage.getItem("liked");
  const parsedLocalLiked = JSON.parse(likedLocal);

  function getItemLists(): any {
    const arr = [];
    for (let key in parsedLocalLiked) {
      if (parsedLocalLiked[key].liked) {
        const item = (
          <div
            className="border-b-2 flex justify-start items-center mx-20 px-20"
            key={key}
          >
            <img
              className="w-[150px]"
              src={parsedLocalLiked[key].url}
              alt="item I like"
            />
            <div className="">
              <p className="font-bold text-xl">{parsedLocalLiked[key].name}</p>
              <p>{parsedLocalLiked[key].price}</p>
              <button className=" border-b-2 border-black cursor-pointer text-gray-400 hover:text-black">
                Remove
              </button>
            </div>
          </div>
        );

        arr.push(item);
      }
    }
    return arr;
  }

  return (
    <div className="relative top-[150px]">
      <UserpageMenubar />
      <p className="text-2xl mx-20 py-3">WISH LIST</p>
      <div className="flex flex-col">{getItemLists()}</div>
    </div>
  );
}
