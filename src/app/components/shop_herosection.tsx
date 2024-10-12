import Image from "next/image";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Link from "next/link";

export default function ShopHeroSection() {
  return (
    <div className="h-[420px] md:h-[550px] w-auto relative">
      <div className="flex justify-center items-center h-full">
        {/* Slider Image */}
        <div className="relative w-[90%] h-full flex justify-center items-center">
          <Image
            className="object-cover" // This ensures the image covers the area correctly
            layout="fill" // Use fill to ensure it covers the parent div fully
            quality={100}
            src="/assists/shop_page/shop-banner.png" // Make sure this path is correct
            alt="Hero Slider"
          />
          {/* Overlay Content */}
          <div className="absolute flex justify-center items-center flex-col gap-0 text-center w-full top-0 left-0 right-0 bottom-0">
            {/* Breadcrumb */}
            <div className="p-2 flex justify-center items-center gap-4">
              <li className="overflow-hidden text-gray-600 active:text-black font-[600] hover:text-blue-600">
                <Link className="p-1" href="/">Home</Link>
                <ArrowForwardIosOutlinedIcon className="w-3" />
              </li>
              <li className="text-black active:text-gray-500 font-semibold mb-0.8 hover:text-blue-600">
                <Link href="/shop">Shop</Link>
              </li>
            </div>

            {/* Page Title */}
            <h1 className="font-semibold text-5xl  lg:text-6xl text-black p-4">
              Shop Page
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black p-2">
              Let’s design the place you always imagined.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
