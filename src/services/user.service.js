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

//////// user //////
const getProfileById = () => {
  return axios.get(API_URL + "get-a-profile", { headers: authHeader() });
};
////// hr //////
const getParticularProfile = (id) => {
  return axios.post(API_URL + "get-particular-profile", id, { headers: authHeader() });
};
const getAllProfileDetail = () => {
  return axios.get(API_URL + "all-profile-details", { headers: authHeader() });
};
const UpdateEmployeeDetails = () => {
  return axios.post(API_URL + "update-employee-details", { headers: authHeader() });
};
const deleteEmployeeAccount = () => {
  return axios.post(API_URL + "delete-employee-account", { headers: authHeader() });
};

const getLeaveDetail = () => {
  return axios.get(API_URL + "leave-details", { headers: authHeader() });
};

const leaveApply = (data) => {
  return axios.post(API_URL + "leave-apply", data, { headers: authHeader() });
};
const getEmpDetail = (data) => {
  return axios.get(API_URL + "departments", data, { headers: authHeader() });
};


export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAllProfileDetail,
  getProfileById,
  getLeaveDetail,
  leaveApply,
  getEmpDetail,
  getParticularProfile,
  UpdateEmployeeDetails,
  deleteEmployeeAccount
};
