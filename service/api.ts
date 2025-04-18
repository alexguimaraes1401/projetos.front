import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5275',
});

export default api;
