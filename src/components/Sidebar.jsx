import React from "react";

import { ArrowForward, DeleteOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../store/sidebarSlice";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch()

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Cart (0)</div>
        <div className="cursor-pointer w-8 h-8 justify-center align-center ">
          <ArrowForward onClick={() => dispatch(closeSidebar())} className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
