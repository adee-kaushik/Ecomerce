import React from "react";
import { useState, useEffect } from "react";
import Aditya from "../assets/Aditya.jpg";
import sneha from "../assets/sneha.jpg";
import Ravi from "../assets/Ravi.jpg";
import Priya from "../assets/Priya.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Aditya mishra",
    text: "Amazing quality Products and Super fast Delivery. Highly Recommend this Store!!",
    img: Aditya,
  },
  {
    id: 2,
    name: "Priya Verma",
    text: "Great customer service and the prices are very reasonable. Will shop again.",
    img: Priya,
  },
  {
    id: 3,
    name: "Ravi Singh",
    text: "Loved the packaging and product quality. Exactly as shown on the website.",
    img: Ravi,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    text: "Best online shopping experience I've had in a while. Smooth and reliable.",
    img: sneha,
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;

  const nextTestimonials = () => {
    setStartIndex((prev) => (prev + 1) % TestimonialData.length);
  };

  return (
    <div className="py-10  dark:bg-gray-700 bg-primary/10 ">
      <div className="container">
        {/* Header */}
        <div className="text-center dark:text-amber-100 mb-10 max-w-150 mx-auto ">
          <p className="text-2xl dark:text-primary">
            What Our Customers are saying...
          </p>
          <h1 className="text-4xl font-bold">Testimonials</h1>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gaps-6   ">
          {[0, 1, 2].map((offset) => {
            const data =
              TestimonialData[(startIndex + offset) % TestimonialData.length];
            return (
              <div
                key={data.id}
                className="flex flex-col ml-18 gap-4 shadow-lg py-8 px-5 w-70 rounded-xl dark:text-blue-200 text-gray-900  dark:bg-gray-800 bg-primary/10 "
              >
                <img
                  src={data.img}
                  alt=""
                  className="rounded-full w-20 h-20 mx-auto  "
                />
                <p className="text-[1em] dark:text-gray-300 text-gray-950 text-center">
                  {data.text}
                </p>
                <h1 className="text-xl font-bold text-center">{data.name}</h1>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 dark:text-blue-200 text-gray-900">
          <button onClick={nextTestimonials}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
