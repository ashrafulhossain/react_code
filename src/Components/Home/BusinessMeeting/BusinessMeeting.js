import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleMeeting from './SingleMeeting';

const BusinessMeeting = () => {
    const [businessstage, setbusinessStage] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:4000/business')
        .then(response => response.json())
    .then(data=>  setbusinessStage(data))
      }, [])
    return (
        <div>
        <div className='mt-28'>
       {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
       <h1 className='text-3xl sp-style text-cyan-700 font-medium text-center py-4'> Corporation Event</h1>
       <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
           {
               businessstage.map(businessstg => <SingleMeeting key={businessstg ._id} businessstg ={businessstg }></SingleMeeting >)
           }
           </div>
        
       </div>
     
   </div>
    );
};

export default BusinessMeeting;