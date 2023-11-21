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

const readPanigation_Customer = (dataCreate) => {
  return axios.get("/api/v1/customer/readPanigation");
};

export default {
  findOrCreate,
  fetchDataCusOrderByEmail,
  readPanigation_Customer,
};
