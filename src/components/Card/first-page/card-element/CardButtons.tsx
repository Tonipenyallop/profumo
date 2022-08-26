import React from "react";
export default function CardButtons({ idx }: any) {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <button
        className="button"
        onClick={(): void => {
          const card = document.getElementById(`${idx}`);
          card?.classList.add("card-flip-180");
        }}
      >
        Detail
      </button>
    </div>
  );
}
