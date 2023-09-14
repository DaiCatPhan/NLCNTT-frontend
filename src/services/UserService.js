import axios from "./customize-axios";

function fetchAllUser() {
  return axios.get(`/api/v1/staff/getListPaginationStaff`, { offset, limit });
}

const postCreareUser = ({ name, phone, gender, role, email, password }) => {
  return axios.post("/api/v1/staff/createStaff", {
    name,
    phone,
    gender,
    role,
    email,
    password,
  });
};

const updateUser = ([id, data]) => {
  return axios.put(`/api/v1/staff/updateStaff/${id}`, data);
};

const deleteUser = (id) => {
  return axios.delete(`/api/v1/staff/deleteStaff/${id}`);
};

const loginApi = ({ email, password }) => {
  return axios.post("/api/v1/authentication/login", { email, password });
};

export { fetchAllUser, postCreareUser, updateUser, deleteUser, loginApi };
