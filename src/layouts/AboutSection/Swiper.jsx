import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { A11y, Pagination } from 'swiper';

const SwiperView = () => {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      <SwiperSlide>
        <img src={require('../../assets/images/about1.jpg')} alt="blend" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../assets/images/about2.JPG')} alt="blend" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../assets/images/about3.JPG')} alt="blend" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../assets/images/about4.JPG')} alt="blend" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../assets/images/about5.JPG')} alt="blend" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../assets/images/about7.JPG')} alt="blend" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperView;
