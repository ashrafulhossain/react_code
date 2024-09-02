import { faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import noImage from '../../../no-image.png'
const UserRow = ({ user, index, refetch }) => {
    const { email, discount, name, img, role } = user

    //console.log(user);
    // useEffect(() => {

    // },[email])
    const giveDiscount = (e) => {

        const sendEmail = email;
        console.log(sendEmail);
        const sendDiscount = 0;
        console.log(sendDiscount, sendEmail);
        fetch(`http://localhost:4000/discount/${sendEmail}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ sendDiscount, sendEmail })
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted, 'inser');
                // console.log(inserted,'inser');
                if (inserted.modifiedCount > 0) {
                    toast.success(`you remove the discount successfully`);


                }
                else {
                    toast.error('Failed to remove discount')
                }
            }
            )

    }
    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>
                {
                    img ? <div class="avatar">
                        <div class="w-20 rounded">
                            <img src={img} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                        :
                        <div class="avatar">
                            <div class="w-20 rounded">
                                <img src={noImage} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                }


            </td>
            <td><span className="font-bold">{name}</span></td>
            <td><span className="font-bold">{email}</span></td>
            <td><span className="font-bold">{discount}%</span></td>
            <td>
                <label onClick={giveDiscount} className="bg-red-700 btn modal-button">
                    <FontAwesomeIcon icon={faTrashRestoreAlt}></FontAwesomeIcon>

                </label>
            </td>

        </tr>

    );
};

export default UserRow;