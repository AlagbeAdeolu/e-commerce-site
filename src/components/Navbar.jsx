import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  toggleSidebar } from "../store/sidebarSlice";
import { Menu, Close } from "@mui/icons-material";

// App Logo
import AppLogo from "./AppLogo";
// MUI Icons
import { ShoppingBagOutlined } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { PersonOutlineOutlined } from "@mui/icons-material";



function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = () => {
    setMobileMenuOpen(!mobileMenuOpen)

  }

  const item = "flex items-center text-[18px]";
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(mobileMenuOpen)

  return (
    <>
      <div className="container mx-auto h-[80px]">
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
          <div className="lg:flex items-center gap-[25px] hidden ">
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
              <div
                className="carticon relative cursor-pointer"
                onClick={() => {
                  dispatch(toggleSidebar());
                }}
              >
                <ShoppingBagOutlined />
                <span className="w-[20px] h-[20px] text-[12px] rounded-[50%] items-center flex justify-center absolute right-[-10px] top-[-10px] text-white bg-[#2879fe]">
                  {cart.reduce((total, item) => total + item.amount, 0)}
                </span>
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div
                className="carticon relative cursor-pointer"
                onClick={() => {
                  dispatch(toggleSidebar());
                  setMobileMenuOpen(false)
                }}
              >
                <ShoppingBagOutlined />
                <span className="w-[20px] h-[20px] text-[12px] rounded-[50%] items-center flex justify-center absolute right-[-10px] top-[-10px] text-white bg-[#2879fe]">
                  {cart.reduce((total, item) => total + item.amount, 0)}
                </span>
              </div>
          <div onClick={handleNav} className="flex gap-2 items-center cursor-pointer lg:hidden">
            
              {!mobileMenuOpen ? <Menu /> : <Close />}
          </div>
          <div className={mobileMenuOpen ? 'z-10 text-white fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-gray-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <div className="flex items-center text-[18px] border-b p-4 mt-[50px] border-gray-500">
              <Link to="/">Homepage</Link>
            </div>
            <div className="flex items-center text-[18px] border-b p-4 border-gray-500">
              <Link to="/">About</Link>
            </div>
            <div className="flex items-center text-[18px] border-b p-4 border-gray-500">
              <Link to="/">Store</Link>
            </div>
            <div className="flex gap-[15px] cursor-pointer text-[#777] p-4 items-center">
              <SearchOutlinedIcon />
              <PersonOutlineOutlined />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
