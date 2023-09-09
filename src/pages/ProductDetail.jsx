import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { addToCart } from "../store/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products);
  const product = products.find((item) => item.id === parseInt(id));
  if (!product) {
    return <LoadingSpinner />;
  }
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category
      })
    )
  }


  const { title, description, image, price } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0  ">
            <img className="max-w-[200px] lg:max-w-sm"   src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto">{title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">{price}</div>
            <p className="mb-8">{description}</p>
            <button onClick={handleAddToCart} className="bg-neutral-950 text-white py-4 px-8">Add to Cart</button>
          </div> 
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
