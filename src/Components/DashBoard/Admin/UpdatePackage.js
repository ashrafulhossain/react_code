import { faBan, faCheck, faMoneyCheckAlt, faShippingFast, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';

const UpdatePackage= (props) => {

    const { _id, name, img, details, price, } = props.service;
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/package/${id}`)
    }
    return (
        <div >

            <div style={{ border: "none" }} className="max-w-sm  rounded-lg border text-center">
                <img className="rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold'> Package Name: {name}</h1>

                
                    <p><span className='font-bold'>Price:</span> BDT, {price}/-<span>(without our Menu + PhotoGraphy)</span></p>
                    {/* <p><span className='font-bold'>Time:</span> : {Duration}</p> */}
                    <p className="mb-3 font-normal pt-5 text-gray-700 dark:text-gray-400"><span className='font-bold'>Description:</span>    {details} </p>
                </div>
                {/* <button className='bg-[#4a9c27] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'><Link to={`/checkout/${_id}`}       >         Choose Service</Link></button> */}
                <button onClick={() => handleUpdate(_id)}className='nav-btn font-bold text-md flex items-center'><span className='font-bold text-md ml-1 text-sky-700'>Update</span></button>
            </div>

        </div>
    );
};

export default UpdatePackage;