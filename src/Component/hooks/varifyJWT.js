import axios from 'axios';
const jwtProvider = (user) => {
    
  axios
    .post(`https://my-doctor-kw9l.onrender.com/jwt?email=${user?.email}`)
    .then((res) => {
      if (res.data) {
        console.log(res.data)
        localStorage.setItem('token', res.data);
      }
      return res.data;
    })
    .catch((err) => console.error(err));
};

export default jwtProvider