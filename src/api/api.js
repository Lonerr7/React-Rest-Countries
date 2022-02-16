import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://restcountries.com/v3.1/`,
});

export const countriesAPI = {
  getCountries() {
    return axiosInstance.get(`all`);
  },
};
