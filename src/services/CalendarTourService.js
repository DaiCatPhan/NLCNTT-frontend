import axios from "./customize-axios.js";

const create = (rawData) => {
  return axios.post("/api/v1/calendar/create", rawData);
};

const read = (rawData) => {
  return axios.get("/api/v1/tour/getTour", {
    params: {
      id: idTour,
    },
  });
};

const update = (rawData) => {
  return axios.put("/api/v1/tour/updateTour", rawData);
};

const updateRegisteredSeats = (rawData) => {
  console.log("rawData", rawData);
  return axios.patch("/api/v1/calendar/updateRegisteredSeats", rawData);
};

export default {
  create,
  updateRegisteredSeats,
};
