import React, { useState, useRef, useEffect } from "react";
import Switcher from "../component/Switcher";
import onClickOutside from "react-onclickoutside";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const closeMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(isOpen);
  };

  return (
    //Navbar section dksfjskdl
    <section id="navbar" className="text-black">
      {/* <!-- component --> */}
      <nav class="relative select-none  bg-[#9ecbe0] lg:flex lg:items-stretch w-full px-8 pt-2 pb-2  dark:text-white  dark:bg-gray-900">
        <div
          class="flex flex-no-shrink items-stretch h-12 "
          onClick={closeMenu}
        >
          <a
            href="/"
            class="flex-no-grow font-bold text-black ite text-2xl flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark dark:text-white"
          >
            MYS.Crypto
          </a>

          <button
            class="block lg:hidden cursor-pointer dark:bg-white  ml-auto relative w-12 h-12 p-4 dark:bg-black"
            onClick={() => setIsOpen(true)}
          >
            {isOpen ? (
              <svg
                className="fill-current text-black dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                class="fill-current text-black dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div
            class="  w-full lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow"
            ref={ref}
          >
            <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
              <a
                href="#coins"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-600 no-underline flex items-center md:hover:bg-transparent dark:hover:bg-grey-dark  hover:text-white dark:text-gray-300"
              >
                Coins Prices
              </a>
              <a
                href="#exchange"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-600 no-underline flex items-center md:hover:bg-transparent dark:hover:bg-grey-dark  hover:text-white dark:text-gray-300"
              >
                Exchange
              </a>
              <a
                href="#news"
                class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-600 no-underline flex items-center md:hover:bg-transparent dark:hover:bg-grey-dark  hover:text-white dark:text-gray-300"
              >
                News
              </a>
              <div className="flex items-center ">
                <a
                  className=" 
                  pt-6 px-4
              "
                >
                  <Switcher />
                </a>
              </div>
            </div>
          </div>
        )}
        <div
          class="hidden md:blok lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow"
          ref={ref}
        >
          <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a
              href="#coins"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-600 no-underline flex items-center md:hover:bg-transparent dark:hover:bg-grey-dark  hover:text-white dark:text-gray-300"
            >
              Coins Prices
            </a>
            <a
              href="#exchange"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-600 no-underline flex items-center md:hover:bg-transparent dark:hover:bg-grey-dark  hover:text-white dark:text-gray-300"
            >
              Exchange
            </a>
            <a
              href="#news"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-600 no-underline flex items-center md:hover:bg-transparent dark:hover:bg-grey-dark  hover:text-white dark:text-gray-300"
            >
              News
            </a>
            <div className="flex items-center ">
              <a
                className=" 
                  pt-6 px-4
              "
              >
                <Switcher />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
