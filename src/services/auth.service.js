import axios from "axios";

const API_URL = "http://localhost:4000/api/auth/";

const register = (data) => {
  return axios.post(API_URL + "signup", {
   data
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const addNewUser = (data) => {
  return axios.post(API_URL + "add-new-user", data);
};

const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  addNewUser,
};
export default AuthService;