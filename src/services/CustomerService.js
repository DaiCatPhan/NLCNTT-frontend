import axios from "./customize-axios.js";

const findOrCreate = (dataCreate) => {
  return axios.post("/api/v1/customer/findOrCreate", dataCreate);
};

const fetchDataCusOrderByEmail = (rawData) => {
  return axios.get("/api/v1/customer/readUserByEmail", {
    params: {
      email: rawData.email,
    },
  });
};

export default {
  findOrCreate,
  fetchDataCusOrderByEmail,
};
