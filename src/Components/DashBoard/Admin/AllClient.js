import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Spinner/Spinner';
import ClientDiscount from './ClientDiscount';

const AllClient = () => {


    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:4000/order`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    console.log(orders, 'All orders created successfully');
    if (isLoading) {
        return <Spinner />
    }
    let text;
    if (orders.length > 0) {
        text = <p className='text-green-700 text-2xl mt-10'>we have {orders.length} clients at this moment </p>
    }
    else {
        text = <p>We have 0 client</p>
    }

    const bronzeFilter = orders.filter(order => order.sendPrice <= 200000)
    console.log(bronzeFilter, "bronze")
    const goldFilter = orders.filter(order => order.sendPrice > 200000 && order.sendPrice <= 300000)
    console.log(goldFilter, "gold")
    const platinumFilter = orders.filter(order => order.sendPrice > 300000 && order.sendPrice <= 500000)
    console.log(platinumFilter, "platinum")
    const premiumFilter = orders.filter(order => order.sendPrice > 500000)
    console.log(premiumFilter, "premiumFilter")

    let bronzeMessage;
    if (bronzeFilter.length) {
        bronzeMessage = <p className='text-green-500'>There are {bronzeFilter.length}  clients in this rank</p>
    } else {
        bronzeMessage = <p className='text-red-500'>There is no clients matching in this rank</p>
    }
    let goldMessage;
    if (goldFilter.length) {
        goldMessage = <p className='text-green-500'>There are {goldFilter.length}  clients in this rank</p>
    } else {
        goldMessage = <p className='text-red-500'>There is no clients matching in this rank</p>
    }
    let platinumMessage;
    if (platinumFilter.length) {
        platinumMessage = <p className='text-green-500'>There are {platinumFilter.length}  clients in this rank</p>
    } else {
        platinumMessage = <p className='text-red-500'>There is no clients matching in this rank</p>
    }

    let premiumMessage
    if (premiumFilter.length) {
        premiumMessage = <p className='text-green-500'>There are {premiumFilter.length}  clients in this rank</p>
    } else {
        premiumMessage = <p className='text-red-500'>There is no clients matching in this rank</p>
    }
    return (
        <div>
            {/* {text} */}
            <h1 className='text-center text-3xl sp-style text-green-700 mt-10'> Discount Packages</h1>
            <h1 className='text-center text-3xl sp-style text-orange-500 mt-10'>Bronze</h1>
            <div className="overflow-x-auto mt-10">
                {bronzeMessage}
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Order Amount</th>
                            <th>Give Discount</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bronzeFilter?.map((send, index) =>
                                <ClientDiscount
                                    key={send._id}
                                    send={send}
                                    index={index}

                                />)
                        }
                    </tbody>
                </table>
            </div>
            <h1 className='text-center text-3xl sp-style text-yellow-700 mt-10'>Gold</h1>
            <div className="overflow-x-auto mt-10">
                {goldMessage}
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Order Amount</th>
                            <th>Give Discount</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            goldFilter?.map((send, index) =>
                                <ClientDiscount
                                    key={send._id}
                                    send={send}
                                    index={index}

                                />)
                        }
                    </tbody>
                </table>
            </div>
            <h1 className='text-center text-3xl sp-style text-blue-700 mt-10'>Platinum</h1>
            <div className="overflow-x-auto mt-10">
                {platinumMessage}
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Order Amount</th>
                            <th>Give Discount</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            platinumFilter?.map((send, index) =>
                                <ClientDiscount
                                    key={send._id}
                                    send={send}
                                    index={index}

                                />)
                        }
                    </tbody>
                </table>
            </div>
            <h1 className='text-center text-3xl sp-style text-cyan-700 mt-10'>Premium</h1>
            <div className="overflow-x-auto mt-10">
                {premiumMessage}
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Order Amount</th>
                            <th>Give Discount</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            premiumFilter?.map((send, index) =>
                                <ClientDiscount
                                    key={send._id}
                                    send={send}
                                    index={index}

                                />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default AllClient;