// Set config defaults when creating the instance
import axios from 'axios';

const myAxios = axios.create({
  // baseURL is localhost:3000 in development and https://eloken.com in production
    baseURL: process.env.NEXT_PUBLIC_WEBSITE_URL,
});

export default myAxios;
