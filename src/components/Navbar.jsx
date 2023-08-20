import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { PersonOutlineOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom";
import AppLogo from './AppLogo'

function Navbar() {
  return (
    <div>
      <div className="left"></div>
      <div className="center">
        <Link to="/">
          <span className="flex items-center">
            <AppLogo />Apparelista
            </span>
        </Link>
      </div>
      <div className="right">
        <Link to='/' ></Link>
        <Link to='/' ></Link>
        <Link to='/' ></Link>
        <Link to='/' ></Link>
        <ShoppingCartOutlinedIcon />
        <SearchOutlinedIcon />
        <PersonOutlineOutlined />
      </div>
    </div>
  );
}

export default Navbar;
