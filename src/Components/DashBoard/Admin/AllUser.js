import React from 'react';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';

import Spinner from '../../Spinner/Spinner'
import ClientDiscount from './ClientDiscount';
import UserRow from './UserRow';

const AllUser = () => {


    const { data: allUsers, isLoading, refetch } = useQuery('allUsers', () => fetch(`http://localhost:4000/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }
    // console.log(allUsers)
    const adminList = allUsers.filter(user => user.role == 'admin')
    const userList = allUsers.filter(user => user.role !== 'admin')

    let user;
    if (userList.length == 0) {
        user = <h2 className='text-4xl mb-5 sp-style text-red-700 text-center mt-8'>There is no user in your website</h2>
    } else {

        user =
            <>
                <h2 className='text-2xl text-center mt-8'>Total User : {userList.length}</h2>
                <div className="overflow-x-auto mt-10 mb-8">
                    <table className="table w-full">

                        <thead>
                            <tr className="text-center">
                                <th>No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Update </th>
                                {/* <th>Give Discount</th> */}

                            </tr>
                        </thead>

                        <tbody>

                            {
                                userList?.map((user, index) => <UserRow
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></UserRow>)
                            }

                        </tbody>
                    </table>



                </div>
            </>

    }
    return (
        <div >
            <h2 className='text-2xl text-center mt-8'>Total Admin : {adminList.length}</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className="text-center">
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>

                        </tr>
                    </thead>

                    <tbody>

                        {
                            adminList?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>



            </div>

            {user}

        </div>
    );
};

export default AllUser;