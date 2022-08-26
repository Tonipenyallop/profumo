import React from "react";
import { AiOutlineStar } from "react-icons/ai";

import Icon from "../../Icon";

export default function Stars({ number }: any) {
  function arrayMaker(): Array<number> {
    return new Array(number).fill(0);
  }
  return (
    <div className="flex ">
      {arrayMaker().map((e: number, idx: number) => {
        return (
          <Icon
            key={`${idx}`}
            icon={<AiOutlineStar size="24" color="black" />}
          />
        );
      })}
    </div>
  );
}
