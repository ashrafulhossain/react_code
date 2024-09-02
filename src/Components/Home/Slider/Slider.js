import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax } from 'swiper';


//banner
import banner1 from '../../../banner-1.jpg'
import banner2 from '../../../banner-2.jpg'
import banner3 from '../../../banner-3.jpg'
import banner4 from '../../../banner-4.jpg'
import banner5 from '../../../banner-5.jpg'
import banner6 from '../../../banner-6.jpg'
const Slider = () => {
  return (
    <div className='slider-body '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

          {/* <img className='size' src={banner1} alt='' /> */}
          <div className="image-slide-bgThree flex flex-col items-center justify-center">

            <h1 className="text-3xl px-2 md:px-0 md:text-6xl sp-style font-bold text-white text-center">The best venue for your next event</h1>
            <h5 className="text-sm  px-2 md:px-0 md:text-2xl sp-style font-bold text-white text-center mt-5">Having more than 5 years well experience to organize events.</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img className='size' src={banner2} alt='' /> */}
          <div className="image-slide-bgTwo flex flex-col items-center justify-center">

            <h1 className="text-3xl px-2 md:px-0 md:text-5xl sp-style font-bold text-white text-center">Most beautiful convention center In Chittagong

            </h1>
            <h1 className="text-sm  px-2 md:px-0 md:text-2xl sp-style font-bold text-white text-center mt-5">World class decorated place. We proving best secure and well management.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img className='size' src={banner3} alt='' /> */}
          <div className="image-slide-bgOne flex flex-col items-center justify-center">
         
            <h1 className="text-3xl px-2 md:px-0 md:text-5xl sp-style font-bold text-white text-center">The best organizer for your next event</h1>
            <h1 className="text-sm  px-2 md:px-0 md:text-xl sp-style font-bold text-white text-center mt-5">We successfully organized more than 1000 of various events. We believe, we can provide you the best experience than others does.</h1>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide><img src={banner4}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner5}alt=''/></SwiperSlide>
          <SwiperSlide><img src={banner6}alt=''/></SwiperSlide> */}

      </Swiper>
    </div>
  );
};

export default Slider;