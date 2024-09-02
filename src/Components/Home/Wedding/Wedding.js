import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HinduStage from '../HinduStage/HinduStage';
import Holud from '../Holud/Holud';
import rec1 from './rec-1.png'
import rec2 from './rec-2.png'
import rec3 from './rec-3.png'
import SingleWedding from './SingleWedding';
const Wedding = () => {
    const [stage, setStage] = useState([])
    console.log(stage,'stage');
    useEffect(() => {
        fetch('http://localhost:4000/wedding')
        .then(response => response.json())
    .then(data=> setStage(data))
      }, [])
    return (
        <div>
        <div className='mt-28'>
       {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
       <h1 className='text-3xl sp-style text-cyan-700 font-medium text-center py-4'> Reception Stage</h1>
       <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
           {
               stage.map(stg => <SingleWedding key={stg._id} stg={stg}></SingleWedding>)
           }
           </div>
          
                <Holud />
                <HinduStage/>
       </div>
     
   </div>
    );
};

export default Wedding;