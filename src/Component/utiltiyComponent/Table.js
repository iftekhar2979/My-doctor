import React from 'react';

const Table = ({name,treatment,date,visit,price,children}) => {
  return (
    <div className=''>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th></th>
              <th>{name}</th>
              <th>{treatment}</th>
              <th>{date}</th>
              <th>{visit}</th>
              <th>{price}</th>
            </tr>
          </thead>
          <tbody>
           {children}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
