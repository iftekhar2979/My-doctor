import axios from 'axios';
const postDocument = (url,user) => {
    
  axios
    .post(url, {...user})
    .then((res) => {
      if (res.data) {
       console.log(res.data)
      }
      return res.data;
    })
    .catch((err) => console.error(err));
};

export default postDocument
