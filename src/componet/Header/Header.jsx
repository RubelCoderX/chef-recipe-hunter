import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menuBtn
  const toggleMenu = () =>{
    setIsMenuOpen(isMenuOpen);
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
    <header className='w-full mx-auto container fixed top-0 left-0 right-0'>
      <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" :""}`}>
        <div className='flex justify-between items-center'>
           <div>
              <h2 className='cursor-pointer text-4xl font-bold hover:text-blue-500'>CulinaryHarmony</h2>
            </div>
            <div className='lg:flex  items-center gap-4'>
              <Link className='text-2xl cursor-pointer  hover:text-blue-500'>Home</Link>
              <Link className='text-2xl cursor-pointer px-8 hover:text-blue-500'>Blog</Link>
              <Link className='text-2xl cursor-pointer  hover:text-blue-500'>About</Link>
            </div>
            <div>
              <button className='bg-transparent py-3 px-6 text-2xl text-blue-400 border-blue-400 border rounded hover:bg-blue-500 transition-all duration-300 hover:text-white'>Login</button>
            </div>
        </div>


      </nav>
        
    </header>
  );
};

export default Header;