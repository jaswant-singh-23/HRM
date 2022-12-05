import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/api/";

const user = JSON.parse(localStorage.getItem("user"));
const username = user ? { username: user.username } : "";
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getProfileDetail = () => {
  return axios.get(API_URL + "profile-details", { headers: authHeader() });
};
const getProfileById = () => {
  return axios.get(API_URL + "get-a-profile", { headers: authHeader() });
};

const getLeaveDetail = () => {
  return axios.get(API_URL + "leave-details", { headers: authHeader() });
};

const leaveApply = (data) => {
  return axios.post(API_URL + "leave-apply", data, { headers: authHeader() });
};


export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getProfileDetail,
  getProfileById,
  getLeaveDetail,
  leaveApply,
};
