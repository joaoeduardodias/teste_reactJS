import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/enterprises',
});
export const apiZipCode = axios.create({
  baseURL: 'https://viacep.com.br/',
});
