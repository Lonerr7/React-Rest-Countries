import axios from 'axios';
import { CountryType } from '../types/types';

const axiosInstance = axios.create({
  baseURL: `https://restcountries.com/v3.1/`,
});

export const countriesAPI = {
  getCountries() {
    return axiosInstance.get<CountryType[]>(`all`);
  },

  getCurrentCountry(countryName: string) {
    return axiosInstance.get<[CountryType]>(`name/${countryName}`);
  },

  getCountryBorders(borders: string) {
    return axiosInstance.get<CountryType[]>(`alpha?codes=${borders}`)
  }
};
