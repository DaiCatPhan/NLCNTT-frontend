import axios from "./customize-axios.js";

const createTour = (rawData) => {
  return axios.post("/api/v1/tour/createTour", rawData);
};

const getTourDetailById = (rawData) => {
  return axios.get("/api/v1/tour/getTourDetailById", {
    params: {
      id: rawData.id,
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

const getTour = (rawData) => {
  return axios.get("/api/v1/tour/getTour", {
    params: {
      type: rawData.type,
    },
  });
};

export default {
  createTour,
  getTourDetailById,
  getTour,
  getToursByPanigation,
  updateTour,
  getAllTour,
};
