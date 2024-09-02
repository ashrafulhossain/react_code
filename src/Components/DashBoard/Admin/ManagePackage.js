import React from 'react';
import useService from '../../../Hooks/useService';
import UpdatePackage from './UpdatePackage';

const ManagePackage = () => {
    const [services] = useService()
    console.log(services,'updatepage')
    return (
        <div>
        <div className='mt-10'>
      
       <h1 className='text-3xl sp-style text-green-700 font-medium text-center py-4'> Update packages</h1>
       <div className='grid md:grid-cols-2  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
           {
               services.slice(0,30).map(service => <UpdatePackage key={service._id} service={service}></UpdatePackage >)
           }
           </div>
      
           
              
       </div>
     
   </div>
);
};



export default ManagePackage;


