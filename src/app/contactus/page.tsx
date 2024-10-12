import Navbar from "../components/navbar";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Link from "next/link";
import AboutUs from "../components/aboutus";
import InfoSection from "../components/info";
import GetInTouch from "../components/getintouch";
import ValuesSection from "../components/valuessection";
import Footer from "../components/footer";

export default function ContactUs() {
  return (
    <div>
        <Navbar/>
        <div className="w-auto h-full flex justify-center items-center flex-col">
        <header className="w-full h-auto flex justify-center">
            <div className=" w-[81%]">
        <div className="p-2 flex items-center gap-4">
              <li className="overflow-hidden text-gray-500  active:text-black font-[500] hover:text-blue-600">
                <Link className="p-1 " href="/">Home</Link>
              <ArrowForwardIosOutlinedIcon className="w-3 "/>
              </li>
              <li className=" text-black active:text-gray-500 font-semibold mb-0.8 hover:text-blue-600">
                <Link  href="/shop">Contact Us</Link>
              </li>
            </div>
            <div className="h-auto w-full lg:w-[95%] xl:w-[90%] 2xl:w-[80%] mt-5 ">
                <h1 className=" font-semibold 2xl:text-6xl  lg:text-5xl text-4xl p-4">We believe in sustainable <br /> decor. We’re passionate about <br /> life at home.</h1>
                <p className="p-4 mt-3  text-base sm:text-lg lg:text-xl">Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which  can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present</p>
            </div>
            </div>
        </header>
        <AboutUs/>
        <div className=" w-[90%] h-auto mt-10">
            <h1 className="text-5xl sm:text-6xl font-semibold text-center p-5">Contact Us</h1>
        <InfoSection/>
        </div>
        </div>
        <GetInTouch/>
        <div className="bg-gray-100 w-full mt-20">
        <ValuesSection />
        </div>
        <Footer/>
      
    </div>
  );
}
