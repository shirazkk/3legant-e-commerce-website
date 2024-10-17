import NotificationBar from "../components/notificationbar";
import Navbar from "../components/navbar";
import Link from "next/link";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "../components/button";
import NewsLetter from "../components/newsletter";
import Footer from "../components/footer";
import CustomerReviews from "../components/reviews";

export default function Products() {
  return (
    <main>
      <NotificationBar />
      <Navbar />
      <hr className="mt-1" />

      <div className="flex pt-3 pl-3 ml-0 sm:ml-16 items-center">
        <ul className="flex justify-center items-center">
          <li className="px-1 sm:px-2 text-customGrayBlue active:text-black hover:text-blue-600">
            <Link href="/">Home</Link>
            <ArrowForwardIosOutlinedIcon className="w-3 ml-2" />
          </li>
          <li className="px-1 sm:px-2 text-customGrayBlue active:text-black hover:text-blue-600 flex items-center">
            <Link href="/shop">Shop</Link>
            <ArrowForwardIosOutlinedIcon className="w-3 ml-2" />
          </li>
          <li className="px-1 sm:px-2 text-customGrayBlue active:text-black hover:text-blue-600 flex items-center">
            <Link href="#">Living Room</Link>
            <ArrowForwardIosOutlinedIcon className="ml-2 w-3" />
          </li>
          <li className="px-1 sm:px-2 text-black active:text-customGrayBlue hover:text-blue-600 ">
            <Link href="/products">Product</Link>
          </li>
        </ul>
      </div>

      <section className="flex justify-center  items-center h-auto ">
        <div className="w-[90%] h-full mt-3 flex flex-col items-center sm:items-stretch sm:flex-row justify-between  gap-10">
          {/* left-section */}
          <div className="relative h-full   flex flex-col">
            <Image
              src="/assists/product_page/black_table.png"
              alt="3legant Logo"
              width={520}
              height={520}
              priority
            />
            <div className=" absolute px-8 sm:px-3  flex items-center top-[50%] sm:top-[40%] justify-between w-full">
              <ArrowForwardOutlinedIcon className="text-customGrayBlue cursor-pointer rotate-180 bg-white  w-10 h-10 p-2 rounded-full flex justify-center items-center " />
              <ArrowForwardOutlinedIcon className="text-black p-2 cursor-pointer bg-white  w-10 h-10 rounded-full flex justify-center items-center" />
            </div>
            <div className="hidden sm:flex gap-7 mt-4 justify-center">
              <Image
                src="/assists/product_page/slider-area/one.png"
                alt="3legant Logo"
                width={135}
                height={135}
                priority
              />
              <Image
                src="/assists/product_page/slider-area/two.png"
                alt="3legant Logo"
                width={135}
                height={135}
                priority
              />
              <Image
                src="/assists/product_page/slider-area/three.png"
                alt="3legant Logo"
                width={135}
                height={135}
                priority
              />
            </div>
          </div>

          {/* right-section */}
          <div className="w-full sm:w-[80%] h-auto">
            <div className="flex items-center gap-3">
              <p className="text-xs">
                <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
              </p>
              <p className="text-center mt-1 p-2">11 Reviews</p>
            </div>
            <div className="py-3">
              <h1 className="text-5xl py-2">Tray Table</h1>
              <p className="text-lg text-customGrayBlue  py-2">
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>
              <h2 className="py-2 text-2xl font-semibold ">
                $199.00{" "}
                <span className="text-customGrayBlue text-xl px-2">
                  $400.00
                </span>
              </h2>
            </div>
            <hr />
            <div className="mt-6">
              <p className="text-lg">offer expires in:</p>
              <div className="flex gap-4 mt-3">
                <div>
                  <h3 className="font-semibold text-2xl w-16 h-16 bg-gray-200 flex justify-center items-center">
                    02
                  </h3>
                  <p className="text-center">Days</p>
                </div>

                <div>
                  <h3 className="font-semibold text-2xl w-16 h-16 bg-gray-200 flex justify-center items-center">
                    12
                  </h3>
                  <p className="text-center">Hours</p>
                </div>

                <div>
                  <h3 className="font-semibold text-2xl w-16 h-16 bg-gray-200 flex justify-center items-center">
                    45
                  </h3>
                  <p className="text-center">Minutes</p>
                </div>

                <div>
                  <h3 className="font-semibold text-2xl w-16 h-16 bg-gray-200 flex justify-center items-center">
                    05
                  </h3>
                  <p className="text-center">Seconds</p>
                </div>
              </div>
            </div>
            <hr className="mt-5" />
            <div>
              <p className="text-gray-600 text-lg py-1">Measurements</p>
              <p className="text-xl font-medium py-1">17 1/2x20 5/8&nbsp;&quot;</p>
              <p className="text-customGrayBlue py-4">
                Choose Color <ArrowForwardIosOutlinedIcon className="w-4" />
              </p>
              <p className="text-lg py-1">Black</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/assists/product_page/Single/one.png"
                alt="3legant Logo"
                width={80}
                height={80}
              />

              <Image
                src="/assists/product_page/Single/two.png"
                alt="3legant Logo"
                width={80}
                height={80}
              />

              <Image
                src="/assists/product_page/Single/three.png"
                alt="3legant Logo"
                width={80}
                height={80}
              />

              <Image
                src="/assists/product_page/Single/four.png"
                alt="3legant Logo"
                width={80}
                height={80}
              />
            </div>

            <div className="flex gap-4 mt-6">
              <div className="flex w-full sm:w-[15%] h-12 rounded-md bg-gray-100 justify-center items-center gap-8">
                <p className="text-2xl ">-</p>
                <p className="text-lg font-semibold overflow-hidden">1</p>
                <p className="text-2xl ">+</p>
              </div>
              <div className="w-full sm:w-[40%] h-12  border-2 border-black rounded-md gap-2 flex justify-center items-center">
                <FavoriteBorderIcon />
                <p className="text-xl font-semibold ">Wishlist</p>
              </div>
            </div>
            <div className="flex justify-center sm:block  w-full sm:w-[70%] mt-5">
              <Button text="Add To Cart" />
            </div>
            <hr className="mt-5" />
            <div className="flex gap-12 mt-5">
              <div className="py-2">
                <p className="py-1 text-customGrayBlue">SKU</p>
                <p className="py-1 text-customGrayBlue">CATEGORY</p>
              </div>
              <div className="py-2">
                <p className="py-1">117</p>
                <p className="py-1">Living Room, Bedroom</p>
              </div>
            </div>
          </div>

          {/* right-section-end */}
        </div>
      </section>

      <div className="w-full h-auto flex justify-center items-center mt-10">
        <div className="w-[85%] h-full ">
          <div className="w-full h-auto ">
            {/* for big devices */}
            <ul className="hidden sm:flex   gap-16">
              <li className="text-customGrayBlue ">Additional Info</li>

              <li className="text-customGrayBlue ">Questions</li>

              <li className="sm:border-b-2 border-black">
                Reviews <span className="sm:hidden">(11)</span>
              </li>
            </ul>

            {/* for small devices */}
            <ul className="sm:hidden flex   flex-col gap-2 ">
              <div className="flex justify-between">

              <li className="text-customGrayBlue ">
                Additional Info
              </li>
                <ArrowForwardIosOutlinedIcon className=" sm:hidden  rotate-90 w-4" />
              </div>

              <hr className="border-black sm:hidden" />
              <div className="flex justify-between">
              <li className="text-customGrayBlue ">
                Questions
              </li>
                <ArrowForwardIosOutlinedIcon className=" sm:hidden rotate-90 w-4" />
              </div>
              
              <hr className="border-black sm:hidden" />
              <div className="flex justify-between">

              <li className="sm:border-b-2 border-black">
                Reviews <span className="sm:hidden">(11)</span>
              </li>
                <ArrowForwardIosOutlinedIcon className=" sm:hidden  -rotate-90 w-4" />
              </div>
              <hr className="border-black sm:hidden" />
            </ul>

          </div>
          <hr />

          <div className="w-full h-auto mt-10">
            <h1 className="font-semibold text-2xl py-3">Customer Reviews</h1>
            <div className="flex items-center gap-3">
              <p className="text-[1px]">
                <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
              </p>
              <p className="text-center mt-1 p-2">11 Reviews</p>
            </div>
            <p className="font-semibold ml-56">Tray Table</p>
          </div>
            {/* for big-devices */}
          <div className="w-full relative hidden sm:block">
            <div className="rounded-3xl w-[250px] custom-shadow  bg-white  py-2 px-12  absolute bottom-16  right-28">
              ❤️ 🙌 👍 😊 🤣 😡
            </div>
            <div className="border-2 rounded-2xl w-full h-20 mt-6 flex  justify-end items-center ">
              <button className="bg-black text-white py-2 px-8 mr-3 rounded-3xl">
                Write Review
              </button>
            </div>
          </div>
          {/* for small devices */}

          <div className="w-full flex justify-between items-center px-5 sm:hidden mt-6 border-2 rounded-2xl  h-16 ">
            <p className="text-customGrayBlue">Share your thoughts</p>
            
              <button className="bg-black text-white  p-1 rounded-full">
                <ArrowForwardOutlinedIcon/>
              </button>
            
          </div>

          <div className="w-full h-auto mt-8">
            <div className="flex sm:flex-row flex-col justify-between gap-4 sm:gap-0">
              <h1 className="font-semibold text-3xl sm:text-2xl py-2">11 Reviews</h1>
              <div className="border-2 py-3 flex gap-40 px-3 rounded-xl items-center justify-between">
                <p className="font-semibold ">Newest</p>
                <div>
                  <ArrowForwardIosOutlinedIcon className="rotate-90 w-3" />
                </div>
              </div>
            </div>

           <CustomerReviews/>

          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </main>
  );
}
