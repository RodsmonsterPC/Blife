"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const Carousel = ({ children: product, autoSlide, autoSlideInterval }) => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === product.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div>
      <div>
        <div className="overflow-hidden relative ">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {product}
          </div>
        </div>
      </div>
      <div className="absolute left-24 bottom-36">
        <div className="flex items-center justify-center gap-2 bg-white border border-[#E1E1E1] w-[84px] h-[32px] rounded-full">
          {product.map((_, i) => (
            <div
              className={`
              transition-all w-[8px] h-[8px] bg-[#E1E1E1] rounded-full
              ${curr === i ? "bg-[#22212C]" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
