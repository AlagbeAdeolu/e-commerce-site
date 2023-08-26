import React from "react";
import ProductList from "../../components/ProductList";
import Sidebar from "../../components/Sidebar";

function Home() {
  return (
    <div>
      <section className="py-16">
        Home
        <Sidebar />
        <ProductList />
      </section>
    </div>
  );
}

export default Home;
