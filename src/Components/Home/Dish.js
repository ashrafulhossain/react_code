import React from 'react';
import img1 from '../../conven/10021.png'
import img2 from '../../conven/10022.png'
import img3 from '../../conven/10023.png'
import img4 from '../../conven/10024.png'
import img5 from '../../conven/10025.png'
import img6 from '../../conven/10026.png'
import Chat from './Chat';
const Dish = () => {
    return (
        <div className='mt-10 '>
           
            
        <div  className='ml-10 mr-10  grid grid-cols-1 md:grid-cols-3 gap-5 py-10 rounded-md'>

            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img1} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-3xl best-moment'> Mustard Hilsa</h1>
                    
                    

                </div>
                
            </div>
           
            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img2} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-3xl best-moment'> Beef Kala Bhuna</h1>
                    
                    

                </div>
                
            </div>
            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img3} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-3xl best-moment'>Shahi Tukra</h1>
               
                    

                </div>
                
            </div>
            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img4} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-3xl best-moment'> Murag Pulao</h1>
                  
                    

                </div>
                
            </div>
            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img5} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-3xl best-moment'> Kacchi Biryani</h1>
                    
                    

                </div>
                
            </div>
            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img6} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-3xl best-moment'> Patishapta Petha</h1>
                    
                    

                </div>
                
            </div>

            </div>
            {/* <Chat/> */}
                </div>
        
    );
};

export default Dish;