import React from "react";

export default function FirstPageBody({ url }: any) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img className="max-h-[450px] max-w-[400px] " src={url} alt="" />
    </div>
  );
}
