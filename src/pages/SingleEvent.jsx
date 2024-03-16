import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { BsFileEarmarkText } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { eventsDet } from '../layouts/EventsSection/Events';
import Loader from '../components/loader';

const SingleEvent = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState();
  const [eventImg, setEventImg] = useState();
  let { eventId } = useParams();

  useEffect(() => {
    const fetchEvents = () => {
      eventsDet.filter((event) => event.id === eventId).map((data) =>
        setEvent(data)
      );
      eventsDet.filter((event) => event.id === eventId).map((data) =>
        setEventImg(data)
      );
    };

    fetchEvents();
  }, [eventId]);


  if (!event) {
    return <Loader />;
  }

  return (
    <>
      <section
        className="ticket-section overflow-x-hidden w-full min-h-screen bg-primary relative z-[1] pt-16 pb-12"
        id="speaker"
      >
        <div className="container max-w-6xl mx-auto px-5 md:px-2 text-center">
          <h2
            data-aos="fade-up"  data-aos-offset="10"
            data-aos-once="true" data-aos-delay="0"
            className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
          >
            Events <span className='text-2xl'>&nbsp;V-PRAYUKTI’24</span>
          </h2>
          <h3
            data-aos="fade-up"  data-aos-offset="10"
            data-aos-once="true" data-aos-delay="0"
            className=" text-2xl sm:text-4xl text-white uppercase tracking-wider px-16 leading-10 sm:px-0  font-semibold"
          >
            {eventImg?.name}
          </h3>
          <div 
            data-aos="fade-up"  data-aos-offset="10"
            data-aos-once="true" data-aos-delay="0" 
            className="inline-flex flex-row flex-wrap gap-5 items-center"
          >
            <button onClick={() => navigate(-1)} class="max-w-[300px] px-6 py-2 mt-8 bg-dimBlue border-2 border-accent rounded-full items-center text-indigo-100 lg:rounded-full flex lg:inline-flex">
              <span id='btn-txt' class="font-semibold mr-2 text-left flex-auto">Go Back</span>
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
            </button>
            <Link to={"/tickets"} class="max-w-[300px] px-6 py-2 mt-8 bg-dimBlue border-2 border-accent rounded-full items-center text-indigo-100 lg:rounded-full flex lg:inline-flex">
              <span id='btn-txt' class="font-semibold mr-2 text-left flex-auto">Get Tickets</span>
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
            </Link>
          </div>
          <div
            data-aos="fade-up"  data-aos-offset="10"
            data-aos-once="true" data-aos-delay="0"
            className="relative flex flex-col md:flex-row gap-3 my-20"
          >
            <div className="eventInfo md:basis-1/3 block">
              <div className="eventImg relative z-[1] rounded-xl overflow-hidden max-w-[350px] mx-auto">
                <img src={eventImg.image} alt={event?.id} />
              </div>
              <div className="my-10 relative text-start  bg-accent border-[#444675] p-5 border-2 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.1]">
                <p className="text-white text-xl mb-2 px-3 py-2 w-full rounded-lg">
                  <SlCalender className="inline-block mr-4 text-accent" />
                  <span className=' text-lg leading-4'>March 26th & 27th, 2024</span>
                </p>
                {/* <p className="text-white text-xl mb-2 px-3 py-2 w-full rounded-lg">
                  <LuClock11 className="inline-block mr-4 text-accent" />
                  <span className=' text-lg leading-4'>08.00 AM - 07.00 PM</span>
                </p> */}
                {/* {event?.abstract ? (
                  <p className="text-white text-xl mb-2 px-3 py-2 w-full rounded-lg">
                    <CgSandClock className="inline-block mr-4 text-accent" />
                    <span className=' text-lg leading-4'>Registration Closed</span>
                  </p>
                ) : (
                  <p className="text-white text-xl mb-2 px-3 py-2 w-full rounded-lg">
                    <CgSandClock className="inline-block mr-4 text-accent" />
                    <span className=' text-lg leading-4'>Registration Closed</span>
                  </p>
                )} */}
                {event?.ppt && (
                  <p className="text-white text-xl mb-2 px-3 py-2 w-full rounded-lg">
                    <a
                      href={event.ppt}
                      download
                      alt="download"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFileEarmarkText className="inline-block mr-4 text-accent" />
                      <span className=' text-lg leading-4'>Presentation Format</span>
                    </a>
                  </p>
                )}
                {event?.abstract && (
                  <p className="text-white text-xl mb-2 px-3 py-2 w-full rounded-lg">
                    <a
                      href={event.abstract}
                      download
                      alt="download"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFileEarmarkText className="inline-block mr-4 text-accent" />
                      <span className=' text-lg leading-4'>Submission Format</span>
                    </a>
                  </p>
                )}
                {event?.problem && (
                  <p className="text-white text-xl mb-2 px-3 py-2 w-full rounded-lg">
                    <a
                      href={event.problem}
                      download
                      alt="download"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaDownload className="inline-block mr-4 text-accent" />
                      <span className=' text-lg leading-4'>Problem Statement</span>
                    </a>
                  </p>
                )}
                {event?.rulebook && (
                  <p className="text-white text-xl mb-2 px-3 py-2 w-full rounded-lg">
                    <a 
                      href={event.rulebook}
                      download
                      alt="download"
                      target="_blank"
                      rel="noreferrer" 
                      class=" w-full px-6 py-2 bg-dimBlue rounded-full border-[#444675] border-2 items-center text-white lg:rounded-full flex lg:inline-flex"
                    >
                      <span id='btn-txt' class="font-semibold mr-2 text-center flex-auto">Rulebook</span>
                      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
                    </a>
                  </p>
                )}
              </div>
              
                
            </div>
            <div className="eventDesc md:basis-2/3 block md:ml-10">
              {event?.type === 'workshops' ? (
                <div
                  data-aos="fade-up"  data-aos-offset="10"
                  data-aos-once="true" data-aos-delay="0"
                  className="navDetails text-left px-10 py-6 bg-[#0000003f] rounded-md max-h-[600px] overflow-x-auto"
                >
                  <h2
                    className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                  >
                    Workshop Description
                  </h2>
                  <li className="text-white para text-lg my-2 leading-7 tracking-wide text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{event?.info}
                  </li>
                  {event.points?.map((val, idx) => (
                    <li
                      key={idx}
                      className="text-white point mx-4 text-lg my-4 tracking-wide text-justify"
                    >
                      {val}
                    </li>
                  ))}
                  <div id='team' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Team Size &nbsp;:&nbsp;
                      </h2>
                      {event?.teamCount.map((value, indx) => (
                        <li
                          key={indx}
                          className="text-dimWhite font-thin point text-lg my-4 tracking-wide text-justify"
                        >
                          {value}
                        </li>
                      ))}
                    </div>
                    {/* <div id='deadline' className=' my-10'>  
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Registration Deadline
                      </h2>
                      <li
                        className="text-dimWhite font-thin para text-lg my-4 tracking-wide text-justify"
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;{event?.deadline}
                      </li>
                    </div> */}
                    <div id='fee' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Registration Fees
                      </h2>
                      <li
                        className="text-white font-bold para text-lg my-4 tracking-wide text-justify"
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;{event?.fee}
                      </li>
                    </div>
                    <div id='contact' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        For Queries
                      </h2>
                      {/* <br/>
                      <h2
                        className="font-normal text-lg tracking-wider mt-2 text-accent inline-block pt-2"
                      >
                        Email
                      </h2>
                      <li className="text-dimWhite para text-lg my-2 tracking-wide text-justify">
                        <a href={`mailto:${event.contact.info}`} className=' text-dimWhite hover:text-accent'>{event.contact.info}</a>
                      </li> */}
                      {event.contact.name.student?.map((value, indx) => (
                        <li
                          key={indx}
                          className="text-dimWhite font-thin point text-lg my-4 tracking-normal text-justify"
                        >
                          Mr. {value}
                        </li>
                      ))}
                      
                    </div>
                </div>
              ) : (
                <>
                  <div
                    data-aos="fade-up"  data-aos-offset="10"
                    data-aos-once="true" data-aos-delay="0"
                    className="navDetails text-left px-10 pb-6 bg-[#0000003f] rounded-md max-h-[600px] overflow-x-auto"
                  >
                    <div id='info' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Event Introduction
                      </h2>
                      {event?.info.map((value, indx) => (
                        <li
                          key={indx}
                          className="text-dimWhite font-thin point text-lg my-4 tracking-wide text-justify"
                        >
                          {value}
                        </li>
                      ))}
                    </div>
                    {/* {event.domain?(
                      <>
                      <div id='domain' className=' my-10'>
                        <h2
                          className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                        >
                          Domain
                        </h2>
                        <li
                          className="text-dimWhite font-thin para text-lg my-4 tracking-wide text-justify"
                        >
                          {event?.domain}
                        </li>
                      </div>
                      </>
                    ): (
                      <></>
                    )} */}
                    <div id='team' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Team Size &nbsp;:&nbsp;
                      </h2>
                      {event?.teamCount.map((value, indx) => (
                        <li
                          key={indx}
                          className="text-dimWhite font-thin point text-lg my-4 tracking-wide text-justify"
                        >
                          {value}
                        </li>
                      ))}
                    </div>
                    <div id='deadline' className=' my-10'>  
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Registration Deadline
                      </h2>
                      <li
                        className="text-dimWhite font-thin para text-lg my-4 tracking-wide text-justify"
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;{event?.deadline}
                      </li>
                    </div>
                    <div id='fee' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Registration Fees
                      </h2>
                      <li
                        className="text-white font-bold para text-lg my-4 tracking-wide text-justify"
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;{event?.fee}
                      </li>
                    </div>
                    <div id='eligibility' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Eligibility
                      </h2>
                      {event?.eligibility.map((value, indx) => (
                        <li
                          key={indx}
                          className="text-dimWhite font-thin point text-lg my-4 tracking-wide text-justify"
                        >
                          {value}
                        </li>
                      ))}
                    </div>
                    {event.notice? (
                    <div id='notice' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        IMPORTANT NOTICE
                      </h2>
                      {event?.notice.map((value, indx) => (
                        <li
                          key={indx}
                          className="text-dimWhite font-thin point text-lg my-4 tracking-wide text-justify"
                        >
                          {value}
                        </li>
                      ))}
                    </div>
                    ) : (<></>)}
                    {/* <div id='rewards' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        Rewards
                      </h2>
                      <li
                        className="text-dimWhite font-thin point text-lg my-4 tracking-wide text-justify"
                      >
                        {event?.tag}
                      </li>
                    </div> */}
                    <div id='contact' className=' my-10'>
                      <h2
                        className="font-medium text-xl tracking-wider mb-2 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
                      >
                        For Queries
                      </h2>
                      {/* <br/>
                      <h2
                        className="font-normal text-lg tracking-wider mt-2 text-accent inline-block pt-2"
                      >
                        Email
                      </h2>
                      <li className="text-dimWhite para text-lg my-2 tracking-wide text-justify">
                        <a href={`mailto:${event.contact.info}`} className=' text-dimWhite hover:text-accent'>{event.contact.info}</a>
                      </li> */}
                      {/* <h2
                        className="font-normal text-lg tracking-wider mt-2 text-accent inline-block pt-2"
                      >
                        Faculty Co-ordinators
                      </h2>
                      {event.contact.name.faculty?.map((value, indx) => (
                        <li
                          key={indx}
                          className="text-dimWhite font-thin point text-lg my-4 tracking-normal text-justify"
                        >
                          {value}
                        </li>
                      ))} */}
                      {event.contact.name.student?.map((value, indx) => (
                        <li
                          key={indx}
                          className="text-dimWhite font-thin point text-lg my-4 tracking-normal text-justify"
                        >
                          Mr. {value}
                        </li>
                      ))}
                      {/* <li
                        className="text-white font-thin para text-lg my-8 tracking-wide text-justify"
                      >
                        For More Details, refer the Event Rulebook. <a href={`${event.ruleBook}`} className=' text-accent hover:text-white cursor-pointer' >click here</a>
                      </li> */}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleEvent;