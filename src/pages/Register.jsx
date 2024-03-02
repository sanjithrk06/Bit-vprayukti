import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader';
import SingleRegister from '../layouts/SingleRegister';
import TeamRegister from '../layouts/TeamRegister';
import UploadRegister from '../layouts/UploadRegister';
import TicketDetails from '../utils/Tickets.json';
// import Updates from './Updates';

const Register = () => {
  const [ticket, setTicket] = useState();
  const { ticketId } = useParams();

  const [timer, setTimer] = useState(true);

  setInterval(() => {
    const eventDate = new Date('Feb 4, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;

    if (gap < 0) {
      setTimer(false);
    }
  }, 1000);

  useEffect(() => {
    const fetchTickets = async () => {
      TicketDetails.filter((ticket) => ticket.id === ticketId).map((data) =>
        setTicket(data)
      );
    };

    fetchTickets();
  }, [ticketId]);

  const renderByCategory = (category) => {
    switch (category) {
      case 'individual':
        return <SingleRegister {...ticket} />;
      case 'team':
        return <TeamRegister {...ticket} />;
      case 'upload':
        return <UploadRegister {...ticket} />;
      default:
        return <Loader />;
    }
  };

  if (!ticket) {
    return <Loader />;
  }

  return (
    <div>
      {timer ? (
        renderByCategory(ticket.category)
      ) : (
        <div className="w-full h-screen bg-primary flex items-center justify-center p-5">
          <h4 className="text-white text-xl tracking-wider text-center">
            Registration Closed
          </h4>
        </div>
      )}
    </div>
  );
};

export default Register;
