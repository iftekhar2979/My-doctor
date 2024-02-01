import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import SingleUser from './SingleUser';

const Alluser = () => {
  const {
    data: allUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await fetch(`https://my-doctor-kw9l.onrender.com/allUser`, {
        method: 'GET',
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      console.log(data)
      return data;
    },
  });
  const handleAdmin = (id) => {
    axios
      .put(
        `https://my-doctor-kw9l.onrender.com/dashboard/admin/${id}`,
        { role: 'admin' },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.role) {
          refetch();
        }
      })
      .catch((error) => error);
  };
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUsers?.map((item, index) => (
              <SingleUser
                key={item._id}
                index={index}
                data={item}
                handleAdmin={handleAdmin}
              ></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
