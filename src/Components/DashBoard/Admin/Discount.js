import React from 'react';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';

import Spinner from '../../Spinner/Spinner'
import Offer from './Offer';

const Discount = () => {



    const { data: allUsers, isLoading, refetch } = useQuery('allUsers', () => fetch(`http://localhost:4000/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }


    const newOffer = allUsers.filter(user => user.discount > 0)


    let offerMsg;
    if (newOffer.length > 0) {
        offerMsg = <h2 className='text-4xl sp-style text-green-900 text-center mt-8'>

            You have given discounts to {newOffer.length} people 🥳</h2>
    }
    else {
        offerMsg = <h2 className='text-4xl sp-style text-green-900 text-center mt-8'>

            Give some discount to the people 😥</h2>
    }



    return (
        <div >
            {offerMsg}
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Discount</th>
                            <th>Remove</th>

                        </tr>
                    </thead>

                    <tbody>

                        {
                            newOffer?.map((user, index) => <Offer
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></Offer>)
                        }
                    </tbody>
                </table>



            </div>



        </div>
    );
};

export default Discount;