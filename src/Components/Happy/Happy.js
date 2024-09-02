import React from 'react';
import image1 from '../../happyMoments/1220-OAB-SWEATER-ICE-SKATE-PARTY-01.jpeg'
import image2 from '../../happyMoments/birthday-celebration-500x500.jpeg'
import image3 from '../../happyMoments/istockphoto-1139957268-170667a.jpeg'
import image4 from '../../happyMoments/istockphoto-1139957268-170667a.jpeg'
import image5 from '../../happyMoments/istockphoto-1145223597-612x612.jpeg'
import image6 from '../../happyMoments/1220-OAB-SWEATER-ICE-SKATE-PARTY-01.jpeg'
const Happy = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
            <img src={image1} alt=''/>
            <img src={image2} alt=''/>
            <img src={image3} alt=''/>
            <img src={image4} alt=''/>
            <img src={image5} alt=''/>
            <img src={image6} alt=''/>
            
        </div>
    );
};

export default Happy;