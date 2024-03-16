import React from 'react';
import { useNavigate } from 'react-router-dom';

const Committee = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="ticket-section bg-primary relative z-[1] pt-16 pb-20"
        id="speaker"
      >
        <div className="container max-w-6xl mx-auto px-5 md:px-2 text-center">
          <h2
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="10"
            className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
          >
            V-PRAYUKTI’24
          </h2>
          <h3
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            className=" text-3xl sm:text-6xl text-white uppercase tracking-wider px-16 leading-10 sm:px-0 font-semibold"
          >
            Committee
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
          {/* <div 
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0" 
            className="committee items-center relative pt-10"
          >
            <h5 className="text-3xl font-medium uppercase text-accent mt-5">
              ADVISORY COMMITTEE
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-10 mt-8">
              <div className="committee-items text-center sm:text-left">
                <h5 className="text-2xl font-medium text-[#d0c7c7]">
                  Dr C Palanisamy
                </h5>
                <p className="text-base text-white">Principal, BIT</p>
              </div>
              <div className="committee-items  text-center sm:text-left">
                <h5 className="text-2xl font-medium text-[#d0c7c7]">
                  Dr K Sivakumar
                </h5>
                <p className="text-base text-white">Dean PDS, BIT</p>
              </div>
              <div className="committee-items  text-center sm:text-left">
                <h5 className="text-2xl font-medium text-[#d0c7c7]">
                  Dr M Bharathiraja
                </h5>
                <p className="text-base text-white">
                  Associate Professor & Head - R&D, BIT
                </p>
              </div>
              <div className="committee-items  text-center sm:text-left">
                <h5 className="text-2xl font-medium text-[#d0c7c7]">
                  Dr K L Senthilkumar
                </h5>
                <p className="text-base text-white">
                  Professor & Head - Academics, BIT
                </p>
              </div>
            </div>
          </div> */}
          <br/>
          <div 
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            className="committee relative"
          >
            <h5 className="text-3xl font-medium uppercase text-accent mt-16">
              EVENT COMMITTEE
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10 mt-8">
              {/* Faculty coordinators  */}
              <div className="committee-items  text-center sm:text-left block">
                <h5 className="text-2xl underline mb-10 font-medium text-accent">
                  FACULTY COORDINATORS
                </h5>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Dr.PRAKASH S P
                  </h5>
                  <p className="text-base text-white">
                    HEAD OF THE DEPARTMENT-ECE <br />
                    prakashsp@bitsathy.ac.in
                  </p>
                </div>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Dr.HARI KUMAR R
                  </h5>
                  <p className="text-base text-white">
                    PROFESSOR <br />
                    harikumarr@bitsathy.ac.in
                  </p>
                </div>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Dr.PERARASI T
                  </h5>
                  <p className="text-base text-white">
                    PROFESSOR <br />
                    perarasi@bitsathy.ac.in
                  </p>
                </div>
              </div>
              {/* Student coordinators  */}
              <div className="committee-items  text-center sm:text-left block">
                <h5 className="text-2xl underline mb-10 font-medium text-accent">
                  STUDENT COORDINATORS
                </h5>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Mr. THARUN KUMARAN K E
                  </h5>
                  <p className="text-base text-white">
                    III YEAR-ECE <br />
                    tharunkumaran.ec21@bitsathy.ac.in<br/>
                    9688515799
                  </p>
                </div>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Ms. SREEPOORVISHAA M
                  </h5>
                  <p className="text-base text-white">
                    III YEAR-ECE <br />
                    sreepoorvishaa.ec21@bitsathy.ac.in<br/>
                    9345899487
                  </p>
                </div>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Mr. RAJAPANDI P
                  </h5>
                  <p className="text-base text-white">
                    III YEAR-ECE
                    <br />
                    prajapandi.ec21@bitsathy.ac.in<br/>
                    8778212687
                  </p>
                </div>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Ms. SIVASANGEETHA K
                  </h5>
                  <p className="text-base text-white">
                    III YEAR-ECE <br />
                    sivasangeetha.ec21@bitsathy.ac.in<br/>
                    9360751971
                  </p>
                </div>
              </div>
              {/* Website Developers & CONVENOR  */}
              <div className="committee-items  text-center sm:text-left block">
                <h5 className="text-2xl underline mb-10 font-medium text-accent">
                  WEBSITE DEVELOPERS
                </h5>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Mr. GOWDHAM P
                  </h5>
                  <p className="text-base text-white">
                    IV YEAR-EEE <br />
                    gowdham.ee20@bitsathy.ac.in <br />
                    Backend
                  </p>
                </div>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    Mr. MONISH KANNA S P
                  </h5>
                  <p className="text-base text-white">
                    III YEAR-CSE <br />
                    monishkanna.cs21@bitsathy.ac.in <br />
                    Backend
                  </p>
                </div>
                <div className="committee-item mb-10">
                  <h5 className="text-2xl font-medium text-[#d0c7c7]">
                    <a className=' cursor-pointer hover:text-accent' target='_blank' rel="noreferrer" href='http://sanjith-portfolio.netlify.app'>
                      Mr. SANJITH R K
                    </a> 
                  </h5>
                  <p className="text-base text-white">
                    II YEAR-CSE <br />
                    sanjith.cs22@bitsathy.ac.in <br />
                    Frontend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Committee;
