import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTheme from './SingleTheme';

const ThemeParty = () => {
    const [themestage, setThemeStage] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:4000/themebirthday')
        .then(response => response.json())
    .then(data=> setThemeStage(data))
      }, [])
    return (
        <div>
        <div className='mt-28'>
       {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
       <h1 className='text-3xl sp-style text-cyan-700 font-medium text-center py-4'> Theme Birthday Party Stage</h1>
       <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
           {
               themestage.map(themestg => <SingleTheme key={themestg ._id} themestg ={themestg }></SingleTheme>)
           }
           </div>
        
       </div>
     
   </div>
    );
};
export default ThemeParty;