import React from 'react';
import { toast } from 'react-toastify';

const ClientDiscount = ({ send, index, }) => {
    const { name, email, sendPrice, phone } = send;


    const giveDiscount = (e) => {
        e.preventDefault()
        const sendEmail = email;
        const sendDiscount = e.target.discount.value
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
                    toast.success(`${sendDiscount}% , discount sent successfully`);

                    e.target.reset()
                }
                else {
                    toast.error('Failed to give discount')
                }
            }
            )
        e.target.reset()
    }
    let offerSent = <form onSubmit={giveDiscount}>
        <input type='text' name='discount' required />
        <input type='submit' className='pl-5 pr-5 ml-5 bg-slate-500 text-white' value='Confirm' />
    </form>;


    return (

        <tr className='text-center'>
            <th >{index + 1}</th>


            <td><span className="font-bold">{name}</span></td>
            <td><span className="font-bold">{email}</span></td>
            <td><span className="font-bold">{phone}</span></td>
            <td><span className="font-bold">{sendPrice}</span></td>

            <td>
                {
                    offerSent
                }


            </td>
        </tr>

    );
};

export default ClientDiscount;