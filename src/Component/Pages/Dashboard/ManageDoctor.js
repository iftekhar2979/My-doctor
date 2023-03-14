import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeletingModal from '../../utiltiyComponent/DeletingModal';
import HeadingSection from '../../utiltiyComponent/HeadingSection';
import toastSuccessObj from '../../utiltiyComponent/toastSuccessObj';
import SingleDoctor from './SingleDoctor';

const ManageDoctor = () => {
  const [doctor, setDoctor] = useState();
  // const [isDeleted,isLoadingDelete]=useDeletePost('http://localhost:8000/deleteDoctor/',ids)
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8000/getDoctors`);
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
      .delete(`http://localhost:8000/deleteDoctor/${doctor._id}`)
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
