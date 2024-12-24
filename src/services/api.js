import axios from 'axios';

const api = axios.create({
    // Endereço do servidor
    baseURL: 'http://localhost:3000'
});

export default api