import axios from 'axios';

export const sendEmail = async ({ name, email, ticketId, eventName }) => {
  await axios.get('https://bitvprayukti.bitsathy.ac.in/api/mail/payment', {
    params: {
      name: name,
      email: email,
      ticketId: ticketId,
      eventName: eventName,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
