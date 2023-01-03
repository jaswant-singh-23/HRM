import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from '../Shared/Sidebar';
import { useFormik } from "formik";
import * as Yup from 'yup';
import userService from "../../services/user.service";

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
// username,
//   totalItems: req.body.totalItems,
//     itemName: req.body.itemName,

const AddInventory = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [itemName, setItemName] = useState([]);
  
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value , checked);
    if (checked) {
      setItemName([...itemName, value])
    }
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      totalItems: "",
      itemName: [],
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });
  
  const handleUpload = (e) => {
    e.preventDefault();
    console.log(itemName);
    // if (
    //   formik.values.username != " " && 
    //   formik.values.email != " " &&
    //   formik.values.totalItems != " "
    // ){
    //   const username = formik.values.username;
    //   const email = formik.values.email;
    //   const totalItems = formik.values.number;
    const data = formik.values;
    console.log(data);
    userService.AddInventory(data).then((response) => {
      console.log(response)
      setMessage(response.data.data)
      navigate("/inventory-control")
    },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          setMessage(resMessage.message);
      }
    );
  };
  return (
    <div className="bg-grey-color d-flex align-items-center">
      <Sidebar />
      <div className="inventory-page">
        <div className="p-4">
          <form onSubmit={formik.handleSubmit} ref={form}>
            <h1 className="text-center">Add Inventory</h1>

            <div className="form-group mb-3">
              <label htmlFor="username">User Name</label>
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
              <label htmlFor="username">Email</label>
              <input
                type="text"
                name="email"
                className={
                  'form-control' +
                  (formik.errors.email && formik.touched.email
                    ? ' is-invalid'
                    : '')
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

            <div className="form-group mb-3">
              <label htmlFor="password">No of Items</label>
              <input
                type="number"
                name="totalItems"
                className={
                  'form-control' +
                  (formik.errors.totalItems && formik.touched.totalItems
                    ? ' is-invalid'
                    : '')
                }
                onChange={formik.handleChange}
                value={formik.values.totalItems}
              />
              <div className="invalid-feedback">
                {formik.errors.totalItems && formik.touched.totalItems
                  ? formik.errors.totalItems
                  : null}
              </div>
            </div>

            <label htmlFor="password">Items Name</label>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className=
                  {
                    "form-check-input" + (formik.errors.itemName && formik.touched.itemName
                      ? ' is-invalid'
                      : '')
                  }
                  onChange={formik.handleChange}
                  value="keyboard"
                  type="checkbox" id="check1" name="itemName" />
                <label className="form-check-label">Keyboard</label>
              </div>

              <div className="form-check">
                <input className=
                  {
                    "form-check-input" + (formik.errors.itemName && formik.touched.itemName
                      ? ' is-invalid'
                      : '')
                  }
                  onChange={formik.handleChange}
                  value="mouse"
                  type="checkbox" id="check1" name="itemName" />
                <label className="form-check-label">Mouse</label>
              </div>

              <div className="form-check">
                <input
                  className=
                  {
                    "form-check-input" + (formik.errors.itemName && formik.touched.itemName
                      ? ' is-invalid'
                      : '')
                  }
                  onChange={formik.handleChange}
                  value="headphone"
                  type="checkbox" id="check1" name="itemName" />
                <label className="form-check-label">Headphone</label>
              </div>

              <div className="form-check">
                <input className=
                  {
                    "form-check-input" + (formik.errors.itemName && formik.touched.itemName
                      ? ' is-invalid'
                      : '')
                  }
                  onChange={formik.handleChange}
                  value="window10"
                  type="checkbox" id="check1" name="itemName" />
                <label className="form-check-label">Window10</label>
              </div>
            </div>

            <div className="form-group">
              <button type="sumbit" onClick={handleUpload} className="btn bg-dark-primary text-white btn-block mt-2">
                <span>Upload</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger mt-3" role="alert">
                  {message}
                </div>
              </div>
            ) &&(
              <div className="form-group">
                <div className="alert alert-danger mt-3" role="alert">
                {message}
                </div>
              </div>
              )
            }
          </form>
        </div>
      </div>

    </div>
  )
}
export default AddInventory;