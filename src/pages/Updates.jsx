import React, { useState } from 'react';
import Header from '../layouts/NavBar';

const Updates = () => {
  const [timer, setTimer] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  setInterval(() => {
    const eventDate = new Date('Jan 24, 2023 09:30:00').getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;

    if (gap > 0) {
      // Timing constant
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining time
      const remDay = Math.floor(gap / day);
      const remHour = Math.floor((gap % day) / hour);
      const remMinute = Math.floor((gap % hour) / minute);
      const remSecond = Math.floor((gap % minute) / second);

      setTimer({
        days: remDay,
        hours: remHour,
        minutes: remMinute,
        seconds: remSecond,
      });
    }
  }, 1000);

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-primary relative items-center justify-center flex flex-col px-3 pt-10">
        <h4 className="text-white text-xl text-center">
          Updates on going for this event. Registration for other events is now
          open.
        </h4>
        <h4 className="text-white text-xl text-center">
          Registration for this event will Open soon!!!.
        </h4>
        <div className="p-10 items-center grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          <div className="days px-10 py-6 border-gray-600 border-2 flex items-center justify-center flex-col text-white rounded mb-4 md:mb-0">
            <h2 className="text-5xl mb-2">{timer.days}</h2>
            <h4>DAYS</h4>
          </div>
          <div className="hours px-10 py-6 border-gray-600 border-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
            <h2 className="text-5xl mb-2">{timer.hours}</h2>
            <h4>HOURS</h4>
          </div>
          <div className="minutes px-10 py-6 border-gray-600 border-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
            <h2 className="text-5xl mb-2">{timer.minutes}</h2>
            <h4>MINUTES</h4>
          </div>
          <div className="seconds px-10 py-6 border-gray-600 border-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
            <h2 className="text-5xl mb-2">{timer.seconds}</h2>
            <h4>SECONDS</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
