import Image from "next/image";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default function Hero() {
  return (
    <div className="h-auto w-full">
      <div className=" flex justify-center items-center flex-col">
        {/* slider-image */}
        <div className="relative  w-[90%] flex justify-center items-center">
          <Image
            layout="intrinsic" 
            width={1920} 
            height={1080} 
            objectFit="cover"
            quality={100}
            src="/assists/homepage/hero-section.png"
            alt="Hero Slider"
          />
          <div className="hidden absolute px-8 md:flex items-center justify-between w-full">
            <ArrowForwardOutlinedIcon className="text-gray-600 rotate-180 bg-white bg-opacity-80 w-12 h-12 rounded-full flex justify-center items-center " />
            <ArrowForwardOutlinedIcon className="text-gray-600 bg-white bg-opacity-80 w-12 h-12 rounded-full flex justify-center items-center" />
          </div>
          {/* Navigation dots */}
          <div className="hidden gap-4 absolute md:flex items-center justify-center bottom-6">
            <div className="bg-white w-[40px] h-[10px] rounded-lg"></div>
            <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
            <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
          </div>
        </div>
      </div>
      {/* text */}

      <div className="flex justify-center items-center">
        <div className="w-[90%] sm:w-[90%] lg:w-[90%] md:w-[90%] flex flex-col sm:flex-col md:flex-row sm:justify-between sm:items-center sm:gap-5 mt-5">
          <div className="mb-4 sm:mb-0 w-full flex justify-center items-center">
            <h1 className=" text-4xl sm:text-6xl md:text-5xl md:w-[90%]   lg:text-7xl leading-[48px] sm:leading-[60px] lg:leading-[76px] tracking-tighter font-semibold overflow-hidden text-center sm:text-left">
              Simply Unique <span className="text-gray-500">/</span> <br />
              Simply Better <span className="text-gray-500">.</span>
            </h1>
          </div>
          <div className=" px-7 sm:text-left ">
            <span className="pr-2 text-base sm:text-lg md:text-xl font-semibold">
              3legant
            </span>
            <span className=" block md:inline text-gray-500 text-lg md:text-xl">
              is a gift & decorations store based in HCMC, <br />
              Vietnam. Est since 2019.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
