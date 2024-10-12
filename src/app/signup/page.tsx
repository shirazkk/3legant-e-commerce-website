import Image from "next/image";
import Button from "../components/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-[40%] bg-gray-100 flex justify-center items-center relative">
        {/* Sofa Image */}
        <div className="relative  w-[18rem] sm:w-[23rem]  h-auto md:w-[25rem] lg:w-[33rem] overflow-hidden">
          <Image
            src="/assists/sign-up/sofa.png"
            alt="Sofa"
            width={1920}
            height={1080}
            objectFit="contain"
            className="drop-shadow-sofa-down"
          />
        </div>
        {/* Absolute Logo */}
        <div className="absolute top-5 md:top-10 text-center font-semibold">
          <Image
            src="/assists/3legant..png"
            alt="3legant Logo"
            width={120}
            height={60}
            priority
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="h-auto w-full md:w-[60%] flex justify-center items-center flex-col gap-3 px-8 sm:px-20 md:px-0">
        {/* Sign-up Box */}
        <div className="h-auto md:h-[620px] w-full md:w-[75%] flex justify-center items-start flex-col">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold py-4">Sign Up</h1>
            <p className="py-5 text-customGrayBlue">
              Already have an account?{" "}
              <Link className="text-green-400 hover:text-green-500" href="/signin">
                Sign In
              </Link>
            </p>
          </div>

          {/* Form Inputs */}
          <div className="flex justify-center items-center flex-col w-full">
            <input
              className="w-full py-3 md:py-5 border-b-2 focus:px-2 focus:rounded-md text-customGrayBlue"
              type="text"
              name="name"
              placeholder="Your name"
            />
            <input
              className="w-full py-3 md:py-5 border-b-2 focus:px-2 focus:rounded-md text-customGrayBlue"
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              className="w-full py-3 md:py-5 border-b-2 focus:px-2 focus:rounded-md text-customGrayBlue"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <div className="w-full flex justify-between items-center">
              <input
                className="w-full py-3 md:py-5 border-b-2 focus:px-2 focus:rounded-md text-customGrayBlue"
                type="password"
                name="password"
                placeholder="Password"
              />
              <div className="relative w-8 h-8 right-3 md:right-8 cursor-pointer">
                <Image
                  src="/assists/sign-up/eye.png"
                  alt="Toggle Password"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex gap-2 py-5 w-full">
              <input
                className="scale-150 mx-1 cursor-pointer"
                type="checkbox"
                name="checkbox"
              />
              <p className="text-customGrayBlue font-medium">
                I agree with{" "}
                <span className="font-bold text-black">Privacy Policy</span> and{" "}
                <span className="font-bold text-black">Terms of Use</span>
              </p>
            </div>
            {/* Sign Up Button */}
            <div className="w-full flex justify-center">
              <Button  text="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
