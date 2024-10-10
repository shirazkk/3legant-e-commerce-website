import Image from "next/image";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Link from "next/link";
export default function ShopHeroSection() {
  return (
    <div className="h-auto w-auto">
      <div className="flex justify-center items-center">
        {/* slider-image */}
        <div className="relative w-[90%] max-[1200px]: flex justify-center items-center">
          <Image
            className=" w-[1320px] h-auto" // Use Tailwind CSS to apply width in rem
            layout="intrinsic" // Use intrinsic layout for custom size control
            width={1920} // Required by Next.js
            height={1080} // Required by Next.js
            objectFit="cover"
            quality={100}
            src="/assists/shop_page/shop-banner.png"
            alt="Hero Slider"
          />
          <div className=" absolute flex justify-center items-center flex-col gap-0">
            <div className="p-2 flex justify-center items-center gap-4">
              <li className="overflow-hidden text-gray-500  active:text-black font-[500] hover:text-blue-600">
                <Link className="p-1 " href="/">Home</Link>
              <ArrowForwardIosOutlinedIcon className="w-3 "/>
              </li>
              <li className=" text-black active:text-gray-500 font-semibold mb-0.8 hover:text-blue-600">
                <Link href="/shop">Shop</Link>
              </li>
            </div>
            <h1 className="font-semibold text-5xl p-4">Shop Page</h1>
            <p className=" text-lg font-[500] p-2">Let’s design the place you always imagined.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
