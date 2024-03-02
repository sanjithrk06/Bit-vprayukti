import React, { useEffect, useState } from 'react';
import Loader from '../components/loader';
import DashboardCard from '../layouts/Dashboard';
import ErrorCard from '../layouts/ErrorCard';
import SideBar from '../layouts/SideBar';
import { auth } from '../utils/config';

const Dashboard = (props) => {
  const [access, setAccess] = useState(null);
  const [nav, setNav] = useState('users');

  
  useEffect(() => {
    const accessData = [
      'gowdham.ee20@bitsathy.ac.in',
      'sanjith.cs22@bitsathy.ac.in',
    ];
    const fetchAdminAccess = async () => {
      if (accessData.includes(props.email)) {
        setAccess(true);
      } else {
        setAccess(false);
      }
    };

    fetchAdminAccess();
  }, [props.email]);

  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = '/admin/login';
  };

  if (access === null) {
    return <Loader />;
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center flex-col text-center bg-[#202020]">
      <SideBar nav={nav} setNav={setNav} />
      {/* logo  */}
      <div className="absolute flex items-center right-5 top-3 account-profile z-50">
        <button
          onClick={handleLogout}
          className="bg-white text-sm rounded-md px-3 py-2 text-black mr-5 hover:text-accent font-medium duration-500"
        >
          LOGOUT
        </button>
        <img
          className="w-14 h-14 rounded-full"
          src={props.image}
          referrerPolicy="no-referrer"
          alt="profile"
        />
      </div>
      <div className="main-container relative bg-[#202020] text-left w-full h-full pl-[300px] p-10 flex flex-col">
        <h3 className="text-white text-xl">Dashboard</h3>
        {access ? (
          <DashboardCard nav={nav} />
        ) : (
          <ErrorCard
            error={'Access is restricted. Contact Administrator to get Access'}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
