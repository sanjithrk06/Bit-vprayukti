import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const Speaker = ({ image, name, tag }) => {
  return (
    <div
      data-aos="fade-up"
      className="single-speaker-area bg-gradient-overlay-2 relative z-[1] mb-10 rounded-xl overflow-hidden"
    >
      <div className="speaker-single-thumb relative z-[1] rounded-xl overflow-hidden">
        <img src={image} alt="profile" />
      </div>

      <div className="social-info text-white flex flex-col">
        <a href="/">
          <FaFacebookF className="mb-2" />
        </a>
        <a href="/">
          <FaInstagram className="mb-2" />
        </a>
        <a href="/">
          <FaTwitter className="mb-2" />
        </a>
        <a href="/">
          <FaLinkedinIn className="mb-2" />
        </a>
      </div>

      <div className="speaker-info absolute left-6 bottom-6 z-10 text-left">
        <h5 className="text-xl font-medium text-white tracking-wide mb-2">
          {name}
        </h5>
        <p className="text-accent tracking-wide">{tag}</p>
      </div>
    </div>
  );
};

export default Speaker;
