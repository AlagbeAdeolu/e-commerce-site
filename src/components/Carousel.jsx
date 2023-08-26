import { useState } from "react";
import { WestOutlined, EastOutlined } from "@mui/icons-material";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="h-[100vh] w-[100vw] relative">
      <div style={{transform: `translateX(-${currentSlide*100}vw)`}} className="overflow-hidden ease-in duration-1000 flex w-[400vw] h-[100%]">
        <img
          className="w-[100vw] h-[100%] object-cover"
          src="/images/1.jpg"
          alt=""
        />
        <img
          className="w-[100vw] h-[100%] object-cover"
          src="/images/2.jpg"
          alt=""
        />
        <img
          className="w-[100vw] h-[100%] object-cover"
          src="/images/3.jpg"
          alt=""
        />
        <img
          className="w-[100vw] h-[100%] object-cover"
          src="/images/4.jpg"
          alt=""
        />
      </div>
      <div className="w-fit flex absolute left-0 right-0 bottom-[100px] gap-[10px] m-auto">
        <div
          onClick={prevSlide}
          className="w-[50px] h-[50px] flex items-center justify-center border-[#999] border-solid border-[1px]"
        >
          <WestOutlined />
        </div>
        <div onClick={nextSlide} className="w-[50px] h-[50px] flex items-center justify-center border-[#999] border-solid border-[1px]">
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
