import React from "react";
import banner from "../assets/Baner.jpg";
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment, MdLocalOffer } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-137.5 flex justify-center items-center py-12 sm:py-0 dark:text-blue-200  bg-gray-100 dark:bg-gray-900 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div>
            <div>
              <img
                src={banner}
                alt=""
                className="max-w-100 h-87.5 w-full mx-auto object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
    <h1 className="text-3xl sm:text-4xl dark:text-amber-100 font-bold">
      Winter Sale upto 50% Off
    </h1>
    <p className="text-sm text-gray-500 tracking-wide leading-5">
      Shop the latest trends with amazing discounts across all categories.
    </p>

    <div className="flex flex-col gap-4" >
        <div className="flex items-center gap-4" >
            <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 "   />
            <p>Quality Products</p>

        </div>
        <div className="flex items-center gap-4">
            <TbTruckDelivery className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
            <p>Fast Delivery</p>
        </div>
      
        <div className="flex items-center gap-4" >
            <MdPayment className="text-4xl h-12  w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 " />
            <p>Easy Payment Method</p>
        </div>
        <div className="flex items-center gap-4" >
            <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
            <p>Get Offers</p>
        </div>
        
    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
