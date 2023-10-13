import axios from "./customize-axios.js";

const getToursByPanigation = (rawData) => {
  return axios.get("/api/v1/processTour/getPanigation", {
    params: {
      page: rawData.page,
      limit: rawData.limit,
    },
  });
};

export default {
  getToursByPanigation,
};
