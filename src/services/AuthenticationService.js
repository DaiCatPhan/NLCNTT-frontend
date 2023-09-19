import axios from "./customize-axios";

const loginApi = ({ valueLogin, password }) => {
  return axios.post("/api/v1/authentication/login", { valueLogin, password });
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

export default { registerApi, loginApi, getProfile };
