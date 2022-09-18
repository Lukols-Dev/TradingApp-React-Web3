import axios from "axios";

const axiosStripe = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_URL,
});

axiosStripe.interceptors.request.use((config) => {
  //Add secred key
  const accessToken = process.env.REACT_APP_STRIPE_SECRED_KEY;

  if (accessToken) {
    config.headers!.Authorization = `Bearer ${process.env.REACT_APP_STRIPE_SECRED_KEY}`;
  }
  return config;
});

// HTTP for connection with backend api
const axiosAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export { axiosStripe as http };
export { axiosAPI as httpAPI };
