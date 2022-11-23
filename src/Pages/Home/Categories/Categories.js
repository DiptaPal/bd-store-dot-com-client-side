import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import slider2 from '../../../assets/Slider/2.png'
import slider3 from '../../../assets/Slider/3.png'
import slider4 from '../../../assets/Slider/4.png'
import Category from '../Category/Category';

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
const Categories = () => {
    return (
        <div className='mt-44'>
            <h1 className='text-2xl font-bold text-center uppercase'>All Categories</h1>
            <hr className='w-56 bg-primary pt-1 mx-auto' />
            <div className='mt-10'>
                <Swiper
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
                                <Category slider={slider}>

                                </Category>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;