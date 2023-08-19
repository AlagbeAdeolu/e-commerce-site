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

  return (
    <div className="container mx-auto w-[100%] p-[20px] columns-1 md:columns-2 lg:columns-4 ">
      <ul className="">
        {loading && <LoadingSpinner />}
        {!loading &&
          !error &&
          products.map((product) => {
            return (
              <li key={product.id}>
                <ProductItem
                  name={product.title}
                  price={product.price}
                  image={product.image}
                />
              </li>
            );
          })}
          {error && !loading && <p>{error}</p>}
      </ul>
    </div>
  );
};

export default ProductList;
