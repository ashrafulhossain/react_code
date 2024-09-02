import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useService from '../../Hooks/useService';
import BestProject from '../BestProject/BestProject';
import Happy from '../Happy/Happy';
import Feature from './Feature';
import ReviewSlider from '../Review/ReviewSlider'
import { BiWorld } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import wave from '../../waves.svg'
import hand from '../../hand.jpg'
import world from '../../world.jpg'
import project from '../../project.jpg'
import Service from './Service/Service';
import SingleService from './singleService/SingleService';
import Slider from './Slider/Slider';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../Spinner/Spinner';
import Arrow from './Arrow';
import Chat from './Chat';


const Home = () => {
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


    const [services] = useService()
    const navigate = useNavigate()
    return (
        
        <div className="relative">
            <Slider />
            
            <h1 className="tracking-widest mt-10 best-moment text-center text-3xl">Some Of Our Best Memories</h1>
            
            <div>
                <Link to='/weddingMemory' className='mx-auto'> <button className='text-white text-2xl sp-style bg-blue-700 px-5 mt-10 ml-48'>Wedding Memory</button></Link>
                <Link to='/birthMemory' className='mx-auto'> <button className='text-white text-2xl sp-style bg-blue-700 px-5 mt-10 ml-48'>Birthday Memory</button></Link>
                <Link to='/busiMemory' className='mx-auto'> <button className='text-white text-2xl sp-style bg-blue-700 px-5 mt-10 ml-48'>Business Memory</button></Link>
            </div>

            <h1 className=" font-bold text-purple-900 mt-10 sp-style text-center text-3xl">
                Features & Facilities
            </h1>
            <Feature />
            <div className='mt-28'>

                <h1 className='text-3xl sp-style text-green-700 font-medium text-center py-4'>

                    Our Best Packages
                </h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                    {
                        services.slice(0, 3).map(service => <SingleService key={service._id} service={service}></SingleService>)
                    }
                </div>
            </div>
            <div className='flex items-center justify-evenly'>
                <Link to='/wedding' className=''> <button className='text-white text-xl sp-style bg-blue-700 px-5 mt-10 '>Wedding</button></Link>
                <Link to='/birthday' className=''> <button className='text-white text-xl sp-style bg-blue-700 px-5 mt-10 '>Birthday</button></Link>
                <Link to='/businessMeeting' className=''> <button className='text-white text-xl sp-style bg-blue-700 px-5 mt-10 '>Corporation Events</button></Link>
                <Link to='/reunion' className=''> <button className='text-white text-xl sp-style bg-blue-700 px-5 mt-10 '>Reunion & Fairwell Events</button></Link>
            </div>
            <button style={{ marginLeft: '45%' }} className="mt-10 text-center cursor:pointer happy bg-[#3005ee] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white" onClick={() => navigate('/services')}>
                See More
            </button>


            <h1 className="md:text-5xl text-2xl sp-style text-center mb-10 text-amber-900 mt-10 ">What Our Client's Says</h1>
            <div className='container mx-auto  mb-10'>
                <ReviewSlider />
            </div>
            {/* <Arrow /> */}
            {/* <Chat /> */}
            {/* toast start */}
            <div className=''>
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
            </div>

            {/* toast end */}
            <div className='bg-[#04193A] '>

                {/* <div className="custom-shape-divider-top-1653206227">
                    <img src={wave} alt="" />
                </div> */}
                <h1 className='text-uppercase sp-style text-center text-white text-4xl md:text-5xl '>We Always Try To Give Our Best</h1>

                <div className="business-summery mt-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
                    <BusinessSummary
                        icon={<BiWorld></BiWorld>}
                        end={1}
                        title="Country"
                        image={world}
                    />
                    <BusinessSummary
                        icon={<BsPeopleFill></BsPeopleFill>}
                        end={500}
                        title="Happy Clients"
                        image={hand}
                    />
                    <BusinessSummary
                        icon={<MdOutlineComputer></MdOutlineComputer>}
                        end={900}
                        title="Successful Projects"
                        image={project}
                    />
                </div>
            </div>

        </div>
        //     } 




        // </>
    );
};

export default Home;