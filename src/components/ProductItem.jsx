import React from "react";
import { Link } from "react-router-dom";
import { AddOutlined, RemoveRedEyeRounded } from "@mui/icons-material";

const ProductItem = (props) => {
  return (
    <Link to={`/products/${props.id}`}>
      <div>
        <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition ">
          <div className="w-full h-full flex justify-center">
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                src={props.image}
                alt={props.description}
              />
            </div>
          </div>
          <div className="absolute top-4 right-11 group-hover:right-4 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 p-2 transition-all duration-300 ">
            <button>
              <div className="flex justify-center items-center bg-red-500 text-white w-12 h-12">
                <AddOutlined className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${props.id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <RemoveRedEyeRounded className="text-3xl" />
            </Link>
          </div>
        </div>
        <div>
          <div className="text-sm capitalize mb-1 text-gray-500">
            {props.category}
          </div>
          <Link to={`/product/${props.id}`}>
            <h2 className="font-semibold mb-1">{props.title}</h2>
          </Link>
          <div className="font-semibold">
            <span>$ {props.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
