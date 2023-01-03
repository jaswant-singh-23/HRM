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
export const getParticularProfile = (id) => {
  return axios.post(API_URL + "get-particular-profile", id, { headers: authHeader() });
};
export const getAllProfileDetail = async () => {
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
const getEmpDetail = () => {
  return axios.get(API_URL + "departments", { headers: authHeader() });
};
////upload image//////
const uploadImage = (data) => {
  return axios.post(API_URL + "upload-user-avatar", data, { headers: authHeader() });
};
export const AlumniView = () => {
  return axios.get(API_URL + "alumni-view", { headers: authHeader() });
};

////// Inventory ////////
const AddInventory = (data) => {
  return axios.post(API_URL + "inventory-add", data, { headers: authHeader() });
};
const GetInventory = () => {
  return axios.get(API_URL + "inventory-view", { headers: authHeader() });
};

const GetInventoryById = (id) => {
  return axios.post(API_URL + "inventory-view-by-id", id,{ headers: authHeader() });
};
const UpdateInventory = (data) => {
  return axios.post(API_URL + "inventory-edit", data,{ headers: authHeader() });
};
const DeleteInventory = (data) => {
  return axios.post(API_URL + "inventory-delete",data,{ headers: authHeader() });
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
  GetInventoryById,
  UpdateInventory,
  DeleteInventory,
};
