import React from "react";
import ProductList from "../../components/ProductList";
import Hero from "../../components/Hero";

function Home() {
  return (
    <div>
      <section className="py-16">
        <Hero />
        <ProductList />
      </section>
    </div>
  );
}

export default Home;
