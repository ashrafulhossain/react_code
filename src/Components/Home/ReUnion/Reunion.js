import React, { useEffect, useState } from 'react';
import SingleReunion from './SingleReunion';

const Reunion = () => {
    const [reunion, setReunionStage] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:4000/reunion')
        .then(response => response.json())
    .then(data=>  setReunionStage(data))
      }, [])
    return (
        <div>
        <div className='mt-28'>
       {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
       <h1 className='text-3xl sp-style text-cyan-700 font-medium text-center py-4'> Reunion Event</h1>
       <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
           {
              reunion.map(reunionstg => <SingleReunion key={reunionstg ._id} reunionstg ={reunionstg}></SingleReunion >)
           }
           </div>
        
       </div>
     
   </div>
    );
};

export default Reunion;