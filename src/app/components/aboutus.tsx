import Image from "next/image";
import LinksText from "./link";

export default function AboutUs() {
  return (
    <section className="w-full h-auto flex justify-center mt-5">
      <div className="flex w-[90%]  lg:w-[80%] h-auto justify-center flex-col lg:flex-row  gap-0 sm:gap-1 md:gap-2 lg:gap-4">
        {/* left-image */}
        <div className="w-full sm:w-[80%] md:w-[90%] lg:w-[50%]  h-full mx-auto lg:mx-0 lg:h-full overflow-hidden">
          <Image
           layout="intrinsic"
            src="/assists/homepage/secondbanner.png"
            alt="About Us Image"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain lg:object-cover "
          />
        </div>
        {/* right-content */}
        <div className="bg-gray-200 w-full sm:w-[80%] md:w-[90%] lg:w-[50%] flex justify-start items-center h-full p-6 lg:p-10 mx-auto overflow-hidden">
          <div className="w-full max-w-lg lg:max-w-none overflow-hidden">
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl py-4">
              About Us
            </h1>
            <p className="py-2 font-medium text-base sm:text-lg lg:text-xl leading-relaxed">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est.
              since 2019. <br />
              Our customer service is always prepared to support you 24/7.
            </p>

            <LinksText texticon="Shop Now" style />
          </div>
        </div>
      </div>
    </section>
  );
}
