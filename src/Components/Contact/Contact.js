import { faArrowUp, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Arrow from '../Home/Arrow.js';
import Leaflet from '../Leaflet/Leaflet.js';
import './Contact.css'
import Chat from '../Home/Chat.js';

const Contact = () => {
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
    <div className="contact">
      <div className="contact-head text-center text-6xl text-gray-400">
        <h1>Contact Address</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="mt-10 mx-auto">
          <h5 className='text-2xl '>
            <FontAwesomeIcon className="" icon={faLocationDot} />
            <span style={{marginLeft:'10px'}}>Patiya,Chittagong</span>
          </h5>
          <h5 className="mt-5 text-2xl">
            <FontAwesomeIcon className="" icon={faEnvelope} />
            <span style={{marginLeft:'10px'}}>Official: crystal-palace@gmail.com</span>   
            <a href="#"></a>
          </h5>
          <h5 className="mt-5 text-2xl">
            <FontAwesomeIcon className="" icon={faPhone} />
            <span style={{marginLeft:'10px'}}>Helpline :
          +8801636524352</span>    
          </h5>
        </div>
        <Leaflet style={{ marginLeft: "20%" }}></Leaflet>
      </div>
     
    </div>
  );
};

export default Contact;