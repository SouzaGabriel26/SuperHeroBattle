import axios from "axios";

export const api_heroes = axios.create({
  baseURL: 'http://homologacao3.azapfy.com.br/api/ps/metahumans'
});
