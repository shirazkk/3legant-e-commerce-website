import CategoriesLinks from "./categories";

export default function SideBar() {
  return (
    <div className="lg:flex justify-start h-auto w-full hidden">
      <div className="mt-12 flex-col flex gap-10 w-64">
        {/* header */}
        <div className="flex gap-3  items-center">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4H4M4 4C4 5.65685 5.34315 7 7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4ZM1 14H7M16 14H19M16 14C16 15.6569 14.6569 17 13 17C11.3431 17 10 15.6569 10 14C10 12.3431 11.3431 11 13 11C14.6569 11 16 12.3431 16 14ZM13 4H19"
              stroke="#141718"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <h3 className="text-2xl p-2 font-semibold">Filter</h3>
        </div>
        {/* categories-section */}
        <div className="flex flex-col gap-3">
            
            {/* heading */}
            <div>
            <h3 className="text-2xl py-2 font-semibold">CATEGORIES</h3>
            </div>
               {/* content */}
            <div>
                <CategoriesLinks product="All Rooms"/>
                <CategoriesLinks product="Living Room"/>
                <CategoriesLinks product="Bedroom"/>
                <CategoriesLinks product="Kitchen"/>
                <CategoriesLinks product="Bathroom"/>
                <CategoriesLinks product="Dinning"/>
                <CategoriesLinks product="Outdoor"/>
            </div>

        </div>

        {/* price */}
        <div className="flex gap-3 flex-col">
            {/* heading */}
            <div>
              <h3 className="text-2xl py-2 font-semibold">PRICE</h3>
            </div>
             {/* content */}
            <div className="flex gap-3 flex-col">
                <div className="flex justify-between"  >
                    <p className="text-customGrayBlue font-semibold">All Price</p>
                    <input type="checkbox" className="accent-black w-6 h-6 cursor-pointer" />
                </div>
                <div className="flex justify-between" >
                    <p className="text-customGrayBlue font-semibold"> $0.00 - 99.99</p>
                    <input type="checkbox" className="accent-black w-6 h-6 cursor-pointer" />
                </div>
                <div className="flex justify-between" >
                    <p className="text-customGrayBlue font-semibold">$100.00 - 199.99</p>
                    <input type="checkbox" className="accent-black  w-6 h-6 cursor-pointer" />
                </div>
                <div className="flex justify-between" >
                    <p className="text-customGrayBlue font-semibold"> $200.00 - 299.99</p>
                    <input type="checkbox" className="accent-black w-6 h-6 cursor-pointer" />
                </div>
                <div className="flex justify-between" >
                    <p className="text-customGrayBlue font-semibold">$300.00 - 399.99</p>
                    <input type="checkbox" className="accent-black w-6 h-6 cursor-pointer" />
                </div>
                <div className="flex justify-between" > 
                    <p className="text-customGrayBlue font-semibold">$400.00+</p>
                    <input type="checkbox" className="accent-black w-6 h-6 cursor-pointer" />
                </div>
               
            </div>
        </div>
      </div>
    </div>
  );
}
