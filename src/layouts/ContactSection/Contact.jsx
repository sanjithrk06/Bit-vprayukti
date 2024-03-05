import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import InputField from '../../components/InputField';
import { firestoreAddDoc } from '../../utils/config';

const ContactSection = () => {
  const [query, setQuery] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firestoreAddDoc('eventQueries', query);
    window.location.reload();
    setQuery({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    });
  };


  return (
    <section
      id="contact"
      className="contact-section relative z-[1] bg-primary py-24"
    >
      <div className="container max-w-6xl text-center mx-auto px-5 md:px-2">
        <h2
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            className="font-medium text-xl tracking-wider mb-6 text-accent inline-block uppercase border-b-slate-700 border-b-2 pb-1"
        >
            Having Questions? 
            {/* <span className='text-2xl'>&nbsp;V-PRAYUKTI’24</span> */}
        </h2>
        <h3
            data-aos="fade-up" data-aos-offset="10"
            data-aos-once="true"  data-aos-delay="0"
            className=" text-4xl sm:text-6xl text-white uppercase tracking-wider px-16 leading-10 sm:px-0 mb-6 font-semibold"
        >
            Contact Us
        </h3>
        <div className="flex flex-col gap-20 sm:flex-row justify-between mt-20">
            <div class="basis-full flex flex-row gap-10 flex-wrap justify-evenly md:basis-1/3 ">
                <div>
                    <span class="inline-block p-3 text-accent rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-white">Email</h2>
                    <p class="mt-2 text-sm text-dimWhite">Our friendly team is here to help.</p>
                    <a href='mailto:bitvprayukti@bitsathy.ac.in' rel="noreferrer" target='_blank' class="mt-2 text-sm cursor-pointer text-accent">bitvprayukti@bitsathy.ac.in</a>
                </div>

                <div>
                    <span class="inline-block p-3 text-accent rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-white">Address</h2>
                    <p class="mt-2 text-sm text-dimWhite">Reach out our college.</p>
                    <a href="https://goo.gl/maps/w7LzzgoxfPDWQ8bY7" rel="noreferrer" target='_blank' class="mt-2 text-sm text-accent cursor-pointer">Bannari Amman Institue  of Technology, <br/> Sathyamangalam, Erode-638401</a>
                </div>

                <div>
                    <span class="inline-block p-3 text-accent rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-white">Help-Line</h2>
                    <p class="mt-2 text-sm text-dimWhite">Any doubts?, <br/>Our friendly team is here to help.</p>
                    <a class="mt-2 text-lg font-semibold cursor-pointer text-accent" rel="noreferrer" target='_blank' href="tel:6381137437">6381137437</a>
                </div>
            </div>
          <div className="basis-full md:basis-2/3 md:p-4 sm:mt-10 sm:p-10">
            <div className="contact-container  bg-primary  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.5] rounded-2xl p-4">
              <div className="form text-right">
                <div className="flex flex-wrap mt-4">
                  <div className="basis-full md:basis-1/2 px-4">
                    <InputField
                      key={1}
                      {...{
                        id: 1,
                        name: 'firstname',
                        type: 'text',
                        placeholder: 'First Name',
                        errorMessage: 'Field Required',
                        pattern: '[A-Za-z ]{1,30}',
                        required: true,
                      }}
                      value={query.firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
                    <InputField
                      key={2}
                      {...{
                        id: 2,
                        name: 'lastname',
                        type: 'text',
                        placeholder: 'Last Name',
                        errorMessage: 'Field Required',
                        pattern: '[A-Za-z ]{1,15}',
                        required: true,
                      }}
                      value={query.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mt-8">
                  <div className="basis-full md:basis-full px-4">
                    <InputField
                      key={3}
                      {...{
                        id: 3,
                        name: 'email',
                        type: 'email',
                        placeholder: 'Email',
                        errorMessage: 'Enter valid email!',
                        required: true,
                      }}
                      value={query.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mt-8">
                  <div className="basis-full md:basis-full px-4 mt-8 md:mt-0">
                    <InputField
                      key={4}
                      {...{
                        id: 4,
                        name: 'phone',
                        type: 'text',
                        placeholder: 'Phone',
                        errorMessage: 'Enter valid Phone',
                        pattern: `[6-9]{1}[0-9]{9}`,
                        required: true,
                      }}
                      value={query.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mt-8">
                  <div className="w-full px-4">
                    <textarea
                      className="bg-transparent py-2 border-0 border-b-2 border-white w-full pl-2 outline-none text-white"
                      type="text"
                      onChange={handleInputChange}
                      value={query.message}
                      required={true}
                      rows="3"
                      placeholder="Your Message"
                      name="message"
                    />
                    <span className="text-red-600 ml-2 hidden">
                      Required Field
                    </span>
                  </div>
                </div>

                <button
                  className="btn confer-btn my-8 ml-4"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit <FaArrowRight className="inline-block ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
