import React, { useEffect, useState } from 'react';
import DeliciousFood from '../DeliciousFood/DeliciousFood';

const OurFood = () => {
    const [foods, setFoods] = useState([]);


    useEffect(() =>{
        fetch('http://localhost:4000/chefs')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return (
        <div className='lg:mx-12 px-4 mt-20'>
            <h2 className='text-4xl text-center font-bold'>Our Delicious Cuisine</h2>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    foods.map(food => <DeliciousFood
                    key={food.id}
                    food ={food}
                    ></DeliciousFood>)
                }
            </div>
        </div>
    );
};

export default OurFood;