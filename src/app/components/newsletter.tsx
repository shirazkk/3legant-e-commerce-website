import Image from "next/image";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
export default function NewsLetter(){
    return(
        <section className="w-full h-auto">
            <div className="mt-16 relative flex justify-center items-center">
            <Image
            className="rounded-lg w-full max-w-screen-lg h-auto" // Use Tailwind CSS to apply width in rem
            layout="intrinsic" // Use intrinsic layout for custom size control
            width={1920} // Required by Next.js
            height={1080} // Required by Next.js
            objectFit="cover"
            quality={100}
            src="/assists/homepage/newsletter/newsimage.png"
            alt="Hero Slider" 
          /> 
             <div className="absolute w-[50%]">
                <div>
                  <h1 className="py-2 text-center font-bold text-4xl">Join Our Newsletter</h1>
                  <p className="text-center font-medium">Sign up for deals, new products and promotions</p>
                </div>
                <div className="mt-9">
                    <form className="gap-2 py-3 flex justify-center items-center  border-gray-300 border-b-2 ">

                     <EmailOutlinedIcon/>
                    <input className="text-lg focus:border-transparent bg-transparent w-[50%] text-customGrayBlue" type="text" name="name" placeholder="Email address" />
                    <button className="text-customGrayBlue">Signin</button>
                    </form>
                </div>
             </div>
            </div>
        </section>
    )
}