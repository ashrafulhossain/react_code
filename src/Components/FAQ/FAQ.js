import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import image from '../../images/Thinking.png'
import Arrow from '../Home/Arrow';
import Accordion from './Compo/Accordion'
const FAQ = () => {
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
        <div className=" ">
           
            <div className='m-20 grid grid-cols-1 gap-10  md:grid-cols-2  justify-items-center'>

      <div>
        <Accordion title=" Which type of event this convention center does organise ?" content="We organize all type of event. Specially Marriage, Birthday, Meeting, Award program and any Reunion program." />
        <Accordion
          title="How early do we need to start planning an event"
          content="It is very important to plan everything before the event starts. We need to plan atleast 15days earlier before the event."
        />
        <Accordion
          title="Why you will choose us ?"
          content=" <p>Because we are well experienced, more than 10 years event handeling experience we have. So You will find always best experience from us.</p>
         "
        />
      </div>
            
            <div>
<img className='w-1/2  md:mx-0 mx-auto 'src={image} alt=''/>
            </div>
            <div className=' ml-20 grid justify-items-center'>
            <marquee className='text-red-700' width="100%" direction="left" height="100px">
    For More Information Contact Us
</marquee>
        </div>
        {/* <div className="  mt-10 mb-5 ml-60  text-right ">
            <button><a href="#"> <FontAwesomeIcon
               style={{borderRadius:"10px"}}
                className='text-6xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /></a></button>
           </div> */}
          
        </div>
        {/* <Arrow /> */}
             {/* toast start */}
             {/* <div className='ml-auto mb-5'>
            <div
                className="bg-red-900  w-72 mt-10 flex justify-between text-white shadow-xl rounded p-3 "
            >
                <p className="self-center">
               To need any help,Message us or call us
                </p>
                <strong className="text-2xl mt-2 ml-5 align-center cursor-pointer alert-del"
                >&times;</strong
                >
            </div>
            </div> */}
            
            {/* toast end */}
        </div>
    );
};

export default FAQ;