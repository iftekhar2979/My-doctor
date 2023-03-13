import { toast } from 'react-toastify';

const success = (statement) => {
  toast.success(statement, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
export default success;
