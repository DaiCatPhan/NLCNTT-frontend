import axios from "./customize-axios.js";

const createBookingTour = (rawData) => {
  return axios.post("/api/v1/booking/create", rawData);
};

const readById = (id) => {
  return axios.post("/api/v1/booking/read", {
    params: { id },
  });
};

export default {
  createBookingTour,
};
