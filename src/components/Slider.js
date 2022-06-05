import React from 'react';
import shoe1 from '../asset/1.jpg'
import shoe3 from '../asset/3.jpg'
import shoe4 from '../asset/4.jpg'
import shoe5 from '../asset/5.jpg'

const Slider = () => {
    return (
        <div class="carousel rounded-box mt-20">
            <div id="slide1" relative class="carousel-item  w-1/2">
                <img src={shoe1} alt="Shoe" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide7" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" relative class="carousel-item  w-1/2">
                <img src={shoe4} alt="Shoe" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" relative class="carousel-item  w-1/2">
                <img src={shoe3} alt="Shoe" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" relative class="carousel-item  w-1/2">
                <img src={shoe4} alt="Shoe" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide7" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" relative class="carousel-item  w-1/2">
                <img src={shoe5} alt="Shoe" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" relative class="carousel-item  w-1/2">
                <img src={shoe4} alt="Shoe" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide7" relative class="carousel-item  w-1/2">
                <img src={shoe3} alt="Shoe" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;