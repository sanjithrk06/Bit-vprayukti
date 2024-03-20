import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputField from '../../components/InputField';
import { eventsDet } from '../EventsSection/Events';
import Loader from '../../components/loader';

const DocsReject = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    ticketId: '',
    eventName: '',
  });
  const [event, setEvent ] = useState();

  useEffect(()=>{
    const fetchEvents = () => {
      eventsDet.map((data) => 
        setEvent(data)
      );    
    }

    fetchEvents();
  }, []);


  if (!event) {
    return <Loader />;
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storeUser = await axios.post(
        'https://bitvprayukti.bitsathy.ac.in/api/generate/tickets',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (storeUser.status === 200) {
        setData({
          ...data,
          name: '',
          email: '',
          ticketId: '',
        });
      }
    } catch (error) {
      alert('Error Submitting Data. You can try later!');
    }
  };

  return (
    <form className="px-10 py-0 flex w-full flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-wrap mt-8">
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          <InputField
            {...{
              id: 1,
              name: 'name',
              type: 'text',
              placeholder: 'Name',
              errorMessage: 'Required',
              pattern: '[A-Za-z ]{1,50}',
              required: true,
            }}
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          <InputField
            {...{
              id: 2,
              name: 'email',
              type: 'email',
              placeholder: 'Email',
              errorMessage: 'Invalid Email!',
              required: true,
            }}
            value={data.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          <InputField
            {...{
              id: 3,
              name: 'ticketId',
              type: 'text',
              placeholder: 'Ticket ID',
              required: false,
            }}
            value={data.ticketId}
            onChange={handleChange}
          />
        </div>
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          <select className=' py-2 border-0 border-white w-full pl-2 outline-none text-white shadow-none active:shadow-none bg-transparent text-dimWhite border-b-2'>
            {eventsDet.filter((event) => event.type!=='workshops').map((event) => <option className=' bg-primary' value={event.select}>{event.select.toLocaleUpperCase()}</option>)}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap flex-col items-center mt-10">
        <div className="basis-full md:basis-2/2 px-4 mt-8 md:mt-0">
          <button
            type="submit"
            className=" bg-teal-700 px-3 text-white rounded-md py-2 mx-2"
          >
            Send Email
          </button>
        </div>
      </div>
    </form>
  );
};

export default DocsReject;
