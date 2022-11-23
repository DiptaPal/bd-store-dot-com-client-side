import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Heros from '../Heros/Heros';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Heros></Heros>
        </div>
    );
};

export default Home;