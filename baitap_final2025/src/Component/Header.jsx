import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [active,setactive]=useState("home")
  return (
    <div  className="grid grid-cols-3 gap-4 h-[60px] pt-[20px]"
    style={{ width: "1200px", margin: "0px auto"}}>
      <div className="flex gap-3 ">
        <p className={`${active==="home"?"text-amber-600":""}` } onClick={()=>setactive("home")}>Home</p>
        <p  className={`${active==="shop"?"text-amber-600":""}`}onClick={()=>setactive("shop")}>Shop</p>
      </div>
      <div className="text-center ">
        <h6>BOUTIQUE</h6>
      </div>
      <div className="flex gap-3 justify-end ">
       <FaCartArrowDown/>
      <p>Cart</p>
      <IoPersonSharp />
      <p>Login</p>
      </div>
    </div>
  );
};

export default Header;