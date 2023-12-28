import React, { useEffect, useState } from 'react';
import FamousChef from '../FamousChef/FamousChef';

const Service = () => {
    const[chefs, setChefs] = useState([]);


    useEffect(() =>{
        fetch('http://localhost:4000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])
    return (
        
        <div className='lg:mx-12 px-4 py-32'>
                <div className='text-center mb-20'>
                <h2 className='text-4xl font-bold'>Our Famous Chef</h2>
                </div>
            <div className='container max-auto ml-32 grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
            {
                chefs.map(chef => <FamousChef 
                
                key={chef.id}
                chef={chef}
                
                >
                </FamousChef>)
            }
            </div> 
            
        </div>
    );
};

export default Service;