import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';



const DashBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [user] = useAuthState(auth)
console.log(user,'user from dashboard')
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className='mt-5 text-3xl font-mono text-red-900 ml-5'>

        Welcome To Your DashBoard  <span className='text-blue-900 sp-style '>{user.displayName}.</span>
          </h2>
        <div className="align-right">
          <div className="text-right">
            <label for="my-drawer-2" className=" sp-style text-sm btn btn-primary drawer-button lg:hidden"> Open DashBoard</label>
          </div>
        </div>

        <Outlet></Outlet>


      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

         {
            admin ? <>
              <li className='text-primary sp-style font-bold text-xl'>
                <Link to='/dashboard/user'>All User </Link></li>
              <li className='text-primary sp-style font-bold text-xl'>
                <Link to='/dashboard/manageOrder'>Manage-Order </Link></li>
              <li className='text-primary sp-style font-bold text-xl'>
                <Link to='/dashboard/discount'>Discount List </Link></li>
                
              
                <li className='text-primary sp-style font-bold text-xl'>
                <Link to='/dashboard/allClient'>Give Discount</Link></li>

              <li className='text-primary sp-style font-bold text-xl'>
                <Link to='/dashboard/manageTools'>Manage-Package </Link></li>
              <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/add'>Add Package </Link></li>

             </>
              :
              <> 

                <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/myorder'>My Order </Link></li>

                <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/review'>Add Review </Link></li>

               </> 
          } 
          <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/profile'>My Profile </Link></li>





        </ul>

      </div>
    </div>
  );
};

export default DashBoard;