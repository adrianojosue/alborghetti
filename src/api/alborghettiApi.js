import axios from 'axios';

export const alborghettiApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});