import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import message from '../../messenger.png'
const Chat = () => {
    return (
        <div className="chat z-50">
            <div className='text-right mr-5'>
                <button >
                    <FontAwesomeIcon
               style={{borderRadius:"50px"}}
            className='text-2xl bg-cyan-900 text-white p-5 ' icon={faComment} /> 
                 
                    {/* <img src={message} alt="arrow" className="w-44 "/>
            </a> */}

                </button>
            </div>
        </div>


    );
};

export default Chat;