import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleHindu from './SingleHindu';

const HinduStage = () => {

   const [hindustage, setHinduStage] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:4000/hindustage')
        .then(response => response.json())
    .then(data=>setHinduStage(data))
      }, [])
    return (
        <div>
        <div className='mt-28'>
       {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
       <h1 className='text-3xl sp-style text-cyan-700 font-medium text-center py-4'> Specefic Wedding Stage For Hindu</h1>
       <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
           {
               hindustage.map(hindustg => <SingleHindu key={hindustg._id} hindustg={hindustg}></SingleHindu>)
           }
           </div>
        
       </div>
     
   </div>
    );
};

export default HinduStage;