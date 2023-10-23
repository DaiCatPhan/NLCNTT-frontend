import axios from "./customize-axios.js";

const findOrCreate = (dataCreate) => {
  return axios.post("/api/v1/customer/findOrCreate", dataCreate);
};

export default {
  findOrCreate,
};
