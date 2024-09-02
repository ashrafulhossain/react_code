import React from 'react';
import wed1 from './wed-1.png'
import wed2 from './wed-2.png'
import wed3 from './wed-3.png'
const WeddingMemory = () => {
    return (
        <>
            <h1 className='sp-style mt-10 text-center text-2xl text-cyan-900'>Wedding Memories</h1>
            <div className='grid grid-cols-3 gap-5 mt-10 mb-10 mr-10 ml-10'>
           
           <img src={wed1} alt=""/>
           <img src={wed2} alt=""/>
           <img src={wed3} alt=""/>
       </div>
        </>
  
    );
};

export default WeddingMemory;