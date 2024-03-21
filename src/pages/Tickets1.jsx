import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../components/loader';
import TicketCard from '../components/TicketCard';
import TicketDetails from '../utils/Tickets.json';

const Tickets1 = () => {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  // const [timer, setTimer] = useState({
  //   days: '0',
  //   hours: '0',
  //   minutes: '0',
  //   seconds: '0',
  // });

  // setInterval(() => {
  //   const eventDate = new Date('Mar 21, 2024 00:00:00').getTime();
  //   const now = new Date().getTime();
  //   const gap = eventDate - now;

  //   if (gap > 0) {
  //     // Timing constant
  //     const second = 1000;
  //     const minute = second * 60;
  //     const hour = minute * 60;
  //     const day = hour * 24;

  //     // Remaining time
  //     const remDay = Math.floor(gap / day);
  //     const remHour = Math.floor((gap % day) / hour);
  //     const remMinute = Math.floor((gap % hour) / minute);
  //     const remSecond = Math.floor((gap % minute) / second);

  //     setTimer({
  //       days: remDay,
  //       hours: remHour,
  //       minutes: remMinute,
  //       seconds: remSecond,
  //     });
  //   }
  // }, 1000);

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
      <section
        className="ticket-section bg-primary relative z-[1] pt-20 pb-12"
        id="speaker"
      >
        <div className="container max-w-6xl mx-auto px-5 md:px-2 text-center">
          <h5 className="text-lg font-medium uppercase text-white">
            Choose a ticket
          </h5>
          <h3 className="text-4xl my-2 tracking-wider font-medium uppercase text-white">
            Ticket Pricing
          </h3>
          {/* <div className="timer">
            <h4 className="text-xl mt-4 text-red-600 uppercase font-medium">
              Registration Closes Soon
            </h4>
            <h5 className="text-2xl mt-4 text-red-700">{`${timer.days} D : ${timer.hours} H : ${timer.minutes} M : ${timer.seconds} S`}</h5>
          </div> */}
          <div 
            data-aos="fade-up"  data-aos-offset="10"
            data-aos-once="true" data-aos-delay="0" 
            className="inline-flex flex-row flex-wrap gap-5 items-center"
          >
            <button onClick={() => navigate(-1)} class="max-w-[300px] px-6 py-2 mt-8 bg-dimBlue border-2 border-accent rounded-full items-center text-indigo-100 lg:rounded-full flex lg:inline-flex">
              <span id='btn-txt' class="font-semibold mr-2 text-left flex-auto">Go Back</span>
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
            </button>
          </div>
          <div className="w-full relative grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-10">
            {ticket?.map((tkt, idx) => (
              <TicketCard key={idx} {...tkt} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tickets1;


// {
//     "id": "VPT20",
//     "discount": "899",
//     "offers": "25%",
//     "title": "COMBO 1",
//     "amount": 1200,
//     "eventId": "20",
//     "category": "upload",
//     "details": [
//       "1-4 Members",
//       "Project Presentation",
//       "Tech-It-Out",
//       "Shoot and Broadcast (or)( Connexion, MOCK CID, Action Speaks (ANY 2))"
//     ]
//   },
//   {
//     "id": "VPT21",
//     "discount": "1199",
//     "offers": "25%",
//     "title": "COMBO 2",
//     "amount": 1550,
//     "eventId": "21",
//     "category": "upload",
//     "details": [
//       "1-4 Members",
//       "Paper Presentation",
//       "Best Engineer",
//       "Theme Photography, Non-Technical quiz, Series Quiz (ANY 2)"
//     ]
//   },
//   {
//     "id": "VPT22",
//     "discount": "1111",
//     "offers": "25%",
//     "title": "COMBO 3",
//     "amount": 1500,
//     "eventId": "22",
//     "category": "team",
//     "details": [
//       "1-5 Members",
//       "Line follower",
//       "Robo Soccer",
//       "Theme Photography, Non-Technical quiz, Series Quiz (ANY 2)"
//     ]
//   },