import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import unknownImage from '../../no-image.png'

const SingleReview = ({ singleReview }) => {
    // console.log(singleReview)
    const { user, customRating, review } = singleReview;
    const img = user?.photoURL
    let myIcon;
if(customRating==4){
    myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
     </div>
}


else if (customRating == 3) {
  myIcon =  <>
            <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>

    </>
   
}
else if (customRating == 3.5) {
  myIcon=  <>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStarHalfStroke}></FontAwesomeIcon>  

</>
}
    
else if (customRating == 2) {
 myIcon =   <>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>

</>
}
else if (customRating == 2.5) {
    myIcon =   <>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStarHalfStroke}></FontAwesomeIcon>
</>
    }

else if (customRating == 1) {
    myIcon =   <>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
 
</>
    }
    else  {
        myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
   </div>
    }
  
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
           
                {
                    img ?
                    <img className="w-1/2 rounded-xl mx-auto" src={img} alt="Shoes"  />
                        :
                        <img className="w-1/2 rounded-xl mx-auto" src={unknownImage} alt="Shoes"  />
              }
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title sp-style"><i>{user?.displayName}</i></h2>
                <h1 className = "opacity-10">Posted On 30th May,2024</h1>
                <p className='text-center'>{myIcon}</p>
                <blockquote title={review} className='p-4 mt-3 bg-gray-200 italic border-l-4 rounded-lg text-neutral-600 border-neutral-500 quote w-4/6 mx-auto mb-7'>`{review.slice(0, 50)}`</blockquote>

            </div>
        </div>
    );
};

export default SingleReview;