import React from 'react';
import { SlLike } from "react-icons/sl";
import { Link } from 'react-router-dom';

const FamousChef = (props) => {
    const { _id, chef_picture,chef_name,years_of_experience,number_of_recipes,likes} =props.chef;

    return (
    <div className='bg-bgShade shadow-lg p-10 rounded '>
            
            <div className=''>
                <img className='h-80 w-96 rounded text-center mx-auto' src={chef_picture} alt="" />
            </div>
        <div className='mx-auto'>
                <div className='p-2 text-gray-400'>
                    <h3 className='text-2xl font-semibold py-2'>{chef_name}</h3>
                    <p className='text-xl font-semibold'>Years_of_experience : {years_of_experience}</p>
                    <p className='text-xl font-semibold py-2'>number_of_recipes : {number_of_recipes}</p>
                </div>
                <div className='flex justify-between items-center p-2'>
                    <div>
                       <Link to={`/details/${_id}`}>
                           <button className='bg-primary px-4 py-3 hover:bg-body transition-all duration-300  text-white text-xl rounded-md'>View Recipes </button>
                       </Link>
                    </div>
                    <div className='flex'>
                        <p className='flex items-center p-2'><SlLike></SlLike><span className='ml-2'>{likes}</span></p>
                    </div>
                </div>
        </div>

    </div>
    );
};

export default FamousChef;