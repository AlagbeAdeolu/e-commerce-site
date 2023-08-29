import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../store/productSlice";
import LoadingSpinner from "./LoadingSpinner";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, loading, error } = useSelector((state) => state.products);
  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div className="">
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {loading && <LoadingSpinner />}
            {!loading &&
              !error &&
              filteredProducts.map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    id={product.id}
                    category={product.category}
                  />
                );
              })}
            {error && !loading && <p>{error}</p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
