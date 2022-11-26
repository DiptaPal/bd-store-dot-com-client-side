import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Contact from '../../Contact/Contact';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Categories from '../Categories/Categories';
import Heros from '../Heros/Heros';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-5'>
            <div className='max-w-[1440px] mx-auto'>
                <Heros></Heros>
                <AdvertiseProduct></AdvertiseProduct>
                <Service></Service>
                <Categories></Categories>
                <Testimonial></Testimonial>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;