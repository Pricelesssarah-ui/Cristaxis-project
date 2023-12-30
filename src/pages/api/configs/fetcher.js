//import axios, { AxiosError } from 'axios';
//import { getCookie } from 'cookies-next';
import axios from 'axios';


export const axiosInstance = () =>
  axios.create({
    baseURL: 'https://cristaxi.onrender.com/api/v1',
    headers: {
      //'Authorization': `Bearer ${String(getCookie('token'))}`,
      'Content-Type': 'application/json',
    },
  });


export const fetcher = (url) =>
  axiosInstance()
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      if (err.response.status === 401) {
        window.location.href = '/';
      }
    });


