import React from 'react';
import { SlLike } from "react-icons/sl";

const FamousChef = (props) => {
    const {chef_picture,chef_name,years_of_experience,number_of_recipes,likes} =props.chef;

    return (
        <div className='bg-bgShade shadow-lg p-10 rounded '>
            
            <div className=''>
                <img className='h-80 w-96 rounded text-center mx-auto' src={chef_picture} alt="" />
            </div>
            <div>
                <h3>Name :{chef_name}</h3>
                <p>Years_of_experience:{years_of_experience}</p>
                <p>number_of_recipes:{number_of_recipes}</p>
            </div>
            <div>
                <div>
                    <p><SlLike></SlLike>{likes}</p>
                </div>
            </div>

        </div>
    );
};

export default FamousChef;