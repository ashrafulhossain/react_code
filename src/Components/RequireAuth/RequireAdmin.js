//import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
//import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';


import { signOut } from 'firebase/auth';
import useAdmin from '../../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';
const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const[admin,adminLoading]=useAdmin(user)
  const location = useLocation();
//const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
  //console.log(location);
 // console.log(loading);
  if (loading ||adminLoading) {
    return <Spinner></Spinner>
  }
  if (!user||!admin) {
    signOut(auth)
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  else { return children }

  
 
};

export default RequireAdmin;