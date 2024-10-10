import Image from "next/image";
import LinksText from "./link";

export default function AboutUs() {
  return (
    <section className="w-full h-auto flex justify-center mt-5">
      <div className="flex w-[80%] h-auto justify-center ">
        {/* left-image */}
        <div className=" w-[50%] h-full">
          <Image
            src="/assists/homepage/secondbanner.png"
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        {/* right-content */}
        <div className="bg-gray-200 w-[50%] flex justify-start items-center ">
          <div className="w-[520px] mx-16">
            <h1 className="font-semibold text-5xl py-4">About Us</h1>
            <p className="py-1 font-medium text-[18px]">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. <br />
              Our customer service is always prepared to support you 24/7
            </p>

            <LinksText texticon="Shop Now" style />
          </div>
        </div>
      </div>
    </section>
  );
}
