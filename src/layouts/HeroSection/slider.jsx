import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const slider = () => {
  return (
    <Swiper slidesPerView={1} loop={true}>
      <SwiperSlide>
        <div className="slide-1 hidden md:flex relative justify-center items-center w-full h-full">
          <img src="" alt="slide_img-1" width="100%" height="100%" />
          <div
            data-aos="fade-up"
            className="welcome-text absolute top-0 left-0 w-full px-60 h-full flex items-end justify-end flex-col pb-6 bg-[#0000006a]"
          >
            <h2 className="relative font-bold text-[90px] uppercase text-yellow-100 text-right mb-2 leading-[110px] block">
              BIT'S <br />
              V-PRAYUKTI'23
            </h2>
            <h6 className="text-lg text-yellow-100 px-5 py-3 uppercase bg-[#ffffff1a] rounded-md mb-4">
              Bannari Amman institute of technology, erode
            </h6>
            <a href="/" className="btn confer-btn my-6">
              More Information
            </a>
          </div>
          <div className="icon-scroll w-6 h-9 absolute z-[999] left-1/2 bottom-5 -ml-3 rounded-3xl cursor-pointer border-2 border-white"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-2 hidden md:flex relative justify-center items-center w-full h-full">
          <img src="" alt="slide_img-1" />
          <div
            data-aos="fade-up"
            className="welcome-text absolute top-0 left-0 w-full px-60 h-full flex items-center justify-center flex-col bg-[#0000006a]"
          >
            <h2 className="relative font-bold text-[90px] uppercase text-yellow-100 text-center mb-2 leading-[110px] block">
              BIT'S <br />
              V-PRAYUKTI'23
            </h2>
            <h6 className="text-lg text-yellow-100 px-5 py-3 uppercase bg-[#ffffff1a] rounded-md mb-4">
              Bannari Amman institute of technology, erode
            </h6>
            <a href="/" className="btn confer-btn my-6">
              More Information
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default slider;
