import React from 'react';
import banner_img from "../../assets/banner.png";



const Banner = () => {
    return (
        <div className='mt-20 bg-white'>
          <div className='flex flex-col md:flex-row-reverse items-center justify-between container mx-auto'>
            <div className='md:w-1/2 w-full'>
                    <img className='w-full' src={banner_img} alt="" />
            </div>
                <div className='md:w-1/4 w-full mt-5 ml-5'>
                     <h3 className='text-xl font-semibold mb-5'>This is Michael Smith</h3>
                    <h2 className='text-5xl md:text-5xl font-bold leading-snug md:leading-[76px] mb-5'>Award winner chef <span className='text-primary'>From America</span></h2>
                    <button className=' bg-primary px-8 py-3 hover:bg-body transition-all duration-300 hover:-translate-y-4 text-white text-xl rounded-md' >Contact Me</button>
                </div>
          </div>
        </div>
    );
};

export default Banner;