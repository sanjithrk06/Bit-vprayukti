import React, { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../components/loader';
import { useNavigate } from 'react-router-dom';
import TicketCard from '../components/TicketCard';
import Header from '../layouts/NavBar/Navbar';
import TicketDetails from '../utils/Tickets.json';

const Tickets = () => {
  const navigate =useNavigate();
  const [ticket, setTicket] = useState(null);
  const [timer, setTimer] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  });

  setInterval(() => {
    const eventDate = new Date('Mar 10, 2024 00:00:00').getTime();
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

  useEffect(() => {
    const fetchTickets = async () => {
      setTicket(TicketDetails);
    };

    fetchTickets();
  }, []);

  if (!ticket) {
    return <Loader />;
  }

  return (
    <>
      <section className="countdown-container py-20 text-center  bg-primary w-full h-[100vh]">
        <h2
          data-aos="fade-up"  data-aos-offset="10"
          data-aos-once="true" data-aos-delay="0"
          className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
        >
          V-PRAYUKTI’24 <span className='text-2xl'>&nbsp;Tickets</span>
        </h2>
        <h3
          data-aos="fade-up"  data-aos-offset="10"
      data-aos-once="true" data-aos-delay="0"
          className=" text-3xl sm:text-4xl text-white uppercase tracking-wider px-16 leading-10 sm:px-0  font-semibold"
        >
          Booking will open soon....
        </h3>
        <button
          data-aos="fade-up"  data-aos-offset="10"
          data-aos-once="true" data-aos-delay="0"
          onClick={() => navigate(-1)} 
          class="max-w-[300px] px-6 py-2 mt-8 bg-dimBlue border-2 border-accent rounded-full items-center text-indigo-100 lg:rounded-full inline-flex"
        >
          <span id='btn-txt' class="font-semibold mr-2 text-left flex-auto">Go Back</span>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
        </button>
        <div className=" container mt-20  block md:flex max-w-6xl mx-auto items-center justify-center">
          <div
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            className="md:basis-1/4 md:pr-4 flex justify-center flex-col"
          >
            <p className="text-xl font-semibold text-white tracking-normal mb-4 leading-6 text-center md:text-left">
              Starts In
            </p>
            <h6 className="font-semibold text-xl tracking-wider text-accent inline-block uppercase text-center md:text-left">
              The Clock is Ticking
            </h6>
          </div>
          <div
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            className="md:basis-3/4 p-10 items-center grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7"
          >
            <div className="days px-10 py-6 border-gray-600 border-b-2 flex items-center justify-center flex-col text-white rounded mb-4 md:mb-0">
              <h2 className="text-5xl mb-2">{timer.days}</h2>
              <h4>DAYS</h4>
            </div>
            <div className="hours px-10 py-6 border-gray-600 border-b-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
              <h2 className="text-5xl mb-2">{timer.hours}</h2>
              <h4>HOURS</h4>
            </div>
            <div className="minutes px-10 py-6 border-gray-600 border-b-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
              <h2 className="text-5xl mb-2">{timer.minutes}</h2>
              <h4>MINUTES</h4>
            </div>
            <div className="seconds px-10 py-6 border-gray-600 border-b-2 flex items-center justify-center flex-col text-white rounded  mb-4 md:mb-0">
              <h2 className="text-5xl mb-2">{timer.seconds}</h2>
              <h4>SECONDS</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tickets;
