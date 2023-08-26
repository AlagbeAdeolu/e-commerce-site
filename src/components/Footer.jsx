import React from "react";
import AppLogo from "./AppLogo";
import Payment from "../assets/img/payment.png";

function Footer() {
  return (
    <footer className="mt-[100px] mr-[200px] mb-[20px] ml-[200px]">
      <section className="flex gap-[50px]">
        <div className="flex flex-1 flex-col gap-[10px] text-justify text-[14px]">
          <h1 className="text-[18px] text-[#555] font-medium">Categories</h1>
          <span className="text-gray-500">Men</span>
          <span className="text-gray-500">Women</span>
          <span className="text-gray-500">Shoes</span>
          <span className="text-gray-500">Accesories</span>
        </div>
        <div className="flex flex-1 flex-col gap-[10px]">
          <h1 className="text-[18px] text-[#555] font-medium">Links</h1>
          <span className="text-gray-500">FAQ</span>
          <span className="text-gray-500">Pages</span>
          <span className="text-gray-500">Stores</span>
          <span className="text-gray-500">Compare</span>
        </div>
        <div className="flex flex-1 flex-col gap-[10px]">
          <h1 className="text-[18px] text-[#555] font-medium">About</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            culpa. Rerum repellat, illum id dolorem sed vitae labore incidunt
            maiores harum tempore? Suscipit sit consequuntur exercitationem
            dolore dolorum molestias eos.
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-[10px]">
          <h1 className="text-[18px] text-[#555] font-medium">Contact</h1>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            culpa. Rerum repellat, illum id dolorem sed vitae labore incidunt
            maiores harum tempore? Suscipit sit consequuntur exercitationem
            dolore dolorum molestias eos.
          </span>
        </div>
      </section>
      <section className="flex items-center justify-between mt-[50px]">
        <div className="flex items-center">
          <span className="flex items-center text-sm">
            <AppLogo className='text-[24px]' />
            Apparelista
          </span>
          <span className="text-gray-500 ml-[20px] text-[12px]" >Copyright 2023. All Rights Reserved. Inspired by LAMADEV</span>
        </div>
        <div>
          <img src={Payment} alt="" className="h-[50px]" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
