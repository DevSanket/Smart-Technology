import Image from 'next/image'
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import $ from "jquery";
import React, { useContext, useEffect, useState } from "react";
import MobileSideBar from './MobileSideBar';

export default function Header() {
  const [sideBar, setSidebar] = useState("");

  const handleToggleMenu = () => {
    $("#mobile-navigation").slideToggle(200);
    if (sideBar === "") {
      setSidebar("active");
    } else {
      setSidebar("");
    }
  };

  const { pathname } = useRouter();

  useEffect(() => {
    setSidebar("");
  }, [pathname]);

  return (
    <React.Fragment>
      <header className="bg-white w-full z-50 fixed shadow-lg">
        <nav className="py-5 px-10 relative max-w-[1200px] mx-auto">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className='lg:block sm:hidden'>
              <Link href={"/"} className='flex items-center gap-2 '>
                <img
                  src="/assets/logo.jpg"
                  alt="live decor logo"
                  className="h-[50px] w-auto"
                />
                 <p className='text-[24px]'>Smart Technology</p>
              </Link>
             
            </div>
            {/* Menus  */}
            <div className="md:block sm:hidden">
            <ul className="flex items-center justify-center space-x-10">
                <li>
                    Project Work Division
                </li>
                <li>
                    Machine 
                </li>
                </ul>
            </div>
            </div>
         
        </nav>
        </header>

        <header className="w-full fixed z-50 sm:block md:block tablet:hidden bg-white shadow-lg">
        <nav className="grid grid-cols-1">
          <div className="md:container py-4 md:px-0 sm:px-3">
            <div className="flex items-center justify-between">
              <Link href={"/"} className='flex items-center gap-2'>
                <img
                  src="/assets/logo.jpg"
                  alt="live decor logo"
                  className="md:h-[50px] sm:h-[40px] w-auto"
                />
                 <p className='text-[14px]'>Smart Technology</p>
              </Link>

              {/* <button
                onClick={() => handleToggleMenu()}
                className={`menu ${sideBar}`}
              >
                <span></span>
              </button> */}
              <button
                onClick={() => handleToggleMenu()}
                className={`w-[50px] h-full p-1 space-y-2 ${
                  sideBar != "active" ? "block" : "hidden"
                }`}
              >
                <div className="h-[1px] bg-black w-full"></div>
                <div className="h-[1px] bg-black w-full"></div>
                <div className="h-[1px] bg-black w-full"></div>
              </button>

              <button
                onClick={() => handleToggleMenu()}
                className={`w-[50px] h-full p-1 ${
                  sideBar === "active" ? "block" : "hidden"
                }`}
              >
                <div className="h-[1px] bg-black w-full rotate-45"></div>
                <div className="h-[1px] bg-black w-full -rotate-45"></div>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <MobileSideBar state={sideBar} />
    </React.Fragment>
  )
}
