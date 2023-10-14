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

const readProcessTourbyId = (rawData) => {
  const { idTour } = rawData;
  return axios.get("/api/v1/processTour/read", {
    params: {
      idTour: idTour,
    },
  });
};

const updateProcessTourbyId = (rawData) => {
  return axios.put("/api/v1/processTour/update", rawData);
};

const deleteProcessTourbyId = (rawData) => {
  return axios.delete("/api/v1/processTour/delete", {
    data: { idTour: rawData.idTour, idProcessTour: rawData.idProcessTour },
  });
};

export default {
  getToursByPanigation,
  createProcessTour,
  readProcessTourbyId,
  updateProcessTourbyId,
  deleteProcessTourbyId,
};
