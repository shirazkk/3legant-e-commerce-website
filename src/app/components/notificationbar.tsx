import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
export default function NotificationBar() {
  return (
    <div className="flex  items-center justify-center p-1 bg-gray-100">
      {/* center-text+icons */}

      <div className="flex my-0 mx-auto gap-1">
        <img className="px-2" src="/assists/homepage/ticket-vector.png" alt="" />
        <p className="font-semibold">30% off storewide — Limited time!</p>
        <div className="underline"></div>
        <div className="hidden sm:flex text-blue-600 underline  underline-offset-4">
          <Link  href="#">Shop Now</Link>
          <ArrowForwardIcon />
         
        </div>
        </div>
        <div className="r">
          <CloseIcon className="text-black"/>
        </div>
      </div>
  );
}
