import axios from "./customize-axios.js";

const dashboard = () => {
  return axios.get("/api/v1/statistical/dashboard");
};

export default {
  dashboard,
};
