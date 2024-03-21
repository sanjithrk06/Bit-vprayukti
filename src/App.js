import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './utils/config';
import Committee from './pages/Committee';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SingleEvent from './pages/SingleEvent';
import Tickets from './pages/Tickets';
import Tickets1 from './pages/Tickets1';
import Working from './pages/Working';
import Accommodation from './pages/Accommodation';
import Loader from './components/loader';
// import RedirectToLogin from './utils/RedirectToLogin';
// import Login from './pages/Login';

const App = () => {
  const [userInfo, setUserInfo] = useState({
    id: null,
    name: null,
    image: null,
    email: null,
    isLoggedIn: null,
  });

  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged((user) => {
      user?.getIdToken(true);
      setUserInfo({
        id: user?.uid,
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
        isLoggedIn: Boolean(user?.uid),
      });
    });
    return () => {
      authUnsubscribe();
    };
  }, []);

  if (userInfo.isLoggedIn === null) return <Loader />;

  if (userInfo.isLoggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route
            path="/admin/dashboard"
            element={<Dashboard {...userInfo} />}
          />
          <Route path="/admin/*" element={<Navigate to="/admin/dashboard" />} />
          {/* For all  */}
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Tickets />} />
          <Route path="/ticketS" element={<Tickets1 />} />
          <Route path="/events/:eventId" element={<SingleEvent />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="*" element={<Working />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* For Admins  */}
        {/* <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/*" element={<RedirectToLogin />} /> */}
        {/* For all  */}
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventId" element={<SingleEvent />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/ticket" element={<Tickets />} />
        <Route path="/tickets" element={<Tickets1 />} />
        {/* <Route path='/register' element={<Register />} /> */}
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="*" element={<Working />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;