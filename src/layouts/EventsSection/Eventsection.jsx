import React, { useState } from 'react';
import { useEffect } from 'react';
import Event from '../../components/EventCard';
import Loader from '../../components/loader';
import { eventsDet } from './Events';

const EventsSection = () => {
  const [tab, setTab] = useState('technical');
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setEvents(eventsDet);
    };

    fetchEvents();
  }, []);

  if (!events) {
    return <Loader />;
  }
  return (
    <section
      id="events"
      className="overflow-x-hidden events-section bg-gradient-overlay relative z-[1] pt-24 pb-16"
    >
      <div className="container max-w-6xl mx-auto px-5 md:px-2 text-center">
            <h2
              data-aos="fade-up"  data-aos-offset="10"
              data-aos-once="true" data-aos-delay="0"
              className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
            >
              <span className='text-2xl'>&nbsp;V-PRAYUKTI’24</span>
            </h2>
            <h3
              data-aos="fade-up"  data-aos-offset="10"
          data-aos-once="true" data-aos-delay="0"
              className=" text-4xl sm:text-6xl text-white uppercase tracking-wider px-16 leading-10 sm:px-0  font-semibold"
            >
             Events
            </h3>

            <h3 data-aos="fade-up"  data-aos-offset="10"
          data-aos-once="true" data-aos-delay="0" className="text-md sm:text-md text-white uppercase tracking-wider px-16 py-2 leading-10 sm:px-0 mb-14 font-semibold">
              Event Rulebook
            </h3>

            <div
              data-aos="fade-up"  data-aos-offset="10"
          data-aos-once="true" data-aos-delay="0"
              class=" items-center border-[3px]  border-dimWhite bg-primary  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.5] rounded-full select-none nav-tabs flex justify-center w-full md:w-[600px] mx-auto"
            >
              <ul
                className="nav-tabs flex flex-row justify-center w-full md:w-[600px] mx-auto"
                id="conferScheduleTab"
                role="tablist"
              >
                <label
                  onClick={() => {
                    setTab('technical');
                  }}
                  className="radio w-full flex flex-grow items-center justify-center rounded-full p-1 cursor-pointer"
                >
                  <input type="radio" name="radio" value="react" className="peer hidden" defaultChecked />
                  <span
                    className="tab-label tracking-widest w-full rounded-3xl peer-checked:bg-gradient-to-r peer-checked:from-[#003133] peer-checked:to-[#001e70] peer-checked:text-white border-[2px] border-transparent text-accent p-2 transition duration-150 ease-in-out"
                  >Technical</span>
                </label>

                <label
                  onClick={() => {
                    setTab('nonTechnical');
                  }}
                  className="radio w-full flex flex-grow items-center justify-center rounded-full p-1 cursor-pointer"
                >
                  <input type="radio" name="radio" value="react" className="peer hidden" />
                  <span
                    className="tab-label tracking-widest w-full rounded-3xl peer-checked:bg-gradient-to-r peer-checked:from-[#003133] peer-checked:to-[#001e70] peer-checked:text-white border-[2px] border-transparent text-accent p-2 transition duration-150 ease-in-out"
                  >Non-Technical</span>
                </label>

                <label
                  onClick={() => {
                    setTab('workshops');
                  }}
                  className="radio w-full flex flex-grow items-center justify-center rounded-full p-1 cursor-pointer"
                >
                  <input type="radio" name="radio" value="vue" className="peer hidden" />
                  <span
                    className="tab-label tracking-widest w-full rounded-3xl peer-checked:bg-gradient-to-r peer-checked:from-[#003133] peer-checked:to-[#001e70] peer-checked:text-white border-[2px] border-transparent text-accent p-2 transition duration-150 ease-in-out"
                  >Workshop</span>
                </label>
              </ul>

            </div>

        <div className="w-full relative grid dxs:grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-5 mt-10 mx-auto">
          {events
            .filter((event) => event.type === tab)
            .map((event) => (
              <Event key={event.id} {...event} className=" hover:scale-50" />
            ))}
        </div>
        <div className="flex justify-center items-center">
          
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
