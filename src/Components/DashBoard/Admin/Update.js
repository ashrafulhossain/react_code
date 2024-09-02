import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const Update = () => {
    const { id } = useParams()
    const { item,setItem } = useServiceDetail(id)
   const [increase,setIncrease] = useState(0)
const navigate= useNavigate()
    const handleIncrease = e => {
        setIncrease(e.target.value);
}

    const handleSubmit = e => {
        e.preventDefault();
    
        const quantity = parseInt(e.target.updatePrice.value) 
        

        if (!quantity) {
            toast.error('Insert price')
        }
        else {
            const newUpdatePrice=  e.target.updatePrice.value
        
            console.log(newUpdatePrice,'newQuantityIncrease');
            const updateItem = { newUpdatePrice }
            console.log(updateItem);
            
           
            fetch(`http://localhost:4000/package/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
             })
                .then(res => res.json())
               .then(data => {
                   console.log('success', data)
                   
                   toast.success('Price change successfully')
            })
        }
       

        e.target.reset()
    }
    

    return (
        <div>
  

            <div className='flex flex-col justify-around items-center py-5 coin-card rounded-lg'>
            <img className='w-1/4 hover:scale-110 transform duration-100 ease-linear' src={item?.img} alt="" />
            <div className='text-center'>
                <h1 className='text-3xl sp-style font-bold text-gray-600'>{item?.name}</h1>
              
                <h1 className='text-2xl sp-style  mt-2 font-bold '>Price:  {item?.price}/-</h1>
                
               
            
               
            </div>
            <form onSubmit={handleSubmit}>
                <div class="mt-3 flex items-center">
                    <input  type="number" name='updatePrice' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <input className='ml-2 text-white bg-[#08115c] border-2 border-transparent  font-medium hover:font-medium px-5 py-2 cursor-pointer rounded-md' type="submit" value="Update Price" />
                </div>
                </form>  
                <div className='flex items-center'>
    
          
             
       
             </div>
        </div>



            
           
        </div>


    );
};

export default Update;

