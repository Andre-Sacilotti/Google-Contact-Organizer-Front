import axios from 'axios';

const API = axios.create({
    baseURL: 'localhost:8000/api/',
});

export default API