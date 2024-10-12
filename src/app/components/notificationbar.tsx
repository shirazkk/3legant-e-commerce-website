"use client";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image"
import { useState } from "react";

export default function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  const closeNotification = () => {
    setIsVisible(false); 
  };

  return (
    <>
      {isVisible && (
        <div
          className={`flex items-center justify-center p-1 bg-gray-100 transition-transform duration-1000 ease-in-out transform ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* center-text+icons */}
          <div className="flex my-0 mx-auto gap-1">
            <Image
              className="px-2"
              src="/assists/homepage/ticket-vector.png"
              alt="ticket"
              layout="intrinsic"
              width={100}
              height={100}
            />
            <p className="font-semibold">30% off storewide — Limited time!</p>
            <div className="hidden sm:flex text-blue-600 underline underline-offset-4">
              <Link href="#">Shop Now</Link>
              <ArrowForwardIcon />
            </div>
          </div>
          <div>
            <CloseIcon className="text-black cursor-pointer" onClick={closeNotification} />
          </div>
        </div>
      )}
    </>
  );
}
