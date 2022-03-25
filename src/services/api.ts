import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fake-server-app-2.herokuapp.com/enterprises',
});
export const apiZipCode = axios.create({
  baseURL: 'https://viacep.com.br/',
});
