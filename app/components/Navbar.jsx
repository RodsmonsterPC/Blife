"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
                <Link href="" className="">
                  <Image
                    src="/shopping.png"
                    width={24}
                    height={24}
                    alt="shopping"
                  />
                </Link>
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
            <Link href="" className="md:ml-m-rb md:mr-m-buttons">
              <Image
                className="logo"
                src="/shopping.png"
                width={24}
                height={24}
                alt="shopping"
              />
            </Link>
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
