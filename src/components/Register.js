import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import Toast from "../shared/Toast";
import { ToastContainer } from "react-toastify";
import AuthService from "../services/auth.service";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required(" ")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: Yup.string().required(" ").email("Email is invalid"),
  password: Yup.string()
    .required(" ")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  const Submit = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    if (
      formik.values.username !== " " &&
      formik.values.email !== " " &&
      formik.values.password !== " "
    ) {
      const username = formik.values.username;
      const email = formik.values.email;
      const password = formik.values.password;

      AuthService.register(username, email, password).then(
        (response) => {
            // Toast.success(response.data.message)
           navigate("/login")
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    };
    
  };
  return (
    <div className="bg-grey-color">
       <ToastContainer />
      <div className="regis-page">
        <div className="p-4 ">
          <form onSubmit={formik.handleSubmit} ref={form}>
            <h1 className="text-center">Sign Up</h1>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    // value={username}
                    // onChange={onChangeUsername}
                    className={
                      "form-control" +
                      (formik.errors.username && formik.touched.username
                        ? " is-isvalid"
                        : "")
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

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    // value={email}
                    // onChange={onChangeEmail}
                    className={
                      "form-control" +
                      (formik.errors.email && formik.touched.email
                        ? " is-invalid"
                        : "")
                    }
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <div className="invalid-feedback">
                    {formik.errors.email && formik.touched.email
                      ? formik.errors.email
                      : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    // value={password}
                    // onChange={onChangePassword}
                    className={
                      "form-control" +
                      (formik.errors.password && formik.touched.password
                        ? " is-invalid"
                        : "")
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
                  <button  type="submit"  onClick={Submit}
                    className="btn bg-dark-color text-white btn-block"
                  >
                    <span>Sign Up</span>
                  </button>
                </div>
                <div className="form-group">
                  <span>
                    Already have an account? <Link to="/login">Login now</Link>
                  </span>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
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

export default Register;
