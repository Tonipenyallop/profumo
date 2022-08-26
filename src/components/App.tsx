import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import "../input.css";
import Top from "./Top/Top";
import MyCart from "./cart/MyCart";
import Summer from "./summer/Summer";
import MenuBar from "./home/MenuBar";
import Winter from "./winter/winter";
import Success from "./Success";
import Cancel from "./Cancel";
import Login from "./userpage/Login";
import Userpage from "./userpage/Userpage";
import AccountPage from "./userpage/Account";
import Orders from "./orders/Orders";
import Thanks from "./userpage/Thanks";
function App() {
  const [allItems, setAllItems] = useState<any>([]);
  const [chosenItem, setChosenItem] = useState<any>(false);
  const [tempCart, setTempCart] = useState<any>({});

  return (
    <div className="">
      <div className="fixed top-0 flex justify-center items-center w-full z-10">
        <MenuBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/top"
          element={
            <Top
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />
        <Route
          path="/summer"
          element={
            <Summer
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />
        <Route
          path="/winter"
          element={
            <Winter
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />

        <Route
          path="/my-cart"
          element={
            <MyCart
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/account" element={<AccountPage />} />
        <Route path="/user-page" element={<Userpage />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/success" element={<Success />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </div>
  );
}

export default App;
