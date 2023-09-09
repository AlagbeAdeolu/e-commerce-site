import React, { useEffect } from "react";

import { ArrowForward, DeleteOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../store/sidebarSlice";
import ShoppingCartItem from "./ShoppingCartItem";
import { clearCart, total } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total())
  },[dispatch])
 

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ({cart.reduce((total, item) => total + item.amount, 0)})
        </div>
        <div className="cursor-pointer w-8 h-8 justify-center align-center ">
          <ArrowForward
            onClick={() => dispatch(closeSidebar())}
            className="text-2xl"
          />
        </div>
      </div>
      <div className="bg-red-500 flex flex-col justify-between">
        <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto border-b ">
          {cart.map((item) => {
            return <ShoppingCartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span> ${" "}
              {cart
                .reduce((total, item) => total + item.amount * item.price, 0)
                .toFixed(2)}
            </div>
            <div
              onClick={() => dispatch(clearCart())}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl "
            >
              <DeleteOutline />
            </div>
          </div>
          <Link
            to="/"
            className="bg-gray-300 w-full p-4 flex justify-center items-center font-medium "
          >
            View Cart
          </Link>
          <Link
            to="/"
            className="bg-neutral-950 w-full text-white  p-4 flex justify-center items-center font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
