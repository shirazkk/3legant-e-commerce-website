import LinksText from "./link";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function ProductSection() {
  return (
    <section className="flex justify-center gap-32  h-screen">
      {/* product tittle */}
      <div className="w-[80%] mt-4 overflow-hidden">
        <div className="flex justify-between items-center w-full ">
          <h1 className="py-5 px-2 text-5xl font-semibold ">
            New <br /> Arrivals
          </h1>
          <div className="sm:block hidden">
          <LinksText  texticon="More Products" />
          </div>
        </div>
        {/* products */}
        <div className="w-full h-[70%] grid grid-cols-[repeat(6,minmax(300px,1fr))]  gap-6 overflow-x-auto custom-scrollbar">
            {/* products-box */}
          <div>
            {/* image-box */}
            <div className="relative bg-[url('/assists/homepage/products/gray-sofa.png')]  bg-cover bg-center  w-full h-[80%]">
            <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
      
            <FavoriteBorderIcon className="absolute right-3 cursor-pointer hover:text-red-500  top-9 bg-white drop-shadow-sofa-down  rounded-full p-3 text-[3rem]"/>
            
            </div>
            {/* content box */}
            <div className="my-2">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold">Loveseat Sofa</p>
                 <p  className="font-semibold">$199.00 <del className="px-3 font-semibold text-gray-500" >$400.00</del> </p>
            </div>
          </div>
          <div>
          <div className="relative bg-[url('/assists/homepage/products/tablelamp.png')]  bg-cover bg-center  w-full h-[80%]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>

          </div>
          <div  className="my-2">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold">Table Lamp</p>
                 <p  className="font-semibold">$24.99</p>
            </div>

          </div>
          <div>
          <div className="relative bg-[url('/assists/homepage/products/beigetablelamp.png')]  bg-cover bg-center  w-full h-[80%]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-2">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold">Beige Table Lamp</p>
                 <p  className="font-semibold">$24.99</p>
            </div>
          </div>
          <div>
          <div className="relative bg-[url('/assists/homepage/products/basket.png')]  bg-cover bg-center  w-full h-[80%]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-2">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold">Bamboo Basket</p>
                 <p  className="font-semibold">$24.99</p>
            </div>
          </div>
          <div>
          <div className="relative bg-[url('/assists/homepage/products/toasted.png')]  bg-cover bg-center  w-full h-[80%]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-2">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold">Toasted</p>
                 <p  className="font-semibold">$224.99</p>
            </div>
          </div>
          <div>
          <div className="relative bg-[url('/assists/homepage/products/gray-sofa.png')]  bg-cover bg-center  w-full h-[80%]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-2">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold">Loveseat Sofa</p>
                 <p  className="font-semibold">$199.00</p>
            </div>
          </div>
        </div>
          <div className="sm:hidden block mt-5">
          <LinksText  texticon="More Products" />
          </div>
      </div>
    </section>
  );
}
