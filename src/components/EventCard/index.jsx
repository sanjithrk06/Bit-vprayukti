import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ image, name, tag, id }) => {
  return (
    <Link to={`/events/${id}`}>
      <div
        data-aos="fade-up"  data-aos-offset="10"
        data-aos-once="true"  data-aos-delay="0"
        className="single-event-area bg-gradient-overlay-3 relative z-[1] mb-10 rounded-xl overflow-hidden"
      >
        <div className="event-single-thumb relative z-[1] rounded-xl overflow-hidden">
          <img src={image} alt={name} className='transition-transform group-hover:scale-110 duration-200' />
        </div>

        <div className="event-info absolute left-6 bottom-6 z-10 text-left">
          <h5 className="text-2xl font-medium text-white tracking-wide mb-2">
            {name}
          </h5>
          {/* <p className="text-accent tracking-wide">{tag}</p> */}
        </div>
      </div>

    </Link>
  );
};

export default Event;
