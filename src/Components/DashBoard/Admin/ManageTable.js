import { faBan, faCheck, faMoneyCheckAlt, faShippingFast, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';

const ManageTable = ({ o, index, refetch, sendEvent, setModal, isLoading }) => {

  //console.log(o)

  const { _id,decoration,hinduStage,holudStage, paid, Photography, transactionId, Address, name, email, phone, sendPackage, sendPrice, adults, child, checkin, startTime, description, image } = o

  const [user] = useAuthState(auth)
 
  if (isLoading) {
    return <p>Please wait a moment</p>
  }

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
  let hinduwrite;
  if (hinduStage == 'choose') {
    hinduwrite=<p>No need</p>
  }
  else {
    hinduwrite = holudStage
  }
  let holudwrite;
  if (holudStage == 'choose') {
    holudwrite=<p>No need</p>
  }
  else {
    holudwrite= holudStage
  }
  return (
    <tr className='text-center'>
      <th>{index + 1}</th>
      <td><div class="avatar">
        <div class="w-20 rounded">
          <img src={image} alt="Tailwind-CSS-Avatar-component" />
        </div>
      </div></td>

      <td><span className="font-bold">{email}</span></td>
      <td><span className="font-bold">{name}</span></td>
      <td><span className="font-bold">{phone}</span></td>
      <td><span className="font-bold">{Address}</span></td>
      <td><span className="font-bold">{sendPackage}</span></td>
      <td><span className="font-bold">{decoration}</span></td>
      <td><span className="font-bold">{holudwrite}</span></td>
      <td><span className="font-bold">{hinduwrite}</span></td>
     
      <td><span className="font-bold">{sendPrice}</span></td>
      <td><span className="font-bold">{adults}</span></td>

      <td><span className="font-bold">{Photography}</span></td>
      <td><span className="font-bold">{checkin}</span></td>
      <td><span className="font-bold">{startTime}</span></td>
      <td> <p title={description} className="text-sm font-bold">{description.slice(0, 30)}...</p></td>
      {/* <td>
          <form onSubmit={giveDiscount}>
          <input type='text' name='discount' required/>
<input type='submit' className='pl-5 pr-5 ml-5 bg-slate-500 text-white' value='Discount'/>
          </form>

           </td> */}

      <td>
        {
          paid ? <p className="text-green-700 text-2xl font-bold sp-style">Yes</p> : <p className='text-red-700 text-2xl sp-style font-bold'>Not Yet</p>
        }
      </td>
      <td>
        {
          transactionId && <p className="text-orange-500 text-2xl font-bold sp-style">{transactionId}</p>
        }
      </td>




    </tr>
  );
};

export default ManageTable;