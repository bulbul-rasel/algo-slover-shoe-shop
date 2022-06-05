import React from 'react';
import Extra from './Extra';
import Items from './Items';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Items></Items>
            <Extra></Extra>
        </div>
    );
};

export default Home;