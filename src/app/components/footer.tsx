import Link from "next/link";
import FacebookIcon from "./facbookicon";
import InstagramIcon from "./instagramicon";
import YoutubeIcon from "./youtubeicon";

export default function Footer() {
  return (
    <footer className="h-[350px] flex justify-center items-center bg-black">
      <div className="w-[80%] h-[70%] flex gap-24 justify-center items-center flex-col">
        <div className="flex justify-between items-center w-[80%]">
          <div className="flex gap-10 items-center justify-center">
            <img
              id="white-logo"
              className="backdrop-filter-none"
              src="/assists/3legant..png"
              alt="logo"
            />
            <p className="text-gray-300 font-[10] text-2xl h-full">|</p>
            <p className="text-gray-300">Gift & Decoration Store</p>
          </div>

          <div>
            <div>
              <ul className="flex justify-center items-center">
                <li className="px-5 text-gray-300 active:text-stone-500 hover:text-blue-600">
                  <Link href="/">Home</Link>
                </li>
                <li className="px-5 text-gray-300 active:text-stone-500 hover:text-blue-600">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="px-5 text-gray-300  active:text-stone-500 hover:text-blue-600">
                  <Link href="">Product</Link>
                </li>
                <li className="px-5 text-gray-300 active:text-stone-500 hover:text-blue-600">
                  <Link href="/contactus">Blog</Link>
                </li>
                <li className=" text-gray-300  active:text-stone-500 hover:text-blue-600">
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-[80%]">
          <div className="flex w-[70%]">
            <p className="text-gray-300">
              {" "}
              Copyright © 2023 3legant. All rights reserved
            </p>
            <li className="px-5  text-white active:text-black hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="px-5 text-white  active:text-black hover:text-blue-600 cursor-pointer">
              Terms of Use
            </li>
          </div>
          {/* social-icons */}
          <div className="w-[30%] flex gap-7 justify-end">
            <InstagramIcon />
            <FacebookIcon />
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
