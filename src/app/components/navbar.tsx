"use client"; // Ensure the component is client-side

import Link from "next/link";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  justify-center items-center">
      {/* Navbar for large screens */}
      <div className="flex justify-between  items-center py-3 md:w-[90%] w-full  md:px-0 px-8">
        {/* Hamburger Menu Icon for md and smaller screens */}
        <div className="md:hidden  flex items-center">
          <MenuIcon className="text-4xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <div className="px-5  pt-2">
          <Image
            src="/assists/3legant..png"
            alt="logo"
            className="  h-7 "
            layout="intrinsic"
            width={100}
            height={100}
          />
        </div>

        {/* Logo */}

        {/* Navigation Links */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex justify-center items-center">
            <li className="px-4 text-customGrayBlue active:text-black hover:text-blue-600">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 text-customGrayBlue active:text-black hover:text-blue-600 flex items-center">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="px-4 text-customGrayBlue active:text-black hover:text-blue-600 flex items-center">
              <Link href="/products">Product</Link>
            </li>
            <li className="px-4 text-customGrayBlue active:text-black hover:text-blue-600">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="gap-4 flex justify-center  items-center">
          <SearchIcon className=" hidden md:block text-4xl ease-in-out cursor-pointer" />
          {/* <AccountCircleIcon className=" text-4xl hidden md:block cursor-pointer" /> */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Account Icon */}
            <AccountCircleIcon className=" text-4xl cursor-pointer " />

            {/* Pop-up box */}
            {isHovered && (
              <div
                className="absolute duration-1000  ease-in-out	z-40 w-[300px] h-[250px] right-11  p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <button className="bg-black text-white px-2 py-3 text-xl rounded-xl w-full mt-5">
                  <Link href="/signin"> Sign In</Link>
                </button>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-5 justify-center items-center">
                  <a href="https://facebook.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width={25}
                    >
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width={25}
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      width={25}
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <svg
              width="70"
              height="40"
              viewBox="0 0 50 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_13_4364)">
                <circle cx="40" cy="14" r="10" fill="#141718" />
                <path
                  d="M36.9281 18V16.6705L40.0346 13.794C40.2988 13.5384 40.5204 13.3082 40.6994 13.1037C40.8812 12.8991 41.019 12.6989 41.1127 12.5028C41.2065 12.304 41.2534 12.0895 41.2534 11.8594C41.2534 11.6037 41.1951 11.3835 41.0787 11.1989C40.9622 11.0114 40.8031 10.8679 40.6014 10.7685C40.3997 10.6662 40.171 10.6151 39.9153 10.6151C39.6483 10.6151 39.4153 10.669 39.2164 10.777C39.0176 10.8849 38.8642 11.0398 38.7562 11.2415C38.6483 11.4432 38.5943 11.6832 38.5943 11.9616H36.8429C36.8429 11.3906 36.9721 10.8949 37.2306 10.4744C37.4892 10.054 37.8514 9.72869 38.3173 9.49858C38.7832 9.26847 39.3201 9.15341 39.9281 9.15341C40.5531 9.15341 41.0971 9.2642 41.5602 9.4858C42.0261 9.70455 42.3883 10.0085 42.6468 10.3977C42.9054 10.7869 43.0346 11.233 43.0346 11.7358C43.0346 12.0653 42.9693 12.3906 42.8386 12.7116C42.7108 13.0327 42.4821 13.3892 42.1525 13.7812C41.823 14.1705 41.3585 14.6378 40.7591 15.1832L39.4849 16.4318V16.4915H43.1497V18H36.9281Z"
                  fill="white"
                />
              </g>
              <path
                d="M10 8L10 9C10 10.6569 11.3431 12 13 12C14.6569 12 16 10.6569 16 9V8"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6116 5H9.3886C7.43325 5 5.76449 6.41365 5.44303 8.3424L3.77636 18.3424C3.37001 20.7805 5.25018 23 7.72194 23H18.2783C20.75 23 22.6302 20.7805 22.2238 18.3424L20.5572 8.3424C20.2357 6.41365 18.5669 5 16.6116 5Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <defs>
                <clipPath id="clip0_13_4364">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(30 4)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Hamburger Menu for mobile devices */}

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transition-transform duration-700 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-between p-5">
          {/* Logo */}
          <Image
            layout="intrinsic"
            width={100}
            height={100}
            src="/assists/3legant..png"
            alt="logo"
            className="h-8 md:h-10"
          />
          {/* Smaller logo for mobile */}
          {/* Close Icon */}
          <CloseIcon className="text-4xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Search Bar */}
        <div className="px-5 mt-5 flex justify-start  items-center">
          <input
            type="text"
            placeholder="Search"
            className="relative w-full p-4 border border-gray-500 rounded-lg placeholder:text-lg placeholder:text-gray-600 placeholder:px-8"
          />
          <button className="absolute a p-2 rounded-r-lg">
            <SearchIcon className="text-4xl text-gray-400" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <ul className=" flex flex-col items-start px-5 space-y-11 text-lg mt-6">
          <li className=" border-b-2 pb-5 w-full">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="border-b-2 flex items-center justify-between w-full pb-5">
            <Link href="/shop" onClick={toggleMenu}>
              Shop
            </Link>
            <ArrowForwardIosOutlinedIcon className="rotate-90 w-4" />
          </li>
          <li className="border-b-2  flex items-center justify-between w-full pb-5">
            <Link href="/products" onClick={toggleMenu}>
              Product
            </Link>
            <ArrowForwardIosOutlinedIcon className="rotate-90 w-4" />
          </li>
          <li className="border-b-2 w-full pb-5">
            <Link href="/contactus" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Bottom Section */}
        <div className="w-[90%] top-96 relative h-auto left-5 space-y-5">
          <div className="border-b-2 py-3 flex items-center justify-between w-full">
            <span className="text-gray-500 text-xl">Cart</span>
            <div className="flex gap-1 flex-row-reverse justify-center items-center">
              <p className="font-semibold flex justify-center items-center text-base overflow-hidden text-center w-[20px] h-[20px] rounded-full bg-black text-white">
                2
              </p>
              <ShoppingBagIcon className="text-3xl" />
            </div>
          </div>
          <div className="border-b-2 py-3 flex items-center justify-between w-full">
            <span className="text-gray-500 text-xl">Wishlist</span>
            <div className="flex flex-row-reverse gap-1 justify-center items-center">
              <p className="font-semibold flex justify-center items-center text-base overflow-hidden text-center w-[20px] h-[20px] rounded-full bg-black text-white">
                2
              </p>

              <FavoriteBorderIcon className="text-3xl" />
            </div>
          </div>

          <button className="bg-black text-white px-4 py-4 text-xl rounded-xl w-full mt-5">
            <Link href="/signin"> Sign In</Link>
          </button>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-5 justify-start items-center">
            <a href="https://facebook.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={25}
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={25}
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width={25}
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
