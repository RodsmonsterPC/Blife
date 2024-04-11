"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useUserContext } from "../contexts/userContext";
import Link from "next/link";
import { Allan } from "next/font/google";
const Cards = ({ info }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(22);

  const infoData = useUserContext();
  const {
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    setTotal,
    total,
  } = infoData;

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const onLike = () => {
    setLiked(!liked);

    if (liked) {
      setLikeCount(likeCount - 1);
    }
    if (!liked) {
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div className="pt-4 w-[280px] h-[514px] md:flex md:w-auto  md:mx-auto md:pt-20 md:mb-32 ">
      {info.map((product) => (
        <>
          <div
            key={product.id}
            className="pb-4 md:w-auto text-black ml-3 md:mx-[30px] z-40"
          >
            <div className="flex grid grid-cols-1 relative w-[280px] h-[414px] md:bg-[FFFFFF] md:border-2 md:border-[#E1E1E1] md:rounded-lg ">
              <div>
                <Image
                  className=""
                  src="/product.png"
                  width={304}
                  height={304}
                  alt="Product"
                />
              </div>
              <div>
                <Image
                  className="absolute left-24 top-[238px]"
                  src="/Slider.png"
                  width={84}
                  height={32}
                  alt="slider"
                />
              </div>
              <div>
                <Image
                  className="absolute right-0 md:right-[-15px] top-12"
                  src="/offer.png"
                  width={53}
                  height={31}
                  alt="slider"
                />
              </div>
              <div>
                <div
                  onClick={onLike}
                  className={`absolute right-0 md:right-[-15px] top-3 border-2 border-zinc-100 w-[62px] h-[31px] rounded-full  hover:bg-[#fda4af] hover:text-white ${
                    liked ? "bg-[#fecdd3] md:bg-[#fecdd3]" : "md:bg-white"
                  }`}
                >
                  <div>
                    <div
                      className={`heart absolute left-3.5 top-3 ${
                        liked ? "" : "hidden"
                      }`}
                    ></div>
                  </div>
                  <div className="w-[20px] h-[20px]">
                    <Image
                      className="absolute left-3 md:right-[-15px] top-2"
                      src="/heart.svg"
                      width={14}
                      height={14}
                      alt="slider"
                    />
                  </div>
                  <div className="text-xs font-bold absolute left-[34px] top-1.5 ">
                    <p>{likeCount}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-[20px]">
                <div className="md:ml-4">
                  <h2 className="font-bold">{product.title}</h2>
                  <small>{product.data}</small>
                </div>
                <div className="md:mr-4">
                  <h2 className="font-bold">{product.price}</h2>
                  <small className="line-through">{product.discount}</small>
                </div>
              </div>
              <div className="h-[20px] mt-4 md:ml-4 md:pt-2">
                <Image
                  src="/rate.png"
                  width={77.31}
                  height={11.76}
                  alt="rate"
                />
              </div>
            </div>
            <div className="flex justify-between w-[280px] text-black ml-3 md:ml-0 md:bg-[#F9F9F9] md:rounded-b-lg md:pt-4 md:pb-4">
              <div className="md:ml-6">
                <Image src="/share.png" width={55} height={12} alt="share" />
                <div className="flex mt-[9px]">
                  <Link href="https://www.facebook.com/">
                    <Image
                      className="mr-3"
                      src="/face.png"
                      width={10}
                      height={10}
                      alt="face"
                    />
                  </Link>
                  <Link href="https://twitter.com/?lang=es">
                    <Image
                      src="/twitter.png"
                      width={10}
                      height={10}
                      alt="twitter"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/">
                    <Image
                      className="ml-3"
                      src="/insta.png"
                      width={10}
                      height={10}
                      alt="insta"
                    />
                  </Link>
                </div>
              </div>
              <div className="text-center text-sm md:mr-6">
                <button
                  onClick={() => onAddProduct(product)}
                  className="font-bold border-2 rounded-full border-[#EDA836] w-[90px] h-[31px] bg-white hover:bg-yellow-300"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cards;
