import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from '../../components/Tables/userCard';

const UsersTable = ({ page }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const filter = data.filter((data) => {
      return data['name'].toLowerCase().includes(value.toLowerCase());
    });

    setFilterData(filter);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://bitvprayukti.bitsathy.ac.in/api/fetch/users',
        {
          params: { page: page, limit: 100 },
        }
      );

      setData(response.data.data);
      setFilterData(response.data.data);
    };
    fetchData();
  }, [page]);

  return (
    <div
      className="px-5 py-3 relative  overflow-y-scroll"
      style={{ maxHeight: 'calc(100% - 80px)' }}
    >
      <input
        type="search"
        onChange={handleInputChange}
        placeholder="Search Users.."
        className="bg-[#202020] px-5 py-2 rounded-lg border-0 outline-0 text-white"
      />
      <table className="w-full h-full">
        <thead>
          <tr className="border-b-2 w-full border-[#454545]">
            <th className="text-white px-2 py-4 text-center">ID</th>
            <th className="text-white px-2 py-4 text-center">Name</th>
            <th className="text-white px-2 py-4 text-center">Email</th>
            <th className="text-white px-2 py-4 text-center">Phone</th>
            <th className="text-white px-2 py-4 text-center">College</th>
          </tr>
        </thead>

        <tbody>
          {filterData !== 0 ? (
            filterData.map((item, index) => <UserCard key={index} {...item} />)
          ) : (
            <h5 className="text-white p-5">No Data Available</h5>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
