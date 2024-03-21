import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapPin, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const ScheduleCard = ({ image, title, date, map, link }) => {
  return (
    <div
      style={{ overflowX: 'hidden' }}
      className="single-schedule-area flex flex-wrap justify-between items-center bg-accent  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-[0.1] border-[#444675] border-2 rounded-3xl p-4 md:p-6 mb-5 duration-500 gap-6 md:gap-0"
    >
      <div className="single-schedule-tumb-info flex items-center md:w-[42%] md:max-w-[42%] pr-4 flex-grow-0 flex-shrink-0 md:basis-[42%]">
        <div className="single-schedule-tumb hidden md:inline-block h-24 w-24">
          <img
            src={image}
            alt="schedule"
            className="rounded-[50%] h-full w-full"
          />
        </div>

        <div className="single-schedule-info ml-4 md:ml-8">
          <h6 className="text-lg md:text-xl text-white font-semibold text-left">
            {title}
          </h6>
          {/* <p className="text-[#9293bc]">
            by <span className="text-white">{speaker}</span> / {speakerInfo}
          </p> */}
        </div>
      </div>
      <div className="schedule-time-place md:w-[42%] md:max-w-[42%] px-4 flex-grow-0 flex-shrink-0 md:basis-[42%]">
        <p className="flex items-center text-white tracking-wide mb-2">
          <FaCalendarAlt className="text-accent mr-2" /> {date}
        </p>
        <p className="flex items-center text-white tracking-wide">
          <FaMapPin className="text-accent mr-2" /> BIT
        </p>
      </div>

      <Link to={link} className="btn confer-btn">
        View More <FaArrowRight className="inline-block ml-2" />
      </Link>
      
    </div>
  );
};

export default ScheduleCard;
