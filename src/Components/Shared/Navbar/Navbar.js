import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import image from '../../../no-image.png'
//import NavLink from '../../NavLink/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo-6.jpg'
import './Navbar.css'
import { Transition } from '@headlessui/react';
import { toast } from 'react-toastify';


const Navbar = () => {

    const [user] = useAuthState(auth)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        toast.success('Sign-Out Success.Bye Bye!!')


    };
    //console.log(user)


    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;
    

    return (


        <div className=' sticky top-0 z-50 shadow-sm'>


            <nav className="bg-[#ffffff] py-4  ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">

                                <div className="flex justify-center items-center">
                                    <img
                                        className='w-10 h-10 rounded-full ' src={logo} alt="Workflow" />

                                    <h1 style={{ color: "#00112B" }} className='font-bold sp-style '>Crystal_Palace ~ Convention Hall</h1>
                                </div>
                            </div>
                            <div className="hidden md:flex justify-between md:ml-auto">
                                <div className="nav-item ml-10 flex items-baseline space-x-4 text-lg">
                                    <NavLink
                                        to="/"
                                        className=" 
                                        font-bold sp-style nav-btn px-3 py-2 rounded-md text-sm "
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/services"
                                        className="
                                         sp-style
                                        nav-btn px-3 py-2 rounded-md text-sm font-bold"
                                    >
                                        Package
                                    </NavLink>
                                    <NavLink
                                        to="/menu"
                                        className="
                                         sp-style
                                        nav-btn px-3 py-2 rounded-md text-sm font-bold"
                                    >
                                       Food Menu
                                    </NavLink>




                                    <NavLink
                                        to='/photography'
                                        className="
                                         sp-style
                                        nav-btn px-3 py-2 rounded-md text-sm font-bold"
                                    >
                                        PhotoGraphy
                                    </NavLink>
                                    {/* <NavLink
                                        to='/faq'
                                        className="
                                         sp-style
                                        nav-btn px-3 py-2 rounded-md text-sm font-bold"
                                    >
                                        FAQ
                                    </NavLink> */}
                                    <NavLink
                                        to='/contact'
                                        className="
                                         sp-style
                                        nav-btn px-3 py-2 rounded-md text-sm font-bold"
                                    >
                                        Contact
                                    </NavLink>
                                    <NavLink
                                        to='/about'
                                        className="
                                         sp-style
                                   mt-2     nav-btn px-3 py-2 rounded-md text-sm font-bold"
                                    >
                                        About
                                    </NavLink>
                                 


                                    {
                                        user &&
                                        <>

                                            <NavLink className="nav-btn px-3 py-2 mt-2 sp-style rounded-md text-sm font-bold" to="/dashboard">DashBoard</NavLink>


                                        </>


                                    }
                                       <NavLink
                                        to='/checkout'
                                        className="
                                         sp-style
                                   mt-2   bg-blue-700  nav-btn px-3 py-2 rounded-md text-sm font-bold"
                                    >
                                       <span className="text-white">Book-Now</span> 
                                    </NavLink>

                                </div>
                                {
                                    user ?
                                        <>
                                          
                                            <button onClick={logout} className=' border-2 border-red-700  hover:text-red-700 transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2 '>Sign Out <FontAwesomeIcon icon={faSignOut} /></button>
                                        </>
                                        :
                                        <button className='border-2 border-blue-700  hover:text-blue-700 transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2'><Link to="/signin">Sign In <FontAwesomeIcon icon={faSignIn} /></Link> </button>

                                }

                            </div>
                        </div>
                        <div className="  -mr-2 flex md:hidden">
                            {
                                user ?
                                    <>
                                       
                                        <button onClick={logout} className=' border-2 border-red-700 hover:text-red-700 transition-all transition-duration:150ms font-medium hover:font-medium   flex justify-between   px-2 items-center  rounded-md '>Sign Out <FontAwesomeIcon className="ml-2" icon={faSignOut} /></button>
                                    </>

                                    :
                                    <button className='border-2 border-blue-700    hover:text-blue-700 transition-all transition-duration:150ms font-medium hover:font-medium p-1   flex rounded-md '><Link to="/signin">Sign In <FontAwesomeIcon icon={faSignIn} /></Link> </button>

                            }


                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-400 transform"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink
                                    to="/"
                                    className="
                                    
                                     sp-style
                                    hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    Home
                                </NavLink>



                                <NavLink
                                    to="/services"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md sp-style text-base font-bold"
                                >
                                    Package
                                </NavLink>
                                <NavLink
                                    to="/menu"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md sp-style text-base font-bold"
                                >
                                    Menu
                                </NavLink>





                                {
                                    user &&
                                    <>
                                        <NavLink className="text-black hover:bg-gray-700 hover:text-white block px-3  sp-style py-2 rounded-md text-base font-bold" to="/dashboard">Dashboard</NavLink>

                                    </>


                                }
                                <NavLink
                                    to="/contact"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md sp-style text-base font-bold"
                                >
                                    Contact
                                </NavLink>
                                <NavLink
                                    to="/photography"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md sp-style text-base font-bold"
                                >
                                    PhotoGraphy
                                </NavLink>
                                {/* <NavLink
                                    to="/faq"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md sp-style text-base font-bold"
                                >
                                    FAQ
                                </NavLink> */}
                                <NavLink
                                    to="/about"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md sp-style text-base font-bold"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/checkout"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md bg-blue-700 sp-style text-base font-bold"
                                >
                                    <span className='text-white'>Book-Now</span>
                                </NavLink>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </div>
    );
};

export default Navbar;
