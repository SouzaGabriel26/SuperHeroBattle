import axios from "axios";

export const api_heroes = axios.create({
  baseURL: '/api/proxy'
});
