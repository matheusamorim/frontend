import axios from 'axios';
const API = 'http://localhost:8080';

export function fetchProducts(){

    return axios(`${API}/products`)
}