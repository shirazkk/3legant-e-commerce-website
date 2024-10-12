import Image from "next/image";
import LinksText from "./link";

export default function SecondBanner() {
  return (
    <section className="mb-8 w-full h-auto mt-5">
      <div className="flex w-full flex-col md:flex-row items-center justify-center">
        {/* Left image */}
        <div className="w-full md:w-[50%] h-auto md:h-[500px] flex-grow">
          <Image
            src="/assists/homepage/secondbanner.png"
            alt="Sale banner"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority 
          />
        </div>
        {/* Right content */}
        <div className="bg-gray-200 h-auto md:h-[500px] w-full md:w-[50%] flex justify-start items-center p-6 flex-grow">
          <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
            <p className="text-blue-500 font-semibold py-2 md:text-left">
              SALE UP TO 35% OFF
            </p>
            <h1 className="font-semibold text-2xl md:text-4xl py-2 md:text-left">
              HUNDREDS of <br /> New lower prices!
            </h1>
            <p className="py-2 font-medium text-sm md:text-base lg:text-lg md:text-left w-full">
              It’s more affordable than ever to give every room in your home a stylish makeover.
            </p>
            <div className="flex justify-start">
              <LinksText texticon="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
