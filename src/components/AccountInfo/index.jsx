import React from 'react';
import { FaCopy } from 'react-icons/fa';

const AccountInfo = () => {
  return (
    <div
      data-aos="flip-right"
      className="account-details-table relative bg-white px-10 py-10 rounded-xl duration-500 text-center "
    >
      <h3 className="text-primary text-2xl uppercase font-semibold">
        Account Details
      </h3>
      <div className="account-info w-full text-left mt-3">
        <h3 className="text-primary text-lg font-medium">Bank Name</h3>
        <div className="copy-container w-full mt-2 bg-gray-200 px-3 py-2 rounded border-2  flex items-center">
          <p className="flex-1">Axis Bank</p>
          <FaCopy
            onClick={(e) => {
              navigator.clipboard.writeText('Axis Bank');
              e.currentTarget.style.color = '#ff0000';
            }}
            className="text-accent cursor-pointer"
          />
        </div>
      </div>
      <div className="account-info w-full text-left mt-3">
        <h3 className="text-primary text-lg font-medium">IFSC Code</h3>
        <div className="copy-container w-full mt-2 bg-gray-200 px-3 py-2 rounded border-2 flex items-center">
          <p className="flex-1">UTIB0000368</p>
          <FaCopy
            onClick={(e) => {
              navigator.clipboard.writeText('UTIB0000368');
              e.currentTarget.style.color = '#ff0000';
            }}
            className="text-accent cursor-pointer"
          />
        </div>
      </div>
      <div className="account-info w-full text-left mt-3">
        <h3 className="text-primary text-lg font-medium">Account Number</h3>
        <div className="copy-container w-full mt-2 bg-gray-200 px-3 py-2 rounded border-2 flex items-center">
          <p className="flex-1">911010036862582</p>
          <FaCopy
            onClick={(e) => {
              navigator.clipboard.writeText('911010036862582');
              e.currentTarget.style.color = '#ff0000';
            }}
            className="text-accent cursor-pointer"
          />
        </div>
      </div>
      <div className="account-info w-full text-left mt-3">
        <h3 className="text-primary text-lg font-medium">Account Name</h3>
        <div className="copy-container w-full mt-2 bg-gray-200 px-3 py-2 rounded border-2 flex items-center">
          <p className="flex-1">BIT – CENTRE FOR ADVANCED STUDIES</p>
          <FaCopy
            onClick={(e) => {
              navigator.clipboard.writeText(
                'BIT – CENTRE FOR ADVANCED STUDIES'
              );
              e.currentTarget.style.color = '#ff0000';
            }}
            className="text-accent cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
