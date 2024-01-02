import React from 'react';

const DeliciousFood = (props) => {
    const{recipes}=props.food;

    return (
        <div className='mt-20 bg-bgShade p-10 rounded shadow-xl'>
            <div>
                <img className='h-80 w-90 rounded' src={recipes.food_image} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-semibold p-4 text-center'>{recipes.recipe_name}</h2>
                <hr className='font-semibold'/>
                <h4 className='font-semibold text-xl text-center p-3'>Ingredients</h4>
                <p className='font-semibold text-center'>{recipes.ingredients}</p>
            </div>
        </div>
    );
};

export default DeliciousFood;