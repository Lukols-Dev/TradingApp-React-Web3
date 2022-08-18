import axios from "axios";

const axiosStripe = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_URL,
});

axiosStripe.interceptors.request.use((config) => {
  //Add secred key
  const accessToken = process.env.REACT_APP_STRIPE_SECRED_KEY_TEST;

  if (accessToken) {
    config.headers!.Authorization = `Bearer ${process.env.REACT_APP_STRIPE_SECRED_KEY_TEST}`;
  }
  return config;
});

export { axiosStripe as http };
