import React from 'react';

const ErrorCard = ({ error }) => {
  return (
    <div className="flex mt-4 text-white h-full items-center justify-center">
      <div className="content text-xl px-5 py-3 text-center bg-red-500 rounded-md">
        {error}
      </div>
    </div>
  );
};

export default ErrorCard;
