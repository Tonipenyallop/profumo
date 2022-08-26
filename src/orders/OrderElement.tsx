import React from "react";

export default function OrderElement({ idx, e, address, email }: any) {
  function getItem(items: any): any {
    const arr = [];
    for (let key in items) {
      const item = (
        <div className="flex justify-start items-start" key={key}>
          <div className="flex w-[50%]">
            <img
              className="w-[150px]"
              src={items[key]?.url}
              alt="item I like"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="text-xl font-bold">{items[key]?.name}</p>
              <p className="text-gray-400">Quantity: {items[key]?.quantity}</p>
            </div>
          </div>

          <div className="flex justify-end items-end w-[50%] ">
            <p className="flex mx-5 font-bold text-md">{items[key]?.price}</p>
          </div>
        </div>
      );
      arr.push(item);
    }
    return arr;
  }

  function getTotalCost(items: any): number {
    let result = 0;
    for (let key in items) {
      const price = parseInt(items[key].price.split("€")[1]);
      result += price;
    }
    return result;
  }

  return (
    <div
      className="flex justify-start border-b-2 mx-10 my-5 py-5 "
      key={`${idx}`}
    >
      <div className=" w-[40%] grid grid-cols-2  ">
        <div className="  ">
          <div className="font-bold ">ORDER No.</div>
          <div className="">{e.order_number}</div>
        </div>
        <div className=" ">
          <p className="font-bold">Payment</p>
          <div className="">Credit Card</div>
        </div>
        <div className=" ">
          <div className="font-bold">Delivery address</div>
          <div className="">{address}</div>
        </div>
        <div className=" ">
          <div className="font-bold">Email</div>
          <div className="">{email}</div>
        </div>
      </div>
      <div className=" text-sm px-5">
        <div className="font-bold text-md">TOTAL</div>
        <div className="text-xl font-bold ">€{getTotalCost(e.items)}</div>
      </div>
      <div className="w-[50%] ">{getItem(e.items)}</div>
    </div>
  );
}
