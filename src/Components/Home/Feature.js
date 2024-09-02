import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Feature = () => {
    return (
        <div className='mt-10 container  grid grid-cols-1 md:grid-cols-2 gap-2 '>
            <div className="  feature-mar">
                <h1 className="text-2xl sp-style text-center mb-5 mt-5 text-bold">
                    <u>
                    Hall Description
                        </u>
                    
                    </h1>
                <div className=" feature ">
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]mt-5'icon={faCheck} /> <span className='ml-2 '>Accommodates 400 Guests</span> </li>
                <li style={{listStyle:'none'}}> <FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Pillarless Banquet Hall</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">2 Spacious Halls: 3500sft each</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Customizable Stage Size</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e] mt-5' icon={faCheck} /> <span className="ml-2"></span>24-Hour Security</li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2"></span>Built-In Audio Visual System</li>
                <li style={{listStyle:'none'}}>
                <FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /><span className="ml-2"></span> Event Planning Assistance</li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2"></span>Dual Lift Facility</li>
             </div>
          
            </div>
            <div className="decoration">
                <h1 className="text-3xl sp-style text-center mt-5 text-bold">
                    
               <u>Decoration</u>     
                
                </h1>
                <div className=" feature">
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e] mt-5' icon={faCheck} /> <span className="ml-2">Custom Seating Arrangement</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">LED Projector & Screens</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Spacious Parking Facility</span></li>
                <li style={{ listStyle: 'none' }}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Fully Air Conditioned</span></li>
                <li style={{listStyle:'none'}}> <FontAwesomeIcon className='text-[#3b069e] mt-5' icon={faCheck} /> <span className="ml-2">Local & International Menu</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Superior Tabletop Décor</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">High-Speed Wi-Fi</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]'icon={faCheck} /> <span className="ml-2">Easy Convention Center Location</span></li>
                </div>
           
               
            </div>
         
          
        </div>
    );
};

export default Feature;