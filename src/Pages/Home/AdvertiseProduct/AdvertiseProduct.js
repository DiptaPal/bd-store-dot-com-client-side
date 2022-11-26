import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from '@tanstack/react-query';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import MakeAdvertise from './MakeAdvertise';
import Loader from '../../Shared/Loader/Loader';



const AdvertiseProduct = () => {

    const { data: advertiseProduct = [], isLoading } = useQuery({
        queryKey: ['advertiseProduct'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertiseProduct`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        <Loader></Loader>
    }
    return (
        <>  {
            advertiseProduct.length > 0 &&
            <div className='mt-44 mb-32'>
                <h1 className='text-2xl font-bold text-center uppercase'>Advertisement</h1>
                <hr className='w-56 bg-secondary pt-1 mx-auto' />
                <div className='mt-10'>
                    <div>
                        <div className=''>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    }
                                }}
                                navigation={true}
                                pagination={{
                                    clickable: true
                                }}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    advertiseProduct.map(adProduct =>
                                        <SwiperSlide key={adProduct._id}>
                                            <MakeAdvertise
                                                adProduct={adProduct}
                                            ></MakeAdvertise>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default AdvertiseProduct;