import axios from "axios";

const api = axios.create({
  baseURL: "https://p2p-payments-server-etsuh.ondigitalocean.app",
});

export default api;
