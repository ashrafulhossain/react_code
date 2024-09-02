import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div >

            <footer className="bg-[#04193a] ">
                
                <div className="py-6 px-4 bg-[#00112B] md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center">© 2024 <Link to="https://www.facebook.com/profile.php?id=100013452185380">All Rights Reserved <span className='text-2xl sp-style text-yellow-500'>Crystal</span> <span className='text-2xl text-yellow-500'>P</span><span className='text-yellow-500'>alace</span></Link>. 
                    </span>
                   
                </div>
            </footer>

        </div>
    );
};

export default Footer;