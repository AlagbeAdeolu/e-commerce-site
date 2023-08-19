import React from "react";

const ProductItem = (props) => {
  return (
    <div className="flex flex-col text-center items-center gap-8">
      <div className="">
        <img
          className="min-w-[50px] max-h-[80px]"
          src={props.image}
          alt={props.description}
        />
      </div>
      <div>
        <div>
          <span className="break-words">{props.name}</span>
        </div>
        <div>
          <span className="break-words">${props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
