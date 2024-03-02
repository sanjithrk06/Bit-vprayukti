import React from 'react';

const PaymentCard = (props) => {
  return (
    <tr className="border-y-2 w-full border-[#454545]">
      <td className="text-white px-2 py-4 text-center">{props.payment_id}</td>
      <td className="text-blue-300 px-2 py-4 text-center">
        <a href={props.file_path} target="_blank" rel="noreferrer">
          View
        </a>
      </td>
      <td className="text-white px-2 py-4 text-center">
        {props.transaction_id}
      </td>
      <td className="text-white px-2 py-4 text-left">{props.sender_name}</td>
      <td className="text-white px-2 py-4">
        <button
          onClick={() => props.approve(props.payment_id)}
          className="bg-green-600 px-3 text-white rounded-md py-2 mx-2"
        >
          Confirm
        </button>
        {/* <button
          onClick={() => props.reject(props.abstract_id)}
          className="bg-red-600 px-3 text-white rounded-md py-2 mx-2"
        >
          Reject
        </button> */}
      </td>
    </tr>
  );
};

export default PaymentCard;
