import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:9999'
});

export const fetchUsers = () => API.get('/users');