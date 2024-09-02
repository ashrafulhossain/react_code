import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../../firebase.init';
import StarRating from './StarRating';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [customRating, setCustomRating] = React.useState(0);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const email = user?.email
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:4000/singleOrder?email=${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    console.log(orders, 'orders');
    const onSubmitReview = (data, e) => {
        const userReview = {
            customRating,
            review: data.review,
            user
        }
        if (orders.length === 0) {
            toast.error(`Dear ${user.displayName} .Please,at least order one product for giving review`)
        }
        else {
            fetch('http://localhost:4000/review/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userReview)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    e.target.reset()
                    toast.success('Thanks for your valuable feedback')
                }
                );
        }


    }
    return (
        <div className='text-center'>
            <h1 className='mt-10 sp-style text-2xl text-green-900'>Hi, {user.displayName}</h1>
            <h1 className='mt-10 sp-style text-2xl text-amber-700'>If you like or dislike our service,tell us by giving your review.</h1>
            <h1 className=' sp-style text-2xl text-amber-700'>We are always trying our best for our clients</h1>
            <h1 className='mt-10 sp-style text-2xl text-amber-7000'>Give us your feedback</h1>
            <StarRating setCustomRating={setCustomRating}></StarRating>
            <form onSubmit={handleSubmit(onSubmitReview)}>
                <textarea class="textarea textarea-bordered w-1/2" placeholder="Your Review"
                    {...register("review", { required: true, minLength: 3 })}
                ></textarea>
                <div className='text-center'>
                    <input type="submit" className='btn btn-outline btn-primary mx-auto w-32 ' />
                </div>
            </form>
        </div>
    );
};

export default AddReview;