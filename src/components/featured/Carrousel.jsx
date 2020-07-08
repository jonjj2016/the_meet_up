import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div
      className='carrousel_wrapper'
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden',
      }}>
      <Slider {...settings}>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
              height: `${window.innerHeight}px`,
            }}></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80')`,
              height: `${window.innerHeight}px`,
            }}></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url('https://images.unsplash.com/photo-1560523159-fbe43c0b465f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
              height: `${window.innerHeight}px`,
            }}></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
