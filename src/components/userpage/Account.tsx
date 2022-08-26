import React, { useEffect, useState } from "react";
import Login from "./Login";
import Userpage from "./Userpage";

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState<string | null>("false");

  useEffect(() => {
    const isLoginLocal = window.localStorage.getItem("isLogin");
    setIsLogin(isLoginLocal);
  }, []);
  return (
    <div>
      {isLogin === "true" ? (
        <Userpage isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <Login />
      )}
    </div>
  );
}
