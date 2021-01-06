import axios from 'axios';

const API_URL = 'https://sds-dsdeliver-wes.herokuapp.com';

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}
