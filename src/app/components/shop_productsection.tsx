import SideBar from "./shop_sidebar";
import ToolBar from "./toolbar";
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Button from "./button";


export default function ShopProducts() {
  return (
    <section className="h-auto flex items-center justify-center">
      <div className=" w-full px-5 lg:px-0 lg:w-[90%] xl:w-[84%]  h-full flex gap-0 lg:gap-9">
        {/* sidebar */}
        <div className="h-full">
          <SideBar />
        </div>
        {/* grid-products */}
        <div className="w-full lg:w-[80%] h-auto mt-12 overflow-hidden">
          {/* toolbar */}
          <ToolBar/>
          {/* all-products */}
          

          <div className=" mt-12 h-auto w-full grid grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 xl:grid-cols-3">
            {/* products-box */}
          <div className="overflow-hidden">
            {/* image-box */}
            <div className="relative bg-[url('/assists/homepage/products/gray-sofa.png')]  bg-cover bg-center   h-[450px]">
            <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
           

            </div>
            {/* content box */}
            <div className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">Loveseat Sofa</p>
                 <p  className="font-semibold">$199.00 <del className="px-3 font-semibold text-gray-500" >$400.00</del> </p>
            </div>
          </div>
          {/* end */}
          <div className="overflow-hidden">
          <div className="relative bg-[url('/assists/shop_page/products/banner-img1.png')]  bg-cover bg-center  h-[450px]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>

          </div>
          <div  className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">Luxury Sofa</p>
                 <p  className="font-semibold">$299.00 <del className="px-3 font-semibold text-gray-500" >$500.00</del></p>
            </div>

          </div>
          {/* end */}
          <div className="overflow-hidden">
          <div className="relative bg-[url('/assists/homepage/products/beigetablelamp.png')]  bg-cover bg-center h-[450px]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">Table Lamp</p>
                 <p  className="font-semibold">$19.00</p>
            </div>
          </div>
          {/* end */}
          <div className="overflow-hidden">
          <div className="relative bg-[url('/assists/shop_page/products/Pasteimage-1.png')]  bg-cover bg-center  h-[450px]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">White Drawer Unit</p>
                 <p  className="font-semibold">$89.99</p>
            </div>
          </div>
          {/* end */}
          <div className="overflow-hidden">
          <div className="relative bg-[url('/assists/shop_page/products/Pasteimage-2.png')]  bg-cover bg-center  h-[450px]">
          <div className=" absolute w-full flex bottom-4 justify-center">

          <Button className="hello" text="Add To Cart"/>
          </div>
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
            <FavoriteBorderIcon className="absolute right-3 cursor-pointer hover:text-red-500  top-9 bg-white drop-shadow-sofa-down  rounded-full p-3 text-[3rem]"/>
          </div>
         
          <div  className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">Black Tray table</p>
                 <p  className="font-semibold">$19.99</p>
            </div>
          </div>
          {/* end */}
          <div className="overflow-hidden">
          <div className="relative bg-[url('/assists/shop_page/products/Pasteimage-3.png')]  bg-cover bg-center  h-[450px]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
            
          </div>
          <div  className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">Lamp</p>
                 <p  className="font-semibold">$39.00</p>
            </div>
          </div>
          {/* end */}
          <div className="overflow-hidden">
          <div className="relative bg-[url('/assists/shop_page/products/Pasteimage-4.png')]  bg-cover bg-center  h-[450px]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">Light Beige Pillow</p>
                 <p  className="font-semibold">$3.99</p>
            </div>
          </div>
          {/* end */}
          <div className="overflow-hidden">
          <div className="relative bg-[url('/assists/shop_page/products/tablelamp.png')]  bg-cover bg-center  h-[450px]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">Table </p>
                 <p  className="font-semibold">$39.99</p>
            </div>
          </div>
          {/* end */}

          <div className="overflow-hidden">
          <div className="relative bg-[url('/assists/shop_page/products/basket.png')]  bg-cover bg-center  h-[450px]">
          <div className="flex gap-3 absolute flex-col top-6 left-6">
            <div className=" bg-white text-black px-5 py-1 font-semibold text-lg rounded-md">New</div>
            <div className=" bg-green-500 text-white px-5 py-1 font-semibold text-lg rounded-md">-50%</div>
            </div>
          </div>
          <div  className="my-4">
                <p> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> </p>
                 <p className="font-semibold text-lg">Bamboo Basket</p>
                 <p  className="font-semibold">$9.99</p>
            </div>
          </div>
          {/* end */}
          
        </div>
        <div className="w-full  flex justify-center items-center mt-20">
            <button className="hover:text-gray-700  w-[40%] sm:w-[30%] md:w-[20%] lg:w-[20%] xl:w-[15%] border-2 bg-transparent py-2 rounded-lg text-xl text-black">Show more</button>
        </div>
        </div>
      </div>
    </section>
  );
}


