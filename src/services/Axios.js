import axios from 'axios';

const API = axios.create({
    baseURL: 'https://desafio-conecta-d4fbb.rj.r.appspot.com/api',
});

export default API


