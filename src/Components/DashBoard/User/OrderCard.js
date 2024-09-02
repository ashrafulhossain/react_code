import { faBan, faCheck, faMoneyCheckAlt, faStar, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ o, index, refetch, sendEvent, setModal }) => {
  console.log(o, 'orderlist')
  const { _id,decoration,hinduStage,holudStage, Address,Photography, name, email, phone, sendPackage, sendPrice, adults, child, checkin, startTime, description, image, transactionId, paid } = o
  
  let photography;
  if (Photography) {
    photography = {Photography};
  }
  else {
    photography = 'own Photography';

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

      
      <td>
        {
           (sendPrice && !o.paid) &&   
          <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-red-700 btn modal-button ">
              <div>
              Cancel
            <FontAwesomeIcon className='pl-2'icon={faTrashRestoreAlt}></FontAwesomeIcon>
              </div>
         
              
              </label>
         
        
          }
            {(sendPrice && o.paid) && <span className='text-red-700 sp-style text-center text-xl font-bold' >
            To Cancel booking,Contact us
           
                    </span>} 
          
 </td>
  


      <td>
        {
          (sendPrice && !o.paid) && <Link to={`/dashboard/payment/${_id}`}>

            <button className="text-white bg-cyan-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">
              <div>
              Payment
              <FontAwesomeIcon className='pl-2' icon={faMoneyCheckAlt}></FontAwesomeIcon>
              </div>
             
            </button>
          </Link>

        }

        {(sendPrice && o.paid) && <span className='text-green-700 sp-style text-center text-xl font-bold' >
          Already  Paid <FontAwesomeIcon className='pl-2' icon={faCheck}></FontAwesomeIcon>
        </span>}
      </td>
      <td>{transactionId
        ? <span className="text-amber-700 font-bold">{transactionId} </span> : <span className='text-red-700 sp-style font-bold text-xl'>Pay First </span>

      }
      </td>




    </tr>
  );
};

export default OrderCard;