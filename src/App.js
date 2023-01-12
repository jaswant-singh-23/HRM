import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/style.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
// import Profile from "./components/Profile";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import Profile from "./components/Profile";
import AdminDash from "./components/AdminDash";
import Upload from "./components/Upload";
import Leave from "./components/Leave";
import logo from "./assets/images/logo-horizontal-white.png";
import { ToastContainer } from "react-toastify";
import EditProfile from "./components/EditProfile";
import {
  PrivateModeratorRoute,
  PrivateRoute,
} from "./shared/components/PrivateRoute";
import InventoryControl from "./HRM/Pages/InventoryControl";
import LeaveManagement from "./HRM/Pages/LeaveManagement";
import General from "./HRM/Pages/General";
import EmpDetails from "./HRM/Pages/EmpDetails";
import AlumniDetail from "./HRM/Pages/AlumniDetail";
import ExcelJsonData from "./HRM/Pages/ExcelJsonData";
import EditEmployee from "./HRM/Pages/EditEmployee";
import AddInventory from "./HRM/Pages/AddInventory";
import EditInventory from "./HRM/Pages/EditInventory";
import VacancyHiring from "./HRM/Pages/VacancyHiring";
import UpdateVacancy from "./HRM/Pages/UpdateVacancy"

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();
  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }
  }, [currentUser]);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark d-flex justify-content-between bg-dark-color px-2">
        <div className="d-flex">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="" width="150px" />
          </Link>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li> */}

            {/* {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>
        </div>
        <div className="d-flex align-items-center">
          {currentUser && (
            <div className="mx-2">
              <i class="fa-solid fa-bell text-white cursor-pointer fs-5 "></i>
            </div>
          )}
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.name}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              {/* <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li> */}
            </div>
          )}
        </div>
      </nav>

      <div className="container-fluid p-0">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile-edit"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDash />
              </PrivateRoute>
            }
          />
          <Route path="/upload" element={<Upload />} />
          <Route
            path="/leave"
            element={
              <PrivateRoute>
                <Leave />
              </PrivateRoute>
            }
          />
          <Route
            path="/inventory-control"
            element={
              <PrivateModeratorRoute>
                <InventoryControl />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/leave-management"
            element={
              <PrivateModeratorRoute>
                <LeaveManagement />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/general"
            element={
              <PrivateModeratorRoute>
                <General />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/emp-detail"
            element={
              <PrivateModeratorRoute>
                <EmpDetails />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/edit-emp/:id"
            element={
              <PrivateModeratorRoute>
                <EditEmployee />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/add-inventory"
            element={
              <PrivateModeratorRoute>
                <AddInventory />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/edit-inventory/:id"
            element={
              <PrivateModeratorRoute>
                <EditInventory />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/emp-details"
            element={
              <PrivateModeratorRoute>
                <ExcelJsonData />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/alumni-detail"
            element={
              <PrivateModeratorRoute>
                <AlumniDetail />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/vacancy-hiring"
            element={
              <PrivateModeratorRoute>
                <VacancyHiring />
              </PrivateModeratorRoute>
            }
          />
          <Route
            path="/update-vacancy"
            element={
              <PrivateModeratorRoute>
                <UpdateVacancy />
              </PrivateModeratorRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
