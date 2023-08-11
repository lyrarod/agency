"use client";

import { useState } from "react";
import { LuMenu, LuRocket, LuX } from "react-icons/lu";

const navLinks = [
  ["About Us", "about"],
  ["Features", "features"],
  ["Pricing", "pricing"],
  ["Support", "support"],
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      x-data=""
      className={`left-0 top-0 z-50 w-full fixed bg-white bg-opacity-80 shadow-sm ${
        !isOpen ? "backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="relative z-40 -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="#" className="flex items-center xl:gap-x-2 w-full py-5">
              <LuRocket className={`text-3xl xl:text-5xl text-[#3056d3]`} />
              <span className="text-xl xl:text-3xl font-bold">Agency</span>
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                id="navbarToggler"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 sm:hidden z-50"
              >
                {!isOpen ? (
                  <LuMenu
                    onClick={() => (document.body.style.overflow = "hidden")}
                    className={`text-3xl ${isOpen ? "text-white" : ""}`}
                  />
                ) : (
                  <LuX
                    onClick={() => (document.body.style.overflow = "auto")}
                    className={`text-3xl ${isOpen ? "text-white" : ""}`}
                  />
                )}
              </button>
              <nav>
                <ul className="hidden lg:flex">
                  {navLinks.map(([name, target], i) => {
                    return (
                      <li key={`li-${i}`}>
                        <a
                          href={`#${target}`}
                          className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* MOBILE MENU */}
                <ul
                  className={`fixed top-0 ${
                    !isOpen ? "right-[-100vw]" : "right-0"
                  } w-screen h-screen bg-[#3056d3] bg-opacity-90 backdrop-blur-md
                flex flex-col items-center justify-center sm:hidden duration-300 overflow-hidden z-40`}
                >
                  {navLinks.map(([name, target], i) => {
                    return (
                      <li key={`li-${i}`}>
                        <a
                          onClick={() => {
                            setIsOpen(false);
                            document.body.style.overflow = "auto";
                          }}
                          href={`#${target}`}
                          className="flex py-2 text-xl font-medium tracking-widest text-white hover:opacity-70 lg:ml-12 lg:inline-flex duration-150"
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="#support"
                className="rounded-lg bg-black py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
