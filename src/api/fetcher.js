import axios, { AxiosError } from 'axios';
import { getCookie } from 'cookies-next';

export const axiosInstance = (service: 'buyer' | 'cart' = 'buyer') =>
  axios.create({
    baseURL:
      service === 'buyer'
        ? process.env.NEXT_PUBLIC_API_URL
        : service === 'cart'
        ? process.env.NEXT_PUBLIC_CART_URL
        : '',
    headers: {
      'Authorization': `Bearer ${String(getCookie('token'))}`,
      'Content-Type': 'application/json',
    },
  });

export const fetcher = (url: string) =>
  axiosInstance()
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      if (err.response.status === 401) {
        window.location.href = '/auth/login';
      }
    });

export const fetcherCart = async (
  url: string,
  params?: { page: number; pageSize: number }
) => {
  try {
    const { data } = await axiosInstance('cart').get(url, {
      params,
    });
    return data;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
    if (error?.response?.status === 401) {
      window.location.href = '/auth/login';
    }
  }
};
