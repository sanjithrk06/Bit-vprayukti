import React, { useState } from 'react';
import ScheduleCard from '../../components/ScheduleCard';
import { schedule } from './schedule';

const ScheduleSection = () => {
  const [tab, setTab] = useState('day1');

  const [ visible, setVisible ] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setVisible(schedule.filter((sch) => sch.day === tab).length);
    } else {
      setVisible(3);
    }
  }

  return (
    <section
      id="schedule"
      className="schedule-section relative z-[1] bg-primary py-24"
    >


      <div className="container max-w-6xl text-center mx-auto px-5 md:px-2">

        <h2
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
            >
              Agenda <span className='text-2xl'>&nbsp;V-PRAYUKTI’24</span>
            </h2>
            <h3
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              className=" text-4xl sm:text-6xl text-white uppercase tracking-wider px-16 leading-10 sm:px-0  font-semibold"
            >
             Event LineUps
            </h3>
            
            {/* <h3
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              className=" text-xl sm:text-2xl text-white uppercase tracking-wider px-16 pt-12 leading-10 sm:px-0  font-semibold"
            >
             Lineups will be updated soon...
            </h3> */}


          <div
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            class=" items-center border-[3px] border-dimWhite bg-primary  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.5] rounded-full select-none nav-tabs flex justify-center w-full md:w-[600px] mx-auto mb-16 mt-10"
          >
            <ul
              className="nav-tabs flex flex-row justify-center w-full md:w-[600px] mx-auto"
              id="conferScheduleTab"
              role="tablist"
            >
              <label
                onClick={() => {
                  setTab('day1');
                }}
                className="radio w-full flex flex-grow items-center justify-center rounded-full p-1 cursor-pointer"
              >
                <input type="radio" name="radio" value="react" className="peer hidden" defaultChecked />
                <span
                  className="tab-label tracking-widest w-full rounded-full peer-checked:bg-accent/10 peer-checked:text-white border-[2px] peer-checked:font-semibold border-transparent text-accent p-2 transition duration-150 ease-in-out"
                >Tuesday <br /> MAR 26, 2024</span>
              </label>

              <label
                onClick={() => {
                  setTab('day2');
                }}
                className="radio w-full flex flex-grow items-center justify-center rounded-full p-1 cursor-pointer"
              >
                <input type="radio" name="radio" value="react" className="peer hidden" />
                <span
                  className="tab-label tracking-widest w-full rounded-full peer-checked:bg-accent/10 peer-checked:text-white border-[2px] peer-checked:font-semibold border-transparent text-accent p-2 transition duration-150 ease-in-out"
                >Wednesday <br /> MAR 27, 2024</span>
              </label>
            </ul>

          </div>


          <div className="schedule-tab" data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0">
            {schedule
              .filter((sch) => sch.day === tab)
              .slice(0, visible)
              .map((card, index) => (
                <ScheduleCard key={card.id} {...card} />
              ))}
          </div>

          <button onClick={handleShowAll} class="max-w-[300px] px-6 py-2 mt-8 bg-dimBlue rounded-full items-center shadow-sm shadow-accent text-indigo-100 lg:rounded-full flex lg:inline-flex">
            <span id='btn-txt' class="font-semibold mr-2 text-left flex-auto">{showAll ? 'Show less' : 'Show all'}</span>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
          </button>

          
        </div>
    </section>
  );
};

export default ScheduleSection;
