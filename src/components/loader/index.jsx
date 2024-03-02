import React from 'react';
import './styles.css';
import flogo from '../../assets/images/flogo.png'

const Loader = () => {
  return (
    <div className="spinner-box w-full h-screen grid place-items-center bg-primary text-2xl text-white">
      <div className="pulse-container">
        <img src={flogo} alt="V-Prayukti" />
        <br />
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
      </div>
    </div>
  );
};

export default Loader;
