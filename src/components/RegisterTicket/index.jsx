import React from 'react';
import { FaCheck } from 'react-icons/fa';

const RegisterTicket = ({ id, title, discount, amount, offers, details }) => {
  return (
    <div
      data-aos="flip-left"
      className="single-ticket-pricing-table relative bg-white px-10 pb-10 rounded-xl duration-500 text-center active"
    >
      {offers !== 'null' && (
        <div className="ribbon">
          <span>{offers} OFF</span>
        </div>
      )}
      <h6 className="ticket-plan bg-accent px-6 py-3 inline-block tracking-wide uppercase text-white rounded-b-md mb-6 leading-[1]">
        {title}
      </h6>

      <div className="ticket-icon mb-4">
        <img
          className="mx-auto"
          src="https://res.cloudinary.com/dvfbca8ej/image/upload/v1673269074/prayukti/staticAssets/ticket_cpyoyt.png"
          alt=""
          width="100px"
          height="100px"
        />
      </div>
      <h2 className="ticket-price text-6xl text-primary font-semibold tracking-wide leading-[1] my-5">
        {offers !== 'null' ? (
          <>
            <strike className="text-3xl mr-5 text-black">₹{amount}</strike>
            <span>₹</span>
            {discount}
          </>
        ) : (
          <>
            <span>₹</span>
            {amount}
          </>
        )}
      </h2>

      <div className="ticket-pricing-table-details">
        {details.map((val, idx) => (
          <p key={idx} className="text-[#5d5e8d] mb-2">
            <FaCheck className="inline-block mr-2 text-green-600" /> {val}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RegisterTicket;
