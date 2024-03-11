import React from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';


const TicketCard = ({ id, title, discount, amount, offers, details, size, form }) => {
  return (
    <div
      data-aos="fade-up"  data-aos-offset="10"
      data-aos-once="true" data-aos-delay="0"
      className="single-ticket-pricing-table relative bg-accent  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-[0.1] border-accent border-2 rounded-3xl px-10 pb-10 duration-500 mb-12 text-center active "
    >
      {offers !== 'null' && (
        <div className="ribbon">
          <span>{offers} OFF</span>
        </div>
      )}
      <h6 className="ticket-plan bg-[#00f7ff79] px-6 py-3 inline-block tracking-wide uppercase text-white font-bold text-xl rounded-b-md mb-6 leading-[1]">
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
      <h2 className="ticket-price text-6xl text-white font-semibold tracking-wide leading-[1] my-5">
        {offers !== 'null' ? (
          <>
            <strike className="text-3xl mr-5 text-white">₹{amount}</strike>
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

      <h2 className="ticket-price text-lg text-white font-semibold tracking-wide leading-[1] my-5">
        Team Size : <span className=' text-white' >{size}</span>
      </h2>


      <div className="ticket-pricing-table-details">
        {details?.map((val, idx) => (
          <p key={idx} className="text-dimWhite mb-2">
            <FaCheck className="inline-block mr-2 text-accent" /> {val}
          </p>
        ))}
      </div>
      {form?(<a href={form} rel="noreferrer" target='_blank' className="btn confer-btn w-4/5 mt-8">
        Get Ticket <FaArrowRight className="inline-block ml-2" />
      </a>):(
        <div className='ticket-price text-2xl text-accent font-semibold tracking-wide leading-[1] my-10'>Opens soon...</div>
      )
      }
    </div>
  );
};

export default TicketCard;
