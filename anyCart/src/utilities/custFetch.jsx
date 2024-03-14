import axios from "axios";

const url = "https://strapi-store-server.onrender.com/api/products";

const custFetch = axios.create({
  baseURL: url,
});

export default custFetch;
