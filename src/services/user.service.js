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
const UpdateEmployeeDetails = (data) => {
  return axios.post(API_URL + "update-employee-details", data, { headers: authHeader() });
};
const deleteEmployeeAccount = (data) => {
  return axios.post(API_URL + "delete-employee-account", data, { headers: authHeader() });
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
////upload image//////
const uploadImage = (data) => {
  return axios.post(API_URL + "upload-user-avatar", data, { headers: authHeader() });
};
 const AddInventory = (data) => {
   return axios.post(API_URL + "inventory-add", data, { headers: authHeader() });
 };
 const GetInventory = () => {
   return axios.get(API_URL + "inventory-view", { headers: authHeader() });
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
  deleteEmployeeAccount,
  uploadImage,  
  AddInventory,
  GetInventory,
};
