import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleFood from './SingleFood';

const FoodPackage = () => {
    const [foodMenu, setFoodMenu] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:4000/food')
        .then(response => response.json())
    .then(data=> setFoodMenu(data))
      }, [])
    return (
        <div>
           <h1 className='text-center text-4xl text-green-700 mt-12'>Our Food Platters</h1>  
        <div className='mt-28'>
       {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
      
       <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
           {
              foodMenu.map(foodMNU => <SingleFood key={foodMNU._id} foodMNU={foodMNU}></SingleFood>)
           }
           </div>
        
       </div>
     
   </div>
    );
};


export default FoodPackage;