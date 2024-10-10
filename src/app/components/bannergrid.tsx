import LinksText from "./link";

export default function GridBanner() {
  return (
    <section className="flex justify-center mt-5 min-h-screen">
      <div className="w-[90%] h-auto flex justify-center">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 gap-x-5  sm:grid-cols-2  gap-y-5 w-full sm:gap-y-0 md:gap-y-2 lg:gap-y-3 xl:gap-y-4 2xl:gap-y-5 mt-10">
          
          {/* First image takes two rows on larger screens */}
          <div
            className="row-span-1 sm:row-span-2 relative bg-[url('/assists/homepage/banner-img1.png')] bg-no-repeat bg-center bg-cover rounded-lg w-full h-[250px] sm:h-[580px] md:h-[630px] sm:bg-cover lg:h-[720px] xl:h-[720px] 2xl:h-[820px] overflow-hidden"
          >
            <div className="absolute sm:p-5 flex flex-col justify-end p-0 ">
              <h1 className=" text-2xl  md:text-3xl lg:text-4xl font-semibold px-4 py-2 ">
                Living Room
              </h1>
              <div className="px-4">
                <LinksText texticon="Shop Now" />
              </div>
            </div>
          </div>

          {/* Second image */}
          <div
            className="relative bg-[url('/assists/homepage/banner-img2.png')] bg-center bg-cover rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[350px] 2xl:h-[400px]  bg-no-repeat  overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col justify-end p-5 ">
              <h1 className="text-2xl  md:text-3xl lg:text-4xl font-semibold px-4 py-2 ">
                Bedroom
              </h1>
              <div className="px-4">
                <LinksText texticon="Shop Now" />
              </div>
            </div>
          </div>

          {/* Third image */}
          <div
            className="relative bg-[url('/assists/homepage/banner-img3.png')] bg-center bg-cover rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[350px] 2xl:h-[400px]  bg-no-repeat overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col justify-end p-5 ">
              <h1 className="text-2xl  md:text-3xl lg:text-4xl font-semibold px-4 py-2">
                Kitchen
              </h1>
              <div className="px-4">
                <LinksText texticon="Shop Now" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
