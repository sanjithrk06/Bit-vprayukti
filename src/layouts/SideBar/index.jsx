import { FaUsers, FaFilePdf, FaRupeeSign, FaFilter } from 'react-icons/fa';

const SideBar = ({ nav, setNav }) => {
  return (
    <div className="absolute top-0 left-0 w-[250px] bg-[#202020] h-full p-5 z-50">
      <div className="logo-container w-full mb-10">
        <img
          src={require('../../assets/images/logo.png')}
          alt="logo"
          width="100%"
        />
      </div>
      <div className="admin-navigation">
        <ul className="text-left block">
          <li
            onClick={() => setNav('users')}
            className={`${
              nav === 'users' ? 'active' : ''
            } px-3 py-2 text-white rounded-r-md cursor-pointer mb-2`}
          >
            <FaUsers className="mr-2 inline-block" />
            Users
          </li>
          <li
            onClick={() => setNav('paper')}
            className={`${
              nav === 'paper' ? 'active' : ''
            } px-3 py-2 text-white rounded-r-md cursor-pointer mb-2`}
          >
            <FaFilePdf className="mr-2 inline-block" />
            Paper/Project
          </li>
          <li
            onClick={() => setNav('payment')}
            className={`${
              nav === 'payment' ? 'active' : ''
            } px-3 py-2 text-white rounded-r-md cursor-pointer mb-2`}
          >
            <FaRupeeSign className="mr-2 inline-block" />
            Payment
          </li>
          <li
            onClick={() => setNav('tickets')}
            className={`${
              nav === 'tickets' ? 'active' : ''
            } px-3 py-2 text-white rounded-r-md cursor-pointer mb-2`}
          >
            <FaFilter className="mr-2 inline-block" />
            Tickets
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
