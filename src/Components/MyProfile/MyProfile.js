import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Spinner from '../Spinner/Spinner';
import { auth } from '../../firebase.init';


const MyProfile = () => {
    const [signedUser, loading, error] = useAuthState(auth);
    const [user, setUser] = useState([]);
    // console.log(user,'user')
    // console.log(signedUser,'signedUser')
    const navigate = useNavigate();
    // console.log(user)
    if (loading) {
        return <Spinner />
    }

    // useEffect(() => {
    const getItems = async () => {
        const email = signedUser?.email
        const url = `http://localhost:4000/user/${email}`
        // console.log(url);
        try {
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            // console.log(data, "data");
            setUser(data)

        } catch (error) {
            // console.log(error);
            if (error.response.status === 403 || error.response.status === 401) {
                signOut(auth)
                navigate('/signin')
            }
            // alert(error.message)
        }
    }
    getItems()
    return (
        <div>
            {
                user?.map(singleUser => <ProfileCard singleUser={singleUser} key={singleUser._id}></ProfileCard>)
            }
        </div>
    );
};

export default MyProfile;