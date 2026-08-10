import React from 'react'
import { useState, useEffect } from 'react'

const ImageList = [
  {
    id: 1,
    title: "Upto 50% off on all Men's Wear",
    description: "Best deals on quality clothing this season.",
  },
  {
    id: 2,
    title: "30% off on all Women's Wear",
    description: "Trendy styles at unbeatable prices.",
  },
  {
    id: 3,
    title: "70% off on all Products Sale",
    description: "Limited time mega sale, don't miss out.",
  },
];

const Hero = () => {

    const [currentSlide, setCurrentSlide]= useState(0)

    const nextSlide=()=>{
        setCurrentSlide((prev)=> (prev === ImageList.length - 1 ? 0 : prev + 1));
    }

    const prevSlide =  ()=> {
        setCurrentSlide((prev)=> (prev===0 ? ImageList.length - 1 : prev - 1))
    }

    useEffect(()=>{
        const timer = setInterval(()=> {
            nextSlide();
        },4000)
        return () => clearInterval(timer)
    }, [currentSlide])

  return (
    <div className="bg-gray-100 dark:bg-gray-950 dark:text-amber-100 duration-200 min-h-125 flex items-center" >
    <div className='container ml-5 ' >
        <h1 className= "text-4xl sm:text-6xl font-bold" > 
            {ImageList[currentSlide].title}
        </h1>
        <p className='text-sm mt-4' >
             {ImageList[currentSlide].description}
        </p>
            <div className='flex gap-4 mt-6' >
                <button onClick={prevSlide} className='bg-gray-700 text-white px-4 py-2 rounded-full' >Prev</button>
                <button  onClick={nextSlide} className='bg-gray-700 text-white px-4 py-2 rounded-full'  >Next</button>

            </div>

    </div>
      
    </div>
  )
}

export default Hero
