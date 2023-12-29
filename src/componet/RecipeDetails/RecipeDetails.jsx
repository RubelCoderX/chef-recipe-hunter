import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";

const RecipeDetails = () => {
    const details = useLoaderData();
    const {_id,recipes,favorite_recipe,chef_picture,chef_name,years_of_experience,number_of_recipes,likes} = details;
    return (
        <div className='mt-40 w-2/3 bg-bgShade p-8 shadow-lg rounded container mx-auto'>
            <div className=''>
                <div>
                    <img className='h-96 w-2/3 rounded mx-auto' src={chef_picture} alt="" />
                </div>
                    <div className='w-2/3 mx-auto p-2'>
                            <h2 className='text-xl font-semibold'>{chef_name}</h2>
                            <h3 className='py-2  font-semibold'>Favorite_recipe: </h3>
                            <p className='text-gray-400'>{favorite_recipe}</p>
                            <div className='font-semibold'>
                                <h2>Recipe_name:</h2>
                                <p className='text-gray-400'> {recipes.recipe_name}</p>
                                <h2>Ingredients:</h2>
                                
                                <p className=' text-gray-400'> {recipes.ingredients} </p>
                                 <h3>Cooking_method :</h3>
                                <p className=' text-gray-400'>{recipes.cooking_method} </p>
                            </div>
                    </div>
                <div className='flex justify-between items-center w-2/3 mx-auto'>
                        <div>
                            <button className='bg-blue-800 px-4 py-3 hover:bg-body transition-all duration-300  text-white text-xl rounded-md'> Favorite Item</button>
                        </div>
                    
                    <div>
                        <p className=' flex items-center'><div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked/>
                        </div>{recipes.rating}</p>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default RecipeDetails;