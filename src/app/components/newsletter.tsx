import Image from "next/image";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function NewsLetter() {
  return (
    <section className="w-full h-auto">
      <div className="mt-16 relative flex justify-center items-center">
        {/* Image for large screens */}
        <div className="hidden md:block w-full h-auto">
          <Image
            className="rounded-lg w-full max-w-screen-lg h-auto"
            layout="intrinsic"
            width={1920}
            height={1080}
            objectFit="cover"
            quality={100}
            src="/assists/homepage/newsletter/newsimage.png"
            alt="Hero Slider"
          />
        </div>
        {/* Gray background for smaller screens */}
        <div className="block md:hidden bg-gray-100 w-full h-[500px]"></div>
        
        {/* Overlay content */}
        <div className="absolute w-[90%] px-4 md:w-[50%]">
          <div className="text-center">
            <h1 className="py-3 font-bold text-5xl md:text-4xl">Join Our Newsletter</h1>
            <p className="font-medium text-lg md:text-base">
              Sign up for deals, new products and promotions
            </p>
          </div>
          {/* Form */}
          <div className="mt-9 w-full flex justify-center ">
            <form className="w-full sm:w-[80%] gap-2 py-3 flex flex-row md:justify-between justify-center items-center border-gray-300 border-b-2">
              <div className="flex items-center gap-2 w-full  md:w-[80%] ">
                <EmailOutlinedIcon className="mr-9"/>
                <input
                  className="text-lg focus:border-transparent bg-transparent w-full text-customGrayBlue"
                  type="text"
                  name="name"
                  placeholder="Email address"
                />
              </div>
              <button className="hover:text-black text-right sm:w-[20%] text-customGrayBlue w-[30%]">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
