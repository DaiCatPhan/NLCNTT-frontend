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

const delete_Calendar = (rawData) => {
  return axios.delete("/api/v1/calendar/delete", { data: rawData });
};

const updateRegisteredSeats = (rawData) => {
  return axios.patch("/api/v1/calendar/updateRegisteredSeats", rawData);
};

export default {
  create,
  updateRegisteredSeats,
  delete_Calendar,
};
