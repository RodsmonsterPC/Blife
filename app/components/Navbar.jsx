"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useUserContext } from "../contexts/userContext";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const infoData = useUserContext();

  const {
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    setTotal,
    total,
  } = infoData;

  const onDeleteProducts = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div>
      <div className="navbar-h pt-[5px] pb-2 w-auto bg-white shadow-md md:shadow-none z-10">
        <nav className="md:flex md:justify-between ">
          <div className="md:pt-7 md:pb-6 md:pl-logo-l ">
            <Link href="https://www.figma.com/file/IuLObxCwhPnP1h5vSIkXvH/Examen-Blife-Frontend?type=design&node-id=0-1&mode=design&t=BQqDoixzCWmIEK82-0">
              <Image
                className="hidden md:flex"
                src="/Logo.png"
                width={165.33}
                height={50}
                alt="logo image"
              />
            </Link>
            <Link href="https://www.figma.com/file/IuLObxCwhPnP1h5vSIkXvH/Examen-Blife-Frontend?type=design&node-id=0-1&mode=design&t=BQqDoixzCWmIEK82-0">
              <Image
                className="ml-[18px] mt-[16px] md:hidden"
                src="/Logo.png"
                width={125.33}
                height={50}
                alt="logo image"
              />
            </Link>
          </div>
          <div className="md:flex  md:h-link-h md:items-center md:w-40 md:pr-p-links">
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 md:bg-white bg-slate-200 md:text-black text-black  absolute md:static md:z-40 z-0 left-0 top-16 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "left-.5" : "left-[-490px]"
              }`}
            >
              <li className="ml-12 mt-8 mb-6 mr-6 w-32 text-center font-bold   md:font-bold hover:bg-amber-500 rounded-full">
                {" "}
                <Link href="youtube.com">Productos</Link>
              </li>
              <li className="ml-12 mt-8 mb-6 mr-6 w-32 text-center font-bold   md:font-bold hover:bg-amber-500 rounded-full">
                <Link href="">Promociones</Link>
              </li>
              <li className="ml-12 mt-8 mb-6 mr-6 w-32 text-center font-bold   md:font-bold hover:bg-amber-500 rounded-full ">
                <Link href="">Nosotros</Link>
              </li>
              <div className="md:hidden flex justify-between w-[150px] ml-10 pt-4">
                <Link href="" className="">
                  <Image
                    src="/search.png"
                    width={25}
                    height={25}
                    alt="search"
                  />
                </Link>
                <Link href="">
                  <Image src="/user.png" width={26} height={26} alt="user" />
                </Link>

                <div
                  className="relative md:ml-m-rb md:mr-m-buttons"
                  onClick={() => setActive(!active)}
                >
                  <Link href="" className="">
                    <Image
                      className="logo"
                      src="/shopping.png"
                      width={24}
                      height={24}
                      alt="shopping"
                    />
                  </Link>
                  <div className="flex rounded-full bg-[#DD0606] w-4 h-4 text-center items-center justify-center absolute bottom-4 left-4">
                    <span className="text-xs text-black">{countProducts}</span>
                  </div>
                </div>
                <div
                  className={`flex flex-col w-[16rem] bg-white absolute top-60 left-6 shadow-2xl rounded-md z-50 ${
                    active ? "" : "hidden"
                  }`}
                >
                  {allProducts.length ? (
                    <>
                      <div className="flex flex-col text-black justify-between border-b-2 border-gray-200 z-30 ">
                        {allProducts.map((product) => (
                          <div
                            className="flex justify-between items-center "
                            key={product.id}
                          >
                            <span className="m-4 text-sm ">
                              {product.quantity}
                            </span>
                            <p className="text-xs w-[100px]">{product.title}</p>

                            <span className=" text-sm font-semibold ">
                              {product.price}
                            </span>
                            <Image
                              className="m-3 "
                              width={15}
                              height={15}
                              src={"/icon-close.svg"}
                              alt="close icon"
                              onClick={() => onDeleteProducts(product)}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-black justify-center pt-3 pb-3">
                        <h3 className="text-sm font-semibold mr-3">Total:</h3>
                        <span className="text-sm">${total}</span>
                      </div>

                      <button className="bg-gray-100 p-[.5rem] w-full  text-black transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-sky-600 hover:text-white duration-300">
                        Pagar
                      </button>
                      <button
                        onClick={onCleanCart}
                        className="bg-button-color p-[.5rem] w-full rounded-b-lg text-black transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-red-600 hover:text-white duration-300"
                      >
                        Vaciar el carrito
                      </button>
                    </>
                  ) : (
                    <p className="text-center"> El carrito esta vacio </p>
                  )}
                </div>
              </div>
            </ul>
          </div>
          <div className="hidden md:flex md:justify-between md:items-center">
            <Link href="" className="md:mr-m-rb">
              <Image
                className="search"
                src="/search.png"
                width={25}
                height={25}
                alt="search"
              />
            </Link>
            <Link href="">
              <Image
                className="logo"
                src="/user.png"
                width={26}
                height={26}
                alt="user"
              />
            </Link>
            <div
              className="relative md:ml-m-rb md:mr-m-buttons"
              onClick={() => setActive(!active)}
            >
              <Link href="" className="">
                <Image
                  className="logo"
                  src="/shopping.png"
                  width={24}
                  height={24}
                  alt="shopping"
                />
              </Link>
              <div className="md:flex rounded-full bg-[#DD0606] w-4 h-4 text-center items-center justify-center absolute bottom-4 left-4">
                <span className="text-xs text-black">{countProducts}</span>
              </div>
            </div>
            <div
              className={`flex flex-col w-[16rem] bg-white absolute top-[83px] right-12 shadow-2xl rounded-md z-30 ${
                active ? "" : "hidden"
              }`}
            >
              {allProducts.length ? (
                <>
                  <div className="flex flex-col text-black justify-between border-b-2 border-gray-200 z-30">
                    {allProducts.map((product) => (
                      <div
                        className="flex justify-between items-center "
                        key={product.id}
                      >
                        <span className="m-4 text-sm ">{product.quantity}</span>
                        <p className="text-xs w-[100px]">{product.title}</p>

                        <span className=" text-sm font-semibold ">
                          {product.price}
                        </span>
                        <Image
                          className="m-3 "
                          width={15}
                          height={15}
                          src={"/icon-close.svg"}
                          alt="close icon"
                          onClick={() => onDeleteProducts(product)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-black justify-center pt-3 pb-3">
                    <h3 className="text-sm font-semibold mr-3">Total:</h3>
                    <span className="text-sm">${total}</span>
                  </div>

                  <button className="bg-gray-100 p-[.5rem] w-full  text-black transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-sky-600 hover:text-white duration-300">
                    Pagar
                  </button>
                  <button
                    onClick={onCleanCart}
                    className="bg-button-color p-[.5rem] w-full rounded-b-lg text-black transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-red-600 hover:text-white duration-300"
                  >
                    Vaciar el carrito
                  </button>
                </>
              ) : (
                <div className="text-sm text-black text-end mt-1 ">
                  <p className=""> El carrito esta vacio </p>
                </div>
              )}
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute border-2 rounded-lg w-[42px] right-8 top-4 cursor-pointer md:hidden"
          >
            <Image
              src="/menu.svg"
              width={40}
              height={40}
              name={open ? "close" : "menu"}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
