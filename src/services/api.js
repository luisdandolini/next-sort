import axios from "axios";

const api = axios.create({
  baseURL: 'https://dev.sort.vps-kinghost.net/api'
});

export default api;