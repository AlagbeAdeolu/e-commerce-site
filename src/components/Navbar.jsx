import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { PersonOutlineOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AppLogo from "./AppLogo";

function Navbar() {
  const item = "flex items-center text-[18px]";

  return (
    <div className="h-[80px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[25px] ">
          <div className={item}>
            <Link to="/">Men</Link>
          </div>
          <div className={item}>
            <Link to="/">Women</Link>
          </div>
          <div className={item}>
            <Link to="/">Children</Link>
          </div>
        </div>
        <div className="text-[30px] tracking-[2px]">
          <Link to="/">
            <span className="flex items-center">
              <AppLogo />
              Apparelista
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-[25px]">
          <div className={item}>
            <Link to="/">Homepage</Link>
          </div>
          <div className={item}>
            <Link to="/">About</Link>
          </div>
          <div className={item}>
            <Link to="/">Store</Link>
          </div>
          <div className="flex gap-[15px] cursor-pointer text-[#777]">
            <SearchOutlinedIcon />
            <PersonOutlineOutlined />
            <div className="carticon relative">
              <ShoppingCartOutlinedIcon />
              <span className="w-[20px] h-[20px] text-[12px] rounded-[50%] items-center flex justify-center absolute right-[-10px] top-[-10px] text-white bg-[#2879fe]">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
