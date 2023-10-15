import axios from "./customize-axios.js";

const createTour = (rawData) => {
  return axios.post("/api/v1/tour/createTour", rawData);
};

const getTour = (rawData) => {
  return axios.get("/api/v1/tour/getTour", {
    params: {
      type: rawData.type,
      id: rawData.id,
      name: rawData.name,
      domain: rawData.domain,
    },
  });
};

const getToursByPanigation = (rawData) => {
  return axios.get("/api/v1/tour/getTourPanigation", {
    params: {
      page: rawData.page,
      limit: rawData.limit,
    },
  });
};

const updateTour = (rawData) => {
  return axios.put("/api/v1/tour/updateTour", rawData);
};

const getAllTour = () => {
  return axios.get("/api/v1/tour/getAllTour");
};

export default {
  createTour,
  getTour,
  getToursByPanigation,
  updateTour,
  getAllTour,
};
