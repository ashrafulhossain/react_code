import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleHolud from './SingleHolud';

const Holud = () => {
    const [holudstage, setHoludStage] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:4000/holud')
        .then(response => response.json())
    .then(data=> setHoludStage(data))
      }, [])
    return (
        <div>
        <div className='mt-28'>
       {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
       <h1 className='text-3xl sp-style text-cyan-700 font-medium text-center py-4'> Holud Stage</h1>
       <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
           {
               holudstage.map(holudstg => <SingleHolud key={holudstg._id} holudstg={holudstg}></SingleHolud>)
           }
           </div>
        
       </div>
     
   </div>
    );
};

export default Holud;