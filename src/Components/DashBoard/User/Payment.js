import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe('pk_test_51L2AwTJwwiymagdlMjtinyE6b1TRyWjxiDO3RJp3rW6P4K37ymCk36Sh10C6cB6A9o7H9qN8wyS6PjYnZiJ1kJtY00aP10ahqt');
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:4000/payment/${id}`
    const { data: myOrder, refetch, isLoading } = useQuery(['myOrder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-amber-700 font-bold text-4xl sp-style">Hey, {myOrder.name
                    }</p>
                    <h2 className="sp-style text-2xl ">
                        Please Pay for Booking :- <span className="text-blue-700"> {myOrder.sendPackage}</span>
                    </h2>

                    <p className="text-xl sp-style font-bold">Please pay First:BDT,  {myOrder.sendPrice}/-</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <PaymentForm myOrder={myOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;