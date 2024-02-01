import axios from 'axios';
import { useState } from 'react';
const useDeletePost = (url, id) => {
  const [isDeleted, setDeleted] = useState();
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  axios
    .delete(`${url}${id}`)
    .then((res) => {
      setDeleted(res.data.isDeleted);
      setIsLoadingDelete(true)
    })
    .catch((error) => error.message);
  return [isDeleted,isLoadingDelete];
};

export default useDeletePost;
