import axios from "./customize-axios";

const loginApi = ({ email, password }) => {
  return axios.post("/api/v1/authentication/login", { email, password });
};

const logoutApi = () => {
  return axios.get("/api/v1/authentication/logout");
};

const registerApi = ({ email, name, phone, gender, password }) => {
  return axios.post("/api/v1/authentication/register ", {
    email,
    name,
    phone,
    gender,
    password,
  });
};

const getProfile = async () => {
  let getUser = await axios.get("/api/v1/authentication/getProfile");
  return getUser;
};

export default { registerApi, loginApi, getProfile, logoutApi };
