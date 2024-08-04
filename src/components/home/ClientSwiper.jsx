'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import basketImage from "../../../public/images/basket.png";
import Feedback from "@/components/home/Feedback";
const images = [
    { src: basketImage, alt: "Basket Image 1" },
    { src: basketImage, alt: "Basket Image 2" },
    { src: basketImage, alt: "Basket Image 3" },
    { src: basketImage, alt: "Basket Image 1" },
    { src: basketImage, alt: "Basket Image 2" },
    { src: basketImage, alt: "Basket Image 3" },
    { src: basketImage, alt: "Basket Image 1" },
    { src: basketImage, alt: "Basket Image 2" },
    { src: basketImage, alt: "Basket Image 3" },
];

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                style={{
                    '--swiper-navigation-color': '#be2596',
                    '--swiper-pagination-color': '#be2596',
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {images.map((image, index) => (
                <SwiperSlide key={index} className="myFeedback mx-auto h-[40rem]">
                    <Feedback
                        // src={image.src}
                        // className="bg-white"
                        // width={300}
                        // height={300}
                        // alt={image.alt}
                    />
                </SwiperSlide>
            ))}
                {/*<div className="autoplay-progress" slot="container-end">*/}
                {/*    <svg viewBox="0 0 48 48" ref={progressCircle}>*/}
                {/*    </svg>*/}
                {/*    <span ref={progressContent}></span>*/}
                {/*</div>*/}
            </Swiper>
        </>
    );
}
