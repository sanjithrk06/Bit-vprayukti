import React from 'react';
import Header from '../layouts/NavBar/Navbar';

const Working = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-primary relative items-center justify-center flex">
        <h3 className="text-white text-2xl">
          Sorry, the page you're looking for doesn't exist
        </h3>
      </div>
    </>
  );
};

export default Working;
