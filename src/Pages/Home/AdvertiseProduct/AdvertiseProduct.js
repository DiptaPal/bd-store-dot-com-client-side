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
            const res = await fetch(`https://bd-store-dot-com-server-side.vercel.app/advertiseProduct`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
               }
            })
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        <Loader></Loader>
    }
    return (
        <>
            {
                advertiseProduct.length > 0 &&
                <div className='mt-44 mb-10'>
                    <h1 className='text-2xl font-bold text-center uppercase'>Advertisement</h1>
                    <hr className='w-56 bg-primary pt-1 mx-auto' />
                </div>
            }
            {
                advertiseProduct.length === 1 &&
                    <div className='max-w-xl mx-auto'>
                        {
                            advertiseProduct.map(addProduct => <div className="cd1 w-full h-80 relative overflow-hidden cursor-pointer  shadow-lg border-2" key={addProduct._id}>
                                <div className='flex justify-center items-center'>
                                    <img className='w-full h-80 object-cover object-center' src={addProduct.productImage} alt="" />
                                </div>
                                <div className="cd-body1 w-full h-full absolute top-0 bg-gray-700 opacity-90 flex flex-col gap-2 items-center justify-center p-2">

                                    <h2 className="card-title text-white text-center">
                                        {addProduct.productName}
                                    </h2>
                                    <p className='text-white text-center px-3'>{addProduct.description}</p>
                                    <h3 className='text-xl font-semibold text-white'>Resale Price: <span className='text-secondary'>${addProduct.resalePrice}</span></h3>
                                    <p className='text-white'>Original Price: <span className='line-through text-secondary'>${addProduct.originalPrice}</span></p>
                                </div>
                            </div>)
                        }
                    </div>
            }
            {
                advertiseProduct.length === 2 &&
                <div className='max-w-5xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            advertiseProduct.map(addProduct => <div className="cd1 w-full h-80 relative overflow-hidden cursor-pointer  shadow-lg border-2" key={addProduct._id}>
                                <div className='flex justify-center items-center'>
                                    <img className='w-full h-80 object-cover object-center' src={addProduct.productImage} alt="" />
                                </div>
                                <div className="cd-body1 w-full h-full absolute top-0 bg-gray-700 opacity-90 flex flex-col gap-2 items-center justify-center p-2">

                                    <h2 className="card-title text-white text-center">
                                        {addProduct.productName}
                                    </h2>
                                    <p className='text-white text-center px-3'>{addProduct.description}</p>
                                    <h3 className='text-xl font-semibold text-white'>Resale Price: <span className='text-secondary'>${addProduct.resalePrice}</span></h3>
                                    <p className='text-white'>Original Price: <span className='line-through text-secondary'>${addProduct.originalPrice}</span></p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            }


            {
                advertiseProduct.length >= 3 &&
                <div>
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