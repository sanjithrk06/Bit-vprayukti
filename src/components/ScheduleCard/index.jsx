import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { LuClock11 } from 'react-icons/lu';

const ScheduleCard = ({ image, title, date, time, link }) => {
  return (
    <div
      style={{ overflowX: 'hidden' }}
      className="single-schedule-area flex flex-wrap justify-between items-center bg-accent/5  bg-clip-padding backdrop-filter backdrop-blur-xl  border-accent border-[1px] rounded-full p-4 md:p-6 mb-5 duration-500 gap-6 md:gap-0"
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
          <LuClock11 className="text-accent mr-2" /> {time}
        </p>
      </div>
      
      {link? (
        <Link to={link} className="max-w-[300px] px-6 py-3 mt-0 bg-dimBlue rounded-full items-center text-indigo-100 lg:rounded-full flex lg:inline-flex ">
          View More <FaArrowRight className="inline-block ml-2" />
        </Link>
      ):(
        <div className='max-w-[300px] px-6 py-3 mt-0 bg-transparent items-cente flex lg:inline-flex'>
          
        </div>
      )}
      

      {/* 
      <button onClick={handleShowAll} class="max-w-[300px] px-6 py-2 mt-8 bg-dimBlue rounded-full items-center text-indigo-100 lg:rounded-full flex lg:inline-flex">
        <span id='btn-txt' class="font-semibold mr-2 text-left flex-auto">{showAll ? 'Show less' : 'Show all'}</span>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
      </button> 
      */}
      
    </div>
  );
};

export default ScheduleCard;
