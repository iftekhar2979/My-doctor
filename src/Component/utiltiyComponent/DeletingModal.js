import React from 'react';

const DeletingModal = ({title,details,submit,handleClick,id}) => {
    return (
<div>
<input type="checkbox" id="deleting-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
<label htmlFor="deleting-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{details}</p>
    <div className="modal-action">
      <label htmlFor="deleting-modal" onClick={()=>handleClick(id)} className="btn">{submit}</label>
    </div>
  </div>
</div>
</div>
    );
};

export default DeletingModal;