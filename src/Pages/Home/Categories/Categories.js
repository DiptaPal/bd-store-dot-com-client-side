import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import slider2 from '../../../assets/Category/Apple-logo.png'
import slider3 from '../../../assets/Category/dell-logo.png'
import slider4 from '../../../assets/Category/hp-logo.jpg'
import Category from '../Category/Category';

const categories = [
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
        <div className='mt-44 mb-32'>
            <h1 className='text-2xl font-bold text-center uppercase'>All Categories</h1>
            <hr className='w-56 bg-primary pt-1 mx-auto' />
            <div className='mt-10'>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
                    {
                        categories.map(slider =>
                            <Category
                                key={slider.id}
                                slider={slider}>

                            </Category>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;