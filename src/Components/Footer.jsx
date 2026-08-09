import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
    { title :"Home", link:"/#"},
    { title :"About", link:"/#about"},
    { title :"Contact", link:"/#contact"},
    { title :"Blog", link:"/#blog"}
]

const Footer = () => {
  return (
   
    <div className='dark:bg-gray-800 bg-gray-500 dark:text-white w-full  ' >
        <hr  />
      <div className='container ml-4 pb-4 '  >
        <div>
            <div  className='grid md:grid-cols-3 pb-16 pt-10 gap-8' >
                <h1 className="text-2xl font-bold mb-3" >Shopsy</h1>
                <p className="text-sm text-gray-300" >
                    Your one-stop destination for quality products at the best prices.
                </p>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-3" >Important Links</h1>
                <ul className="flex flex-col gap-3   " >
                    {FooterLinks.map((link)=>(
                        <li key={link.title} className='hover:text-gray-700 ' >
                            <a href={link.link}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div  className="flex items-center gap-4 mb-6   " >
                    <a href="#" className="text-2xl hover:text-gray-700  " > <FaInstagram/> </a>
                    <a href="#" className="text-2xl hover:text-gray-700 " ><FaFacebook/></a>
                    <a href="#" className="text-2xl hover:text-gray-700 " ><FaLinkedin/></a>
                    
                </div>
                <div className="flex items-center gap-3 mb-2" >
                    <FaLocationArrow />
                    <p>jaipur, Rajasthan</p>
                </div>
                <div className="flex items-center gap-3" >
                    < FaMobileAlt />
                    <p>+91 7739480714</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
