import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PaperCard from '../../components/Tables/PaperCard';

const PaperTable = ({ page }) => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const filter = data.filter((data) => {
      return data['abstract_id'].toLowerCase().includes(value.toLowerCase());
    });

    setFilterData(filter);
  };

  const approve = async (id) => {
    const passwordConfirm = prompt('Please confirm your password:');

    if (passwordConfirm !== 'ece@23') {
      alert('Error during Validation!');
      return;
    }

    try {
      await axios.get(
        `https://bitvprayukti.bitsathy.ac.in/api/approve/documents/${id}`
      );
    } catch (error) {
      console.log(error);
    }
    setRefresh(!refresh);
  };

  const reject = async (id) => {
    const passwordConfirm = prompt('Please confirm your password:');

    if (passwordConfirm !== 'ece@23') {
      alert('Error during Validation!');
      return;
    }

    try {
      await axios.get(
        `https://bitvprayukti.bitsathy.ac.in/api/reject/documents/${id}`
      );
    } catch (error) {
      console.log(error);
    }
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://bitvprayukti.bitsathy.ac.in/api/fetch/documents',
        {
          params: { page: page, limit: 100 },
        }
      );

      setData(response.data.data);
      setFilterData(response.data.data);
    };
    fetchData();
  }, [refresh, page]);

  return (
    <div
      className="px-5 py-3 relative  overflow-y-scroll"
      style={{ maxHeight: 'calc(100% - 80px)' }}
    >
      <input
        type="search"
        onChange={handleInputChange}
        placeholder="Search Tickets.."
        className="bg-[#202020] px-5 py-2 rounded-lg border-0 outline-0 text-white"
      />
      <table className="w-full h-full">
        <thead>
          <tr className="border-b-2 w-full border-[#454545]">
            <th className="text-white px-2 py-4 text-center">Ticket ID</th>
            <th className="text-white px-2 py-4 text-center">File Path</th>
            <th className="text-white px-2 py-4 text-center">Abstract Title</th>
            <th className="text-white px-2 py-4 text-center">Publication</th>
            <th className="text-white px-2 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filterData !== 0 ? (
            filterData.map((item, index) => (
              <PaperCard
                key={index}
                setRefresh={setRefresh}
                approve={approve}
                reject={reject}
                {...item}
              />
            ))
          ) : (
            <h5 className="text-white p-5">No Data Available</h5>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaperTable;
