import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import './Review.module.css'
import SingleReview from "./SingleReview";
export default function App() {
    const [reviewes, setReviewes] = useState([]);
    const copyReview = [...reviewes]
    const reverseReview = copyReview.reverse()
    useEffect(() => {
        fetch("http://localhost:4000/reviews/")
            .then(res => res.json())
            .then(res => {
                setReviewes(res);
            });
    }, [])
    // console.log(reviewes);
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    reverseReview?.map(singleReview => <SwiperSlide key={singleReview._id}>
                        <SingleReview
                            singleReview={singleReview}
                        />

                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
}