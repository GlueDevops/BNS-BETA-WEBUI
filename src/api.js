import axios from "axios";
export const http = axios.create({
  baseURL: 'https://beta-api-live.s360.cloud',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,

});

export const SIGNUP = "/api/signup"; //POST

export const SIGNIN = "/api/signin"; // POST

export const COUNTRIES = "https://beta-api-live.s360.cloud/api/countries"; //GET