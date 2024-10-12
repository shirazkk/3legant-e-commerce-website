import Link from "next/link";
import FacebookIcon from "./facbookicon";
import InstagramIcon from "./instagramicon";
import YoutubeIcon from "./youtubeicon"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="sm:h-[400px] h-auto flex justify-center  items-center bg-black">
      <div className="w-[90%] xl:w-[75%] h-full flex gap-24  justify-center items-center flex-col">
        <div className="flex gap-4 mt-10 justify-between flex-col sm:flex-col md:flex-row  items-center w-full">
          <div className="flex gap-2 sm:gap-10 md:gap-2 lg:gap-10 items-center  sm:flex-row flex-col justify-center">
            <Image
              layout="intrinsic"
              width={100}
              height={100}
              id="white-logo"
              className="backdrop-filter-none"
              src="/assists/3legant..png"
              alt="logo"
            />
            <p className="text-customGrayBlue  sm:rotate-0 rotate-90 text-2xl h-fit">|</p>
            <p className="text-gray-300">Gift & Decoration Store</p>
          </div>

          <div>
            <div className=" mt-9 sm:mt-0">
              <ul className="flex justify-center flex-col  sm:flex-row  gap-9 sm:gap-0 items-center">
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
                  <Link href="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
          

         
        
        <div className="flex justify-between  md:gap-0 gap-8  sm:flex-col md:flex-row flex-col-reverse items-center w-full">
          <div className="flex w-full sm:flex-col md:flex-row md:gap-0 gap-8 flex-col-reverse sm:justify-normal sm:items-stretch justify-center items-center">
            <p className="text-gray-300 text-center ">
              {" "} 
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className=" flex items-center justify-center md:justify-between" >
            <li className="px-5   text-white active:text-black hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="px-5 text-white  active:text-black hover:text-blue-600 cursor-pointer">
              Terms of Use
            </li>
            </div>
          </div>
          {/* social-icons */}
          <div className="sm:w-40 w-[80%] flex gap-7 justify-center sm:justify-end">
            <InstagramIcon />
            <FacebookIcon />
            <YoutubeIcon />
          </div>
         
        </div>
           
        
          
      </div>
    </footer>
  );
}
