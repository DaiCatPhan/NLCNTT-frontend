import axios from "./customize-axios.js";

const createBookingTour = (rawData) => {
  return axios.post("/api/v1/booking/create", rawData);
};

const deleteBookingTour = (rawData) => {
  return axios.delete("/api/v1/booking/delete", {
    data: rawData,
  });
};

const read = (rawData) => {
  return axios.get(`/api/v1/booking/read?${rawData}`);
};

const readAll = (rawData) => {
  return axios.get(`/api/v1/booking/readAll?${rawData}`);
};

const update = (rawData) => {
  return axios.put(`/api/v1/booking/update`, rawData);
};

export default {
  createBookingTour,
  deleteBookingTour,
  read,
  readAll,
  update,
};
