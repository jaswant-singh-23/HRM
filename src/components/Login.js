import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../shared/Toast";
import AuthService from "../services/auth.service";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from 'yup';

import { ToastContainer } from "react-toastify"


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required(" ")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  // email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required(" ")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState(false)
  const [loading, setLoading] = useState("")

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);
    if (
      formik.values.username != " " &&
      formik.values.password != " "
    ){
      const username = formik.values.username;
      const password = formik.values.password;

      AuthService.login(username, password).then((response) => {
         
        Toast.success(response.message)
        console.log(response)
        if(response.roles =="ROLE_USER"){
          navigate("/profile");
        }else if(response.roles=="ROLE_MODERATOR"){
          navigate("/general")
        }
        else(navigate("/home"))
         window.location.reload();
      },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    }
  };
  
  return (
    <div className="bg-grey-color vl-cn d-flex h-100vh align-items-center login-bg-image">
      <ToastContainer />
      <div className="login-page">
        <div className="p-4">
          <form onSubmit={formik.handleSubmit} ref={form}>
            <h1 className="text-center">Login</h1>
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className={
                  'form-control' +
                  (formik.errors.username && formik.touched.username
                    ? ' is-invalid'
                    : '')
                }
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <div className="invalid-feedback">
                {formik.errors.username && formik.touched.username
                  ? formik.errors.username
                  : null}
              </div>

            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className={
                  'form-control' +
                  (formik.errors.password && formik.touched.password
                    ? ' is-invalid'
                    : '')
                }
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className="invalid-feedback">
                {formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null}
              </div>

            </div>

            <div className="form-group">
              <button type="sumbit" onClick={handleLogin} className="btn bg-dark-primary text-white btn-block">
                {/* {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )} */}
                <span>Login</span>
              </button>
            </div>
           

            {message && (
              <div className="form-group">
                <div className="alert alert-danger mt-3" role="alert">
                  {message}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
