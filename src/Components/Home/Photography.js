import React, { useEffect } from 'react';
import img1 from '../../p-1.jpg'
import img2 from '../../p-2.jpg'
import img3 from '../../p-3.jpg'
import img4 from '../../p-4.jpg'
import img5 from '../../p-5.jpg'
import img6 from '../../p-6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import Arrow from './Arrow';
import Chat from './Chat';
const Photography = () => {
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
            <h1 className='tracking-widest sp-style text-xl mx-auto md:text-3xl text-center mt-10 text-blue-900 font-bold'>
            
            We also provide Our Best Photographer Team <br/>
To Capture Your Beautiful Memories

            </h1>
            <h1 className='tracking-widest text-center text-amber-700 text-3xl mt-10 sp-style'>Our Photography Packages</h1>


           <div >
             
             
           <div  className='ml-10 mr-10 grid grid-cols-1 md:grid-cols-3 gap-5 py-10 rounded-md'>

<div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg pt-2 w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img1} alt="" />
    <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

    </div>
  
    <div className="p-5">
        <h1 className='font-bold'> Package-1 </h1>

      <p><span className='font-bold'>Price:</span> BDT, 20000/-</p>
       
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
    
   
    </div>
 
</div>
<div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg pt-2 w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img2} alt="" />
    <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

    </div>
  
    <div className="p-5">
        <h1 className='font-bold'> Package-2 </h1>

      <p><span className='font-bold'>Price:</span> BDT, 30000/-</p>
       
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
    </div>
 
</div>
<div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg pt-2 w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img3} alt="" />
    <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

    </div>
  
    <div className="p-5">
        <h1 className='font-bold'> Package-3 </h1>

      <p><span className='font-bold'>Price:</span> BDT, 40000/-</p>
       
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
    </div>
 
</div>
<div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg pt-2 w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img4} alt="" />
    <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

    </div>
  
    <div className="p-5">
        <h1 className='font-bold'> Package-4 </h1>

      <p><span className='font-bold'>Price:</span> BDT, 50000/-</p>
       
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
    </div>
 
</div>
<div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg pt-2 w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img6} alt="" />
    <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

    </div>
  
    <div className="p-5">
        <h1 className='font-bold'> Package-5 </h1>

      <p><span className='font-bold'>Price:</span> BDT, 60000/-</p>
       
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
    </div>
 
</div>
<div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg pt-2 w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img5} alt="" />
    <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

    </div>
  
    <div className="p-5">
        <h1 className='font-bold'> Package-6 </h1>

      <p><span className='font-bold'>Price:</span> BDT, 70000/-</p>
       
      
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
      <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Lorem ipsum dolor sit amet.</span></li>
    </div>
 
</div>

</div>
            </div>
            
            {/* <div className="  mt-10 mb-10 text-right mr-10">
            <button><a href="#"> <FontAwesomeIcon
               style={{borderRadius:"10px"}}
                className='text-6xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /></a></button>
           </div> */}
        {/* <Arrow /> */}
        {/* <Chat/> */}
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

export default Photography;