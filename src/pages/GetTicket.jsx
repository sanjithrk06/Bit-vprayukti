import React, { useState } from 'react';

function Form() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNextStep = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleBackStep = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white">
        <form action="https://formbold.com/s/FORM_ID" method="POST" onSubmit={handleSubmit}>
          <div className="pb-4 border-b border-gray-300">
            <ul className="flex gap-40">
              <li className={`text-gray-600 ${activeStep === 1 ? 'active' : ''}`}>
                <span className="flex items-center justify-center w-9 h-9 bg-gray-300 rounded-full">{activeStep === 1 ? '1' : ''}</span> Sign Up
              </li>
              <li className={`text-gray-600 ${activeStep === 2 ? 'active' : ''}`}>
                <span className="flex items-center justify-center w-9 h-9 bg-gray-300 rounded-full">{activeStep === 2 ? '2' : ''}</span> Message
              </li>
              <li className={`text-gray-600 ${activeStep === 3 ? 'active' : ''}`}>
                <span className="flex items-center justify-center w-9 h-9 bg-gray-300 rounded-full">{activeStep === 3 ? '3' : ''}</span> Confirm
              </li>
            </ul>
          </div>

          <div className={`p-4 ${activeStep === 1 ? 'block' : 'hidden'}`}>
            <div className="flex gap-4 pb-6">
              <div className="w-1/2">
                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Andrio"
                  id="firstname"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Dolee"
                  id="lastname"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-4 pb-6">
              <div className="w-1/2">
                <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Flat 4, 24 Castle Street, Perth, PH1 3JY"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className={`p-4 ${activeStep === 2 ? 'block' : 'hidden'}`}>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>

          <div className={`p-4 ${activeStep === 3 ? 'block' : 'hidden'}`}>
            <div className="pb-6 border-b border-gray-300">
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-600">
                <span className="w-5 h-5 mr-2">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10.5" fill="white" stroke="#DDE3EC" />
                    <path d="M9.83343 12.8509L15.1954 7.48828L16.0208 8.31311L9.83343 14.5005L6.12109 10.7882L6.94593 9.96336L9.83343 12.8509Z" fill="#536387" />
                  </svg>
                </span>
                Yes! I want it.
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-600">
                <span className="w-5 h-5 mr-2">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10.5" fill="white" stroke="#DDE3EC" />
                    <path d="M9.83343 12.8509L15.1954 7.48828L16.0208 8.31311L9.83343 14.5005L6.12109 10.7882L6.94593 9.96336L9.83343 12.8509Z" fill="#536387" />
                  </svg>
                </span>
                No! I don’t want it.
              </button>
            </div>
          </div>

          <div className="flex justify-between p-4">
            {activeStep !== 1 && (
              <button className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-600" onClick={handleBackStep}>
                Back
              </button>
            )}
            <button className="flex items-center justify-center px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-blue-600 text-white" onClick={handleNextStep}>
              {activeStep === 3 ? 'Submit' : 'Next Step'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
