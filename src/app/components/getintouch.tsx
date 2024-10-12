"use client";
import { useState, useEffect } from "react";

export default function GetInTouch() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure the map is only rendered on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] gap-5">

        {/* Left: Form */}
        <div className="w-full md:w-[70%]">
          <form className="w-full">
            {/* Full Name */}
            <label htmlFor="fullName" className="font-semibold text-customGrayBlue text-lg md:text-xl">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Your Name"
              className="border-2 p-2 w-full my-3 rounded-md placeholder:pl-2 placeholder:text-base md:placeholder:text-lg"
            />
            
            {/* Email Address */}
            <label htmlFor="email" className="font-semibold text-customGrayBlue text-lg md:text-xl">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="border-2 p-2 w-full my-3 rounded-md placeholder:pl-2 placeholder:text-base md:placeholder:text-lg"
            />
            
            {/* Message */}
            <label htmlFor="message" className="font-semibold text-customGrayBlue text-lg md:text-xl">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              className="border-2 p-2 w-full h-[150px] sm:h-[180px] md:h-[200px] mt-3 rounded-md placeholder:pl-2 placeholder:text-base md:placeholder:text-lg"
            />
            
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white p-3 w-[60%] sm:w-[35%] md:w-[40%] lg:w-[40%] rounded-md shadow-lg mt-5"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-[70%] flex justify-center mx-auto relative">
        
          {!isLoaded && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
              <p>Loading map...</p>
            </div>
          )}
          
          {/* Google Map iframe */}
          {isClient && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4818990439977!2d144.961495!3d-37.8165365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b0b1023485%3A0x5045675218ce6e0!2sMelbourne!5e0!3m2!1sen!2sau!4v1616529072277!5m2!1sen!2sau"
              width="100%"
              height="450"
              className="shadow-lg"
              onLoad={() => setIsLoaded(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
