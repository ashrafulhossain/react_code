import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import noImg from '../../no-image.png'
const ProfileCard = ({ singleUser }) => {
    const { name, email,discount, img, role, number, address, institute, _id } = singleUser;
    
    console.log(singleUser,"singleUser");
    const [profileUser] = useAuthState(auth)
    const profileName = name || profileUser.displayName
    // console.log(singleUser)
    const navigate = useNavigate();

    // console.log(singleUser)
    let offer;
    if (discount > 0) {
      offer=  <p className='text-bold text-sky-700  sp-style text-center mt-10 text-4xl'>Congrats!!! you won {discount}%  discount, on your next order 😃 </p>
     }
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
           
            <div className="mt-10 md:pl-2 card md:w-1/2 w-4/5 mx-auto lg:card-side bg-base-100 shadow-xl">
                <figure className='flex-1'>
                    {
                        img ? <img className='rounded-full ' src={img}
                            alt={name} />
                            : <img className='rounded-full' src={noImg}
                                alt={name} />
                    }

                </figure>
                <div className="card-body flex-1">
                    <h2 className="card-title sp-style text-blue-700 font-bold">Name: {profileName}</h2>
                    <h1 className='sp-style font-bold'>Email: {email}</h1>
                


                </div>
            </div>
      {offer}
        </>
    );
};

export default ProfileCard;