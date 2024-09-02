import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons';

 import AutoType from './AboutType'
import refa from '../../images/refa.jpg'
import ema from '../../images/ema.jpg'
import abdur from '../../images/abdur.jpg'
import israt from '../../images/israt.jpg'
import nayem from '../../images/nayem.jpg'
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        var alert_del = document.querySelectorAll('.alert-del');
        alert_del.forEach((x) =>
          x.addEventListener('click', function () {
            x.parentElement.classList.add('hidden');
          })
        );
    }, [])
    return (
        <div>
                 <div className="text-white mx-auto about-card background  custom-shadow ">
            
            <h1 className='about-text text-6xl pt-10 sp-style  mt-5 ml-10' >We've Dreams Into Reality
             </h1>

                <p className='m-10    text-2xl p-20'>❝ Infuse your celebration with the warmth and luxury of Crystal_Palace ~ Convention Hall, a perfect venue for weddings, social programs, gaye holud, birthday parties or intimate gatherings. The modern & elegant design of our banquet & convention hall makes for a perfect upscale fiesta.❞
                 
                    <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-white' icon={faCheck} /> <span className="ml-2">Pillarless & stylish interior decoration</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-white' icon={faCheck} /> <span className="ml-2">Dining capacity of 300+ guests</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-white' icon={faCheck} /> <span className="ml-2">Several menu with option for customization</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-white' icon={faCheck} /> <span className="ml-2">Affordable price compared to convention centers</span></li>
               
                </p>
               
               <p className="pr-5 text-right text-cyan-700 font-bold text-4xl pb-10 sp-style">~ Crystal_Palace Convention Hall</p>
            </div>
            <h1 className='text-center text-3xl sp-style mt-20'><AutoType/></h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
          
      
          <div  style={{ margin: "20%" }} className="custom-shadow
  profile
  ">
     <div className='pt-2 flex flex-col items-center'>
  <img className="w-20 h-20 rounded-full" src={refa} alt=''/>
  <h1 className='text-3xl sp-style text-center my-5'> Refajum <span className='text-2xl'>Monira</span>  </h1>
  <p className='text-blue-500 font-bold pb-10 text-center sp-style text-2xl'> Front-end Developer</p>
</div>
      </div>
      

      <div  style={{ margin: "20%" }} className="custom-shadow">
      <div className='pt-2 flex flex-col items-center'>
  <img className="w-20 h-20 rounded-full" src={ema} alt=''/>
  <h1 className='text-3xl sp-style text-center my-5'> Tashiya  <span className='text-2xl'>Hossain</span>  </h1>
  <p className='text-blue-500 font-bold pb-10 text-center sp-style text-2xl'> Front-end Developer</p>
</div>
      </div>
      
      <div  style={{ margin: "20%" }} className="custom-shadow">
          
      <div className='pt-2 flex flex-col items-center'>
  <img className="w-20 h-20 rounded-full" src={israt} alt=''/>
  <h1 className='text-3xl sp-style text-center my-5'>Israt <span className='text-2xl'>Jahan</span>  </h1>
  <p className='text-blue-500 font-bold pb-10 text-center sp-style text-2xl'> Front-end Developer</p>
</div>
      </div>
      
      <div  style={{ margin: "10%" }} className="custom-shadow">
          

      <div className='pt-2 flex flex-col items-center'>
  <img className="w-20 h-20 rounded-full" src={abdur} alt=''/>
  <h1 className='text-3xl sp-style text-center my-5'> Abdur <span className='text-2xl'>Rahman</span>  </h1>
  <p className='text-blue-500 font-bold pb-10 text-center sp-style text-2xl'> Backend Developer</p>
</div>
  </div>

      <div  style={{ margin: "10%" }} className="custom-shadow">
          
      <div className='pt-2 flex flex-col items-center'>
  <img className="w-20 h-20 rounded-full" src={nayem} alt=''/>
  <h1 className='text-3xl sp-style text-center my-5'>Nayemul <span className='text-2xl'>Islam</span> </h1>
  <p className='text-blue-500 font-bold  text-center sp-style text-2xl'> Backend Developer</p>
</div>
  </div>
 
          </div>

            
            </div>

    );
};

export default About;