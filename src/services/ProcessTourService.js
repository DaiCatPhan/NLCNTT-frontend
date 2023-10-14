import axios from "./customize-axios.js";

const getToursByPanigation = (rawData) => {
  return axios.get("/api/v1/processTour/getPanigation", {
    params: {
      page: rawData.page,
      limit: rawData.limit,
    },
  });
};

const createProcessTour = (rawData) => {
  return axios.post("/api/v1/processTour/create", rawData);
};

export default {
  getToursByPanigation,
  createProcessTour,
};
