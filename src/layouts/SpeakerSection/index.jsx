import React from 'react';
import Speaker from '../../components/SpeakerCard';

const SpeakerSection = () => {
  return (
    <section
      className="speaker-section bg-gradient-overlay relative z-[1] pt-24 pb-16"
      id="speaker"
    >
      <div className="container max-w-6xl mx-auto px-5 md:px-2 text-center">
        <h5 className="text-lg font-medium uppercase text-white">
          Our speakers
        </h5>
        <h3 className="text-4xl my-2 tracking-wider font-medium uppercase text-white">
          who's speaking
        </h3>
        <div className="w-full relative grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-10">
          <Speaker
            name={'Searching...'}
            image={require('../../assets/images/about1.jpg')}
            tag={'?'}
          />
          <Speaker
            name={'Searching...'}
            image={require('../../assets/images/about1.jpg')}
            tag={'?'}
          />
          <Speaker
            name={'Searching...'}
            image={require('../../assets/images/about1.jpg')}
            tag={'?'}
          />
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
