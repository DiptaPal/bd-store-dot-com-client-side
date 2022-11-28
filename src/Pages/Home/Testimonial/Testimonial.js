import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


const Testimonial = () => {
    return (
        <div className='my-20'>
            <section className="bg-white">
                <div className="container py-10 mx-auto">
                    <div className="mt-6 md:flex md:items-center md:justify-between relative">
                        <div>
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl">
                                What our clients are saying
                            </h1>

                            <div className="flex mx-auto mt-6">
                                <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-primary rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-primary rounded-full"></span>
                            </div>
                        </div>
                    </div>


                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        autoplay={{
                            delay: 5000,
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
                        modules={[Autoplay]}
                        className='mt-8 xl:mt-12 overflow-hidden'
                    >
                        <SwiperSlide className='overflow-hidden'>
                            <div className="p-8 border border-gray-500 rounded-lg" data-aos="fade-right" data-aos-duration="1000">
                                <p className="leading-loose text-gray-700">
                                    “ The product provided was absolutely first class and i am very happy with the result. Highly Recommended! ”
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800">Robert</h1>
                                        <span className="text-sm text-gray-700">CTO, Robert Consultency</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='overflow-hidden'>
                            <div className="p-8 bg-primary border border-transparent rounded-lg" data-aos="fade-down" data-aos-duration="1000">
                                <p className="leading-loose text-white">
                                    “ They offer a resale products which is really helpful . Very much recommend! ”
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-white">Jeny Doe</h1>
                                        <span className="text-sm text-blue-200">CEO, Jeny Consultency</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='overflow-hidden'>
                            <div className="p-8 border border-gray-500 rounded-lg border-gary-500" data-aos="fade-left" data-aos-duration="1000">
                                <p className="leading-loose text-gray-700">
                                    “ Very impressed !! Ordering was pleasant and the representative was extremely informed. ”
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800">Ema Watson </h1>
                                        <span className="text-sm text-gray-700">Marketing Manager at Stech</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div >
    );
};

export default Testimonial;