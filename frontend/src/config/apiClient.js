import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: API_URL,
});

export default API;

export const formatAxiosError = ({ response }) => {
  const { status, data } = response || {};
  return Promise.reject({ status, ...data });
};
export const formatAxiosResponse = ({ data }) => data;
