import { FaFilePdf, FaRupeeSign } from 'react-icons/fa';

const SideBar = ({ nav, setNav }) => {
  return (
    <div className="absolute top-0 left-0 w-[250px] bg-primary h-full p-5 z-50">
      <div className="logo-container w-full mb-10">
        <img
          src={require('../../assets/images/flogo.png')}
          alt="logo"
          width="100%"
        />
      </div>
      <div className="admin-navigation">
        <ul className="text-left block">
          {/* <li
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
          </li> */}
          <li
            onClick={() => setNav('payApprove')}
            className={`${
              nav === 'payApprove' ? 'active' : ''
            } px-3 py-2 text-white rounded-r-md cursor-pointer mb-2`}
          >
            <FaRupeeSign className="mr-2 inline-block" />
            Payment Approved
          </li>
          <li
            onClick={() => setNav('payReject')}
            className={`${
              nav === 'payReject' ? 'active' : ''
            } px-3 py-2 text-white rounded-r-md cursor-pointer mb-2`}
          >
            <FaRupeeSign className="mr-2 inline-block" />
            Payment Reject
          </li>
          <li
            onClick={() => setNav('docsApprove')}
            className={`${
              nav === 'docsApprove' ? 'active' : ''
            } px-3 py-2 text-white rounded-r-md cursor-pointer mb-2`}
          >
            <FaFilePdf className="mr-2 inline-block" />
            Documents Approved
          </li>
          <li
            onClick={() => setNav('docsReject')}
            className={`${
              nav === 'docsReject' ? 'active' : ''
            } px-3 py-2 text-white rounded-r-md cursor-pointer mb-2`}
          >
            <FaFilePdf className="mr-2 inline-block" />
            Documents Rejected
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
