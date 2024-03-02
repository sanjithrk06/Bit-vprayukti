import React from 'react';
import 'swiper/css';
import Bgvideo from '../../assets/images/hero.mp4';
import GetStarted from './Getstarted';

// For screen width greater than 768px
export const HeroSectionMd = () => {
  return (
    <section
      id="home"
      className=" welcome-area relative z-[1] w-full h-[100vh] flex items-center justify-center"
    >
      <video
        width="100%"
        height="100%"
        // poster="https://www.bitsathy.ac.in//assets/images/main-slider/poster.webp"
        autoPlay
        loop={true}
        id="hero-video"
        type="video/mp4"
        muted={true}
        alt="bg-video"
        className="hero-video absolute -z-10 top-0 left-0 w-full object-cover h-full"
      >
        <source
          id="mp4"
          src={Bgvideo}
          type="video/mp4"
        />
      </video>
      <div className="video-overlay"></div>
      <div
        
        className="welcome-text relative top-0 left-0 w-full px-60 h-[100vh] flex items-center justify-center bg-primary  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.2] flex-col"
      >
        {/* <h2 className="relative font-extrabold text-[90px] uppercase text-white text-left mb-2 leading-[110px] block">
          BIT'S <br />
          V-PRAYUKTI'24
        </h2> */}
        <img
          className="mb-20 w-[60%] na:w-[80%] lg:w-[60%] sm:w-[80%]"
          src={require('../../assets/images/flogo.png')}
          alt="logo"
          data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
        />
        
        <a
          data-aos="fade-up" data-aos-offset="10"
          data-aos-once="true"  data-aos-delay="0"
          href='/#events'
        >
          <GetStarted />
        </a>

      </div>
    </section>
  );
};

// For screen width less than 768px
export const HeroSectionSm = () => {
  return (
    <section
      id="home"
      className="welcome-area relative z-[1] w-full h-[90vh] flex items-center justify-center"
    >
      <video
        width="100%"
        height="100%"
        // poster="https://www.bitsathy.ac.in//assets/images/main-slider/poster.webp"
        autoPlay
        loop={true}
        id="hero-video"
        type="video/mp4"
        muted={true}
        alt="bg-video"
        className="hero-video absolute -z-10 inset-0 w-full  object-cover  h-[90vh]"
      >
        <source
          id="mp4"
          src={Bgvideo}
          type="video/mp4"
        />
      </video>
      <div className="video-overlay aspect-[9/16]"></div>
      <div
        
        className="welcome-text relative inset-0 top-10 w-full h-[90vh] px-5 aspect-[9/16] flex items-start justify-center  bg-black  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.3]  flex-col"
      >
        <img
          className="mb-20 "
          src={require('../../assets/images/flogo.png')}
          alt="logo"
          width="100%"
          data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
        />
        <a
          data-aos="fade-up" data-aos-offset="10"
          data-aos-once="true"  data-aos-delay="0"
          href='/#events'
          className=' mx-auto '
        >
          <GetStarted />
        </a>
      </div>
      {/* <div className="icon-scroll w-6 h-9 absolute z-[999] left-[35%] bottom-28 -ml-3 rounded-3xl cursor-pointer border-2 border-white"></div> */}
    </section>
  );
};
