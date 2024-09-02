import React from 'react';

const SingleHolud = (props) => {
    const { _id, name, img, details, price, } = props.holudstg;
    console.log(props.holudstg,'stage')
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='shadow-lg py-10 rounded-md'>

            <div style={{ border: "none" }} className="max-w-sm  rounded-lg border text-center">
                <img className="rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold'> Package Name: {name}</h1>

                    <p className="mb-3 font-normal pt-5 text-gray-700 dark:text-gray-400"><span className='font-bold'>Description:</span>    {details} </p>
                    <p><span className='font-bold'>Price:</span> BDT, {price}/-<span></span></p>
                    {/* <p><span className='font-bold'>Time:</span> : {Duration}</p> */}

                </div>
                {/* <button className='bg-[#4a9c27] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'><Link to={`/checkout/${_id}`}       >         Choose Service</Link></button> */}
            </div>

        </div>
    );
};

export default SingleHolud;