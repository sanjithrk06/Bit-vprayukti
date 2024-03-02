import React from 'react';

const UserCard = (props) => {
  return (
    <tr className="border-y-2 w-full border-[#454545]">
      <td className="text-blue-300 px-2 py-4 text-left">{props.user_id}</td>
      <td className="text-white px-2 py-4 text-left">{props.name}</td>
      <td className="text-white px-2 py-4 text-left">{props.email}</td>
      <td className="text-white px-2 py-4 text-left">{props.phone}</td>
      <td className="text-white px-2 py-4 text-left">{props.college_name}</td>
    </tr>
  );
};

export default UserCard;
