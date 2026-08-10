    import React from "react";
    import logo from "../assets/Logo.png";
    import {IoMdSearch} from "react-icons/io";
    import {FaCartShopping} from "react-icons/fa6";
    import Darkmode from "./Darkmode";

    const menu = [
        {id:1, name: "Home", link: "/#"},
        {id:2, name: "Top Rated", link: "/#services"},
        {id:3, name: "Kids Wear", link: "/#"},
        {id:4, name: "Mens Wear", link: "/#"},
        {id:5, name: "Electronics", link: "/#"}
    ]


    function Navbar() {
        return (
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-300 relative z-40"> 
                <div className="bg-primary/40 py-2 ml-5 mr-5 " >
                    <div className="container flex justify-between items-center">
                            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2" >
                                <img src={logo} alt="Logo" className="w-10" /> Adify
                            </a>

                    <div className="flex justify-between items-center gap-4" >
                        <div className="relative group hidden sm:block" >
                            <input type="text" placeholder="Search"  className="w-50 sm:w-50 group-hover:w-75 transition-all duration-300 px-2 py-1 focus:outline-none focus:border-gray-500 dark:bg-gray-800 " />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"  />
                        </div>
                        <button className="bg-gradient-to-red from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">

                                <span className="group-hover:block hidden transition-all duration-200">order</span>
                                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" / >

                        </button>
                        <Darkmode />
                        

                    </div>
                        
                    </div>
                
                </div>

                <div className="flex justify-center pb-2.5" >
                <ul className="sm:flex hidden items-center gap-4" >
                 { menu.map((data) =>(
                    <li key={data.id}>
                        <a href={data.link} className="inline-block px-4 hover:text-gray-700 duration-200" > {data.name}</a>
                    </li>
                  ))}
                </ul>
                </div>
            </div>
        )
    }

    export default Navbar;
