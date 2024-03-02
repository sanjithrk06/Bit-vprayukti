import { FaFilePdf, FaRupeeSign, FaTicketAlt, FaUserAlt } from 'react-icons/fa';

export const cardList = [
  {
    id: 'users',
    name: 'User Registered',
    icons: <FaUserAlt className="text-4xl text-accent" />,
  },
  {
    id: 'tickets',
    name: 'Generate Tickets',
    icons: <FaTicketAlt className="text-4xl text-accent" />,
  },
  {
    id: 'paper',
    name: 'Docs Submitted',
    count: '0',
    icons: <FaFilePdf className="text-4xl text-accent" />,
  },
  {
    id: 'payment',
    name: 'Payment Approved',
    count: '0',
    icons: <FaRupeeSign className="text-4xl text-accent" />,
  },
];
