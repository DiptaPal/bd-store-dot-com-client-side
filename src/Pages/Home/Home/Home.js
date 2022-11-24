import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Categories from '../Categories/Categories';
import Heros from '../Heros/Heros';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-5'>
            <div className='max-w-[1440px] mx-auto'>
                <Heros></Heros>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;