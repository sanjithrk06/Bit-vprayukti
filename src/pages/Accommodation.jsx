import React from 'react';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        id="events"
        className="accommodation-section min-h-screen bg-primary relative z-[1] pt-16 pb-16"
      >
        <div className="container max-w-6xl mx-auto px-5 mt-5 md:px-2 text-center">
          <h2
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="10"
            className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
          >
            Accommodation
          </h2>
          <h3
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            className=" text-3xl sm:text-6xl text-white uppercase tracking-wider px-16 leading-10 sm:px-0 font-semibold"
          >
            Stay Here
          </h3>
            <button
              data-aos="fade-up" data-aos-offset="10"
              data-aos-once="true"  data-aos-delay="0"
              onClick={() => navigate(-1)} 
              className="max-w-[300px] mx-auto px-6 py-2 mt-8 mb-16 bg-dimBlue border-2 border-accent rounded-full items-center text-indigo-100 lg:rounded-full flex lg:inline-flex"
            >
              <span id='btn-txt' class="font-semibold mr-2 text-left flex-auto">Go Back</span>
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current opacity-75 h-4 w-4"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"></path></svg>
            </button>
          <div 
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            className="relative text-xl block flex-col gap-16 md:flex text-white tracking-wide leading-8 mt-10 text-justify items-center"
          >
            <div className="w-full sm:mx-10">
              <img
                src={require('../assets/images/acc.jpg')}
                alt="hostel"
                className="ml-0 md:ml-7 mt-5 md:mt-0 rounded-lg bg-blend-overlay"
              />
            </div>
            {/* <div className=" text-accent text-3xl my-10 font-semibold text-center">
              Accommodation will be provided.
            </div> */}
            <div className="w-full lg:mx-20">
              <ul className=' mx-6 my-4 sm:mx-20 list-disc leading-9 font-[300] text-dimWhite'>
              <li>
                Accomodation is provided for all the participants for both the
                event days at free of cost<br/>
              </li>
              <li>
                Registration desk will be open from 25th March 2024, 5:00 PM
                onwards.
              </li>
              <li>
                Breakfast, lunch and dinner is available in the college canteen
                and cafeteria as well on a charged basis.
              </li>
              <li>
                There are cafe's available for lunch and dinner inside the
                college, you can either opt to have your meals there or can have
                in the college canteen both on charged basis.
              </li>
              <li>Kindly carry your college identification card for proof.</li>
              <li>For Queries,</li>
              <ul className=' pl-4'>
                <li className=' text-white font-medium'>Mr.Vishnuvarthan - <a href='tel:8220491016' className=' hover:text-accent'>8220491016</a></li>
                <li className=' text-white font-medium'>Ms.Genga Sri - <a href='tel:8248743399' className=' hover:text-accent'>8248743399</a></li>
              </ul>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;
