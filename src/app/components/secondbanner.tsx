import Image from "next/image"
import LinksText from "./link";

export default function SecondBanner(){
    return(
        <section className="w-full h-[700px] mt-5">
         <div className="flex w-full  justify-center ">
            {/* left-image */}
            <div className=" w-[50%] h-full">
                <Image src="/assists/homepage/secondbanner.png" alt=""
                width={1920}
                height={1080}
                />
                </div> 
            {/* right-content */}
            <div className="bg-gray-200 w-[50%] flex justify-start items-center ">
                <div className="w-[520px] mx-16">
                <p className="text-blue-500  font-semibold py-2">SALE UP TO 35% OFF</p>
                 <h1 className="font-semibold text-4xl py-2">HUNDREDS of <br />
                 New lower prices!</h1>
                 <p className="py-2 font-medium text-[17px]">It’s more affordable than ever to give every room in your home a stylish makeover</p>

                 <LinksText texticon="Shop Now" style/>
                </div>
            </div>
         </div>
        </section>
    )
}