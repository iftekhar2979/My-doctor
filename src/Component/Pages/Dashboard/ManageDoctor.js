import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeletingModal from '../../utiltiyComponent/DeletingModal';
import HeadingSection from '../../utiltiyComponent/HeadingSection';
import toastSuccessObj from '../../utiltiyComponent/toastSuccessObj';
import SingleDoctor from './SingleDoctor';

const ManageDoctor = () => {
  const [doctor, setDoctor] = useState();
  // const [isDeleted,isLoadingDelete]=useDeletePost('https://my-doctor-kw9l.onrender.com/deleteDoctor/',ids)
  const {
    data: doctors = [],
    refetch,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const response = await fetch(`https://my-doctor-kw9l.onrender.com/getDoctors`,{
        method: 'POST',
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        }});
      const data = await response.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    setDoctor(id);
    refetch();
  };
  const handleRemove = () => {
    axios
      .delete(`https://my-doctor-kw9l.onrender.com/deleteDoctor/${doctor._id}`,{
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        }})
      .then((res) => {
        if (res.data.isDeleted) {
          refetch()
          toastSuccessObj(res.data.message);
        }
      })
      .catch((error) => error.message);
      
  };
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
              <th> DELETE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {doctors.map((item, index) => (
              <SingleDoctor
                key={item._id}
                index={index}
                data={item}
                handleDelete={handleDelete}
                doctor={doctor}
              ></SingleDoctor>
            ))}
          </tbody>
        </table>
      </div>
      <DeletingModal
        title={`Do You Want To Remove ${doctor?.doctorName}`}
        details={`Are You you Want to Delete ${doctor?.doctorEmail}`}
        submit={`Delete`}
        handleClick={handleRemove}
      ></DeletingModal>
    </div>
  );
};

export default ManageDoctor;
