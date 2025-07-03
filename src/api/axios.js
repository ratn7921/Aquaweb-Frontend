
// // ---------- src/api/axios.js ----------
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
// });

// instance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default instance;





// src/api/index.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;