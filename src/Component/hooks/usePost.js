import { useState } from 'react';

const usePost = (url) => {
   const [postData,setpostData]=useState()
   const [error,setError]=useState()

  
   return {postData,error}
};

export default usePost;