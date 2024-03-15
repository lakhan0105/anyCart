import axios from "axios";

const url = "https://strapi-store-server.onrender.com/api";

const custFetch = axios.create({
  baseURL: url,
});

export default custFetch;
