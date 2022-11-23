import React, { useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import slider2 from '../../../assets/Slider/2.png'
import slider3 from '../../../assets/Slider/3.png'
import slider4 from '../../../assets/Slider/4.png'
import Hero from '../Hero/Hero';
import './Heros.css'

const heroData = [
    {
        image: slider2,
        id: '02'
    },
    {
        image: slider3,
        id: '03'
    },
    {
        image: slider4,
        id: '04'
    }
]

const Heros = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <div className='relative w-full z-0 mb-24'>
            <button
                ref={prevRef}
                className='absolute p-[10px] sm:p-[18px] bg-black rounded-full -bottom-16 right-20 sm:right-24 z-50'
            >
                <span className='text-center text-xl text-white opacity-100'>
                    <AiOutlineArrowLeft />
                </span>
            </button>
            <button
                ref={nextRef}
                className='absolute p-[10px] sm:p-[18px] mr-5 bg-primary rounded-full -bottom-16 right-0 z-50'
            >
                <span className='text-center text-xl text-white'>
                    <AiOutlineArrowRight />
                </span>
            </button>
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="">

                {
                    heroData.map(slider =>
                            <SwiperSlide key={slider.id} >
                                <Hero slider={slider}>

                                </Hero>
                            </SwiperSlide>
                        )
                }
            </Swiper>
        </div>
    );
};

export default Heros;