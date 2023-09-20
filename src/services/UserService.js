import axios from "./customize-axios.js";

const fetchAllUser = (page, limit) => {
  return axios.get("/api/v1/staff/read", {
    params: { page: page, limit: limit },
  });
};

const createUser = (dataCreate) => {
  return axios.post("/api/v1/staff/create", dataCreate);
};

const updateUser = (dataUpdate) => {
  return axios.put("/api/v1/staff/update", dataUpdate);
};

const deleteUser = (user) => {
  return axios.delete("/api/v1/staff/delete", { data: { id: user.id } });
};

export default { fetchAllUser, createUser, updateUser, deleteUser };
