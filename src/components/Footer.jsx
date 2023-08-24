import React from "react";
import AppLogo from "./AppLogo";
import Payment from "../assets/img/payment.png"

function Footer() {
  return (
    <footer className="">
      <section>
        <div>
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accesories</span>
        </div>
        <div>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
        </div>
        <div>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            culpa. Rerum repellat, illum id dolorem sed vitae labore incidunt
            maiores harum tempore? Suscipit sit consequuntur exercitationem
            dolore dolorum molestias eos.
          </span>
        </div>

        <div>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            culpa. Rerum repellat, illum id dolorem sed vitae labore incidunt
            maiores harum tempore? Suscipit sit consequuntur exercitationem
            dolore dolorum molestias eos.
          </span>
        </div>
      </section>
      <section>
        <div>
          <span><AppLogo /></span>
          <span>Copyright 2023. All Rights Reserved. Inspired by LAMADEV</span>
        </div>
        <div>
          <img src={Payment} alt="" className="w-[100px]"/>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
