import React from 'react'
import Img1 from '../assets/Img1.jpg'
import Img2 from '../assets/Img2.jpg'
import Img3 from '../assets/Img3.jpg'
import Img4 from '../assets/Img4.jpg'
import Img5 from '../assets/Img5.jpg'
import {FaStar} from 'react-icons/fa'


const ProductsData = [
    { id:1, img: Img1, title: "Product One", ratings: 4.5 },
    { id:2, img: Img2, title: "Product Two", ratings: 4.8 },
    { id:3, img: Img3, title: "Product three", ratings: 4.2 },
    { id:4, img: Img4, title: "Product four", ratings: 4.9 },
    { id:5, img: Img5, title: "Product five", ratings: 3.9 }
]


const Products = () => {
  return (
    <div className=' dark:bg-gray-600 dark:text-blue-200 ' >
        <div className='container' >
            {/* header */}
            <div className='text-center dark:text-amber-100 mb-10 max-w-150 mx-auto' >
                <p className='text-2xl text-primary' >
                        Top Selling Products for you.
                </p>
                <h1 className='text-3xl font-bold' >
                        Products
                </h1>
            </div>
            {/* Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ' >
                {ProductsData.map((data)=>(
                    <div key={data.id} className='space-y-3' >
                        <img src={data.img} alt=""  className='h-55 w-37.5 object-cover  rounded-b-md' />

                        <div>
                                <h3 className='font-semibold' >{data.title}</h3>
                                <div className='flex items-center gap-1' >
                                    <FaStar className='text-yellow-400' / >
                                    <span>{data.ratings}</span>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Products
