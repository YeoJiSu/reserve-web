import Axios from "axios";

const axios = Axios.create({
  baseURL: `https://strapi.kspark.link`,
});
export default axios;
