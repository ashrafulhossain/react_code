// import React from 'react';
import happy1 from '../../happy-1.png'
import happy2 from '../../happy-2.jpg'
import happy3 from '../../happy-3.jpg'
import happy4 from '../../happy-4.jpg'
import happy5 from '../../happy-5.jpg'
import happy6 from '../../happy-6.jpg'
import happy7 from '../../happy-7.jpg'
import happy8 from '../../happy-8.jpeg'
import happy9 from '../../con-1.png'
import happy10 from '../../con-2.jpg'
import happy11 from '../../con-3.jpg'
import happy12 from '../../con-4.jpg'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./BestProject.module.css";

// import required modules
import { EffectCards } from "swiper";
const BestProject = () => {
    return (
     

        <div className='mt-10 
           w-2/5 md:w-100 mx-auto 
        }'>
            
            <div className="mt-10">
            <h1 className="text-center  text-sky-700 text-2xl">Wedding </h1>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper mt-10"

            >
                <SwiperSlide><img src={happy1} className="rounded-t-lg w-2/3 " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy2} className="rounded-t-lg w-2/3 " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy3} className="rounded-t-lg w-2/3  " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy4} className="rounded-t-lg w-2/3  " alt='' /></SwiperSlide>

            </Swiper>
            </div>
            <div className="mt-10">
            <h1 className="text-center  text-sky-700 text-2xl">BirthDay </h1>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper mt-10"

            >
                <SwiperSlide><img src={happy5} className="rounded-t-lg w-2/3 " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy6} className="rounded-t-lg w-2/3 " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy7} className="rounded-t-lg w-2/3  " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy8} className="rounded-t-lg w-2/3  " alt='' /></SwiperSlide>

            </Swiper>
            </div>
            <div className="mt-10">
            <h1 className="text-center  text-sky-700 text-2xl">Conference</h1>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper mt-10"

            >
                <SwiperSlide><img src={happy9} className="rounded-t-lg w-2/3 " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy10} className="rounded-t-lg w-2/3 " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy11} className="rounded-t-lg w-2/3  " alt='' /></SwiperSlide>
                <SwiperSlide><img src={happy12} className="rounded-t-lg w-2/3  " alt='' /></SwiperSlide>

            </Swiper>
            </div>
          
        </div>
    );
};

export default BestProject;