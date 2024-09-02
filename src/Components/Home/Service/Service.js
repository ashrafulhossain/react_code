import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import useService from '../../../Hooks/useService';
import Arrow from '../Arrow';
import Chat from '../Chat';
import SingleService from '../singleService/SingleService';

const Service = () => {
    const [services] = useService()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // console.log(services,'serv')
    useEffect(() => {
        var alert_del = document.querySelectorAll('.alert-del');
        alert_del.forEach((x) =>
          x.addEventListener('click', function () {
            x.parentElement.classList.add('hidden');
          })
        );
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
             <div className='mt-28'>
           
            <h1 className='text-3xl sp-style text-green-700 font-medium text-center py-4'> Our packages</h1>
            <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                {
                    services.slice(3,30).map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
                </div>
           
                {/* <Arrow /> */}
                {/* <Chat/> */}
                   
            </div>
          
        </div>
    );
};

export default Service;