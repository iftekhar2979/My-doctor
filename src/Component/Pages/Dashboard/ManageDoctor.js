import React from 'react';
import { useQuery } from 'react-query';
import HeadingSection from '../../utiltiyComponent/HeadingSection';
import SingleDoctor from './SingleDoctor';

const ManageDoctor = () => {
  const {data:doctors=[],isLoading} = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8000/getDoctors`);
      const data = await response.json();
      return data;
    },
  });
  return (
    <div>
      <HeadingSection>Doctor's, </HeadingSection>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>IMAGE</th>
              <th>DOCTOR NAME</th>
              <th> EMAIL</th>
              <th> SPECIALITIES</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {doctors.map((item, index) => (
              <SingleDoctor
                key={item._id}
                index={index}
                data={item}
             
              ></SingleDoctor>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
