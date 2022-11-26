import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Contact from '../../Contact/Contact';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Categories from '../Categories/Categories';
import Heros from '../Heros/Heros';
import Service from '../Service/Service';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-5'>
            <div className='max-w-[1440px] mx-auto'>
                <Heros></Heros>
                <AdvertiseProduct></AdvertiseProduct>
                <Categories></Categories>
                <Service></Service>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;