import React from "react";
import Image from "next/image";
const Cards = ({ info }) => {
  return (
    <div className="pt-4 w-[280px] h-[514px] md:flex md:w-auto  md:mx-auto md:pt-20 md:mb-32">
      {info.map((product) => (
        <>
          <div
            key={product.title}
            className="pb-4 md:w-auto text-black ml-3 md:mx-[30px] "
          >
            <div className="flex grid grid-cols-1 relative w-[280px] h-[414px] md:bg-[FFFFFF] md:border-2 md:border-[#E1E1E1] md:rounded-lg">
              <div>
                <Image
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
                <Image
                  className="absolute  right-0 md:right-[-15px] top-3"
                  src="/like.png"
                  width={62}
                  height={31}
                  alt="slider"
                />
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
                <Image src="/rate.png" width={77.31} height={11.76} />
              </div>
            </div>
            <div className="flex justify-between w-[280px] text-black ml-3 md:ml-0 md:bg-[#F9F9F9] md:rounded-b-lg md:pt-4 md:pb-4">
              <div className="md:ml-6">
                <Image src="/share.png" width={55} height={12} alt="share" />
                <div className="flex mt-[9px]">
                  <Image
                    className="mr-3"
                    src="/face.png"
                    width={10}
                    height={10}
                    alt="face"
                  />
                  <Image
                    src="/twitter.png"
                    width={10}
                    height={10}
                    alt="twitter"
                  />
                  <Image
                    className="ml-3"
                    src="/insta.png"
                    width={10}
                    height={10}
                    alt="insta"
                  />
                </div>
              </div>
              <div className="text-center text-sm md:mr-6">
                <button className="font-bold border-2 rounded-full border-[#EDA836] w-[90px] h-[31px] bg-white">
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
