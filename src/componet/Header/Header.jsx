import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  HiMenu, } from "react-icons/hi"


const Header = () => {
  
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menuBtn
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() =>{
    const handleScroll = ()=>{
      if(window.scrollY >0){
        setIsSticky(true);
      }
    }
    window.addEventListener("scroll",handleScroll);
  })
  return (
    <header className='w-full  fixed top-0 left-0 right-0'>
      <nav className={`py-4  md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" :""}`}>
        <div className=' container mx-auto flex justify-between items-center'>
           <div>
              <h2 className='cursor-pointer text-4xl font-bold hover:text-primary'>Culinary <span className='text-primary'>Harmony</span></h2>
            </div>
            <div className='lg:flex  items-center hidden gap-4'>
              <Link to="/" className='text-2xl cursor-pointer hover:text-gray-400  '>Home</Link>
              <Link to="/blog" className='text-2xl cursor-pointer px-8 hover:text-gray-400'>Blog</Link>
              <Link to="/about" className='text-2xl cursor-pointer  hover:text-gray-400'>About Us</Link>
            </div>
            <div className='lg:block hidden'>
             
                <Link to='/login'>
                <button className='bg-transparent py-3 px-6 text-2xl text-primary border-primary border rounded hover:bg-primary transition-all duration-300 hover:text-white'>Login</button>
                </Link>
              
            </div>
            <button onClick={toggleMenu} className='lg:hidden text-3xl'>
              <HiMenu></HiMenu>
            </button>
        </div>
        {/* menu items for small devices */}
        {
          isMenuOpen &&<div className='bg-body mt-4 p-4 rounded-lg text-lg text-white'>
          <Link  className=' block px-2 py-2 cursor-pointer hover:text-gray-400  ' to='/'>Home</Link>
          <Link  className=' cursor-pointer block px-2 py-4  hover:text-gray-400' to='/blog'>Blog</Link>
          <Link  className=' cursor-pointer block px-2 py-2  hover:text-gray-400' to='/about'>About Us</Link>
        </div>

          
        }


      </nav>
        
    </header>
  );
};

export default Header;