import axios from "./customize-axios.js";

const createTour = (rawData) => {
  return axios.post("/api/v1/tour/createTour", rawData);
};

export default {
  createTour,
};
