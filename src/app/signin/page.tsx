import Image from "next/image";
import Button from "../components/button";
import Link from "next/link"

export default function SignIn() {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-[40%] bg-gray-100 flex justify-center items-center relative h-[80%] md:h-auto overflow-hidden">
        {/* Left Section Image */}
        <div className="relative w-[18rem] h-auto md:h-auto md:w-[25rem] lg:w-[40rem] ">
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
            width={120} // Set appropriate dimensions for the logo
            height={60}
            priority
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="h-full w-full md:w-[60%] flex pt-0 md:pt-24 items-center flex-col gap-3 px-4  md:px-0">
        {/* Sign-in Box */}
        <div className="h-auto md:h-[620px] w-full md:w-[75%] flex justify-center items-start flex-col">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold py-4">Sign In</h1>
            <p className="py-5 text-customGrayBlue">
              Don’t have an account yet?{" "}
              <Link className="text-green-400 hover:text-green-500" href="/signup" >
                Sign Up
              </Link>
            </p>
          </div>

          {/* Form Inputs */}
          <div className="flex justify-center items-center flex-col w-full">
            <input
              className="w-full py-3 md:py-5 border-b-2 focus:px-2 focus:rounded-md text-customGrayBlue"
              type="text"
              name="username"
              placeholder="Your Username or email address"
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
            <div className="flex justify-between items-center w-full py-5">
              <div className="flex items-center gap-2">
                <input
                  className="scale-125 ml-2 cursor-pointer"
                  type="checkbox"
                  name="remember-me"
                />
                <p className="text-customGrayBlue font-medium">Remember me</p>
              </div>
              <p className="font-bold hover:text-gray-500 cursor-pointer">
                Forgot password?
              </p>
            </div>

            {/* Sign In Button */}
            <div className="w-full flex justify-center">
              <Button text="Sign In" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
