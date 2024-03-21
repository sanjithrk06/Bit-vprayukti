import React from 'react';
import flogo from "../../assets/images/flogo.png";

const Footer = () => {
  return (
    <section 
      data-aos="fade-up" data-aos-offset="10"
      data-aos-once="true"  data-aos-delay="50" 
      id='footer' 
      className="bg-primary"
    >
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-dimWhite border-t border-white sm:flex justify-between mx-auto">
        <div className="px-5  sm:w-4/12  text-center">
          <img src={flogo} alt="logo" className='my-0 mb-10' />
          <div className="flex flex-row gap-2 items-start justify-start mt-0 ml-4">
            {/* <a href="#" className="w-6 mx-1">
              <svg
                className="fill-current cursor-pointer text-white hover:text-accent"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                xmlnsSerif="http://www.serif.com/"
                style={{
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 2
                }}
              >
                <path
                  id="Twitter"
                  d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"
                ></path>
              </svg>
            </a>
            <a href="#" className="w-6 mx-1">
              <svg
                className="fill-current cursor-pointer text-white hover:text-accent"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                xmlnsSerif="http://www.serif.com/"
                style={{
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 2
                }}
              >
                <path
                  id="Shape"
                  d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                        3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                        -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                        -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                        -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                        0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                        3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                        -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                        -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                        1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                        -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                        -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                        0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                        0.4,1.5l0,4.5l2.9,0Z"
                  style={{ fill: 'currentColor' }}
                ></path>
              </svg>
            </a>
            <a href="/" className="w-6 mx-1">
              <svg 
                className="fill-current cursor-pointer text-white hover:text-accent"
                xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="100%" 
                viewBox="0 0 24 24"
                style={{
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 2
                }}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a> */}
          </div>
        </div>
        <div className="p-5 sm:w-2/12  text-center">
          <div className="text-sm uppercase text-accent font-bold mb-4">Quick Links</div>
          <ul className='text-sm text-center'>
            <li className="my-2">
              <a className="hover:text-accent" href="/">Home</a>
            </li>
            <li className="my-2">
              <a className="hover:text-accent" href="/#about">About</a>
            </li>
            <li className="my-2">
              <a className="hover:text-accent" href="/#events">Events</a>
            </li>
            <li className="my-2">
              <a className="hover:text-accent" href="/#schedule">Agenda</a>
            </li>
            <li className="my-2">
              <a className="hover:text-accent" href="/#glimpse">Glimpse</a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-2/12 text-center">
          <div className="text-sm uppercase text-accent font-bold mb-4">External Links</div>
          <ul className='text-sm text-center'>
            <li className="my-2">
              <a className="hover:text-accent" href="https://bitsathy.ac.in" rel="noreferrer" target='_blank'>BITSathy</a>
            </li>
            <li className="my-2">
              <a className="hover:text-accent" href="mailto:bitvprayukti@bitsathy.ac.in" rel="noreferrer" target='_top'>Email</a>
            </li>
            <li className="my-2">
              <a className="hover:text-accent" href="https://www.instagram.com/vprayuktibit?igsh=ZWI2YzEzYmMxYg==" rel="noreferrer" target='_blank'>Instagram</a>
            </li>
            <li className="my-2">
              <a className="hover:text-accent" href="https://wa.me/6381137437" rel="noreferrer" target='_blank'>Whatsapp</a>
            </li>
          </ul>
        </div>
        <div className="p-5 text-center sm:w-3/12">
          <div className="text-sm uppercase text-accent font-bold mb-4">Co-ordinators</div>
          <ul className='text-sm'>
            <li className="my-2">
              <p className="" >Mr. Tharun Kumaran K E</p>
              <a className="hover:text-accent" href="tel:9688515799">9688515799</a>
            </li>
            <li className="my-2">
              <p className="" >Mr. Sree Poorvishaa M</p>
              <a className="hover:text-accent" href="tel:9345899487">9345899487</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-dimWhite text-sm flex-col items-center border-t max-w-screen-xl border-white">
        <div className="my-2 text-center leading-6">Developed by<br /><span className='text-accent'> Gowtham <span className='text-white'>|</span> <a href='http://sanjith-portfolio.netlify.app' className='hover:text-white' rel="noreferrer" target='_blank'> Sanjith </a><span className='text-white'>|</span> Monish Kanna </span></div>
      </div>
    </section>
  )
}

export default Footer;
