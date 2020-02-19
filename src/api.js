import axios from 'axios';

const api = axios.create({
    baseURL: 'https://script.google.com/macros/s/AKfycbw52XajANJReDgJqdzKuwF7XItFmXfCZHM-cYXUNiiojg5RifDf/exec'
});

export default api;