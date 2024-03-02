import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { cardList } from './card';
import GenerateTickets from './generateTickets';
import PaperTable from './paperTable';
import PaymentTable from './paymentTable';
import UsersTable from './usersTable';

const CountCard = ({ name, count, icons }) => {
  return (
    <div
      className="bg-[#2d2d2d] rounded-2xl flex items-center justify-evenly py-5"
      style={{ boxShadow: 'rgba(0,0,0,0.2) 0px 5px 10px' }}
    >
      {icons}
      <div className="card-values block">
        <h3 className="text-white text-lg tracking-wide">{name}</h3>
        <h1 className="text-white text-right text-4xl font-semibold">
          {count}
        </h1>
      </div>
    </div>
  );
};

const DashboardCard = ({ nav }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState({
    users: 0,
    tickets: 0,
  });

  const renderByNavigation = (option) => {
    switch (option) {
      case 'paper':
        return <PaperTable page={page} />;
      case 'users':
        return <UsersTable page={page} />;
      case 'payment':
        return <PaymentTable page={page} />;
      case 'tickets':
        return <GenerateTickets />;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://bitvprayukti.bitsathy.ac.in/api/fetch/fetchCount'
      );

      setCount(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="relative w-full bg-transparent flex-[1] flex flex-col">
      <div className="main-card-container grid grid-cols-4 gap-5 w-full pt-5">
        {cardList.map((card) => (
          <CountCard
            key={card.id}
            name={card.name}
            count={count[card.id] || card.count}
            icons={card.icons}
          />
        ))}
      </div>
      <div
        className="table-container relative mt-5 bg-[#2d2d2d] rounded-2xl w-full flex-[1] max-h-[536px]"
        style={{ boxShadow: 'rgba(0,0,0,0.2) 0px 5px 10px' }}
      >
        {cardList
          .filter((card) => card.id === nav)
          .map((card, index) => (
            <React.Fragment key={index}>
              <div className="list-table flex items-center justify-between p-5">
                <h3 className="text-white text-lg">{card.name}</h3>
                <div className="button-card">
                  <button
                    disabled={page > 1 ? false : true}
                    onClick={(e) => setPage(page - 1)}
                    className="text-blue-500 mx-2"
                  >
                    Prev
                  </button>
                  <button
                    onClick={(e) => setPage(page + 1)}
                    className="text-blue-500 mx-2"
                  >
                    Next
                  </button>
                </div>
              </div>
              {renderByNavigation(card.id)}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default DashboardCard;
