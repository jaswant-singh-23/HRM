import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from '../Shared/Sidebar';
import { useFormik } from "formik";
import * as Yup from 'yup';
import userService from "../../services/user.service";
import Select from "react-select";

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
const optionList = [
  { value: "keyboard", label: "Keyboard" },
  { value: "mouse", label: "Mouse" },
  { value: "headphone", label: "Headphone" },
  { value: "window10", label: "Window10" },
];
const AddInventory = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [totalItems, setTotalItems] = useState("");
  const [itemName, setItemName] = useState();
  // const [selectedOptions, setSelectedOptions] = useState();


  const handleUsername = (e) => {
    const username = e.target.value;
    setUsername(username)
  }
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email)
  }
  const handleTotalItems = (e) => {
    const totalItems = e.target.value;
    setTotalItems(totalItems)
  }
  const handleSelect = (data) => {
    setItemName(data);
  }

  const handleUpload = (e) => {
    e.preventDefault();

    // console.log(itemName);
    // if (
    //   formik.values.username != " " && 
    //   formik.values.email != " " &&
    //   formik.values.totalItems != " "
    // ){
    //   const username = formik.values.username;
    //   const email = formik.values.email;
    //   const totalItems = formik.values.number;
    const data = {
      username: username,
      email :email,
      totalItems:totalItems,
      itemName:itemName,
    };
    console.log(username, email, totalItems, itemName);
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
          <form ref={form}>
            <h1 className="text-center">Add Inventory</h1>

            <div className="form-group mb-3">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                className={
                  'form-control'
                }
                onChange={handleUsername}
                value={username}
              />

            </div>

            <div className="form-group mb-3">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                name="email"
                className={
                  'form-control'
                }
                onChange={handleEmail}
                value={email}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">No of Items</label>
              <input
                type="number"
                name="totalItems"
                className={
                  'form-control'
                }
                onChange={handleTotalItems}
                value={totalItems}
              />
            </div>

            <label htmlFor="password">Items Name</label>
             {/* <div className="d-flex justify-content-between">
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
                  type="checkbox" id="keyboard" name="itemName" />
                <label htmlFor="keyboard" className="form-check-label">Keyboard</label>
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
                  type="checkbox" id="mouse" name="itemName" />
                <label htmlFor="mouse" className="form-check-label">Mouse</label>
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
                  type="checkbox" id="headphone" name="itemName" />
                <label htmlFor="headphone" className="form-check-label">Headphone</label>
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
                  type="checkbox" id="window10" name="itemName" />
                <label htmlFor="window10" className="form-check-label">Window10</label>
              </div>
            </div>  */}

            <div className="dropdown-container">
              <Select
                options={optionList}
                placeholder="Select Items"
                value={itemName}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
              />
            </div>
            
            <div className="form-group">
              <button type="sumbit" onClick={handleUpload} className="btn bg-dark-primary text-white btn-block mt-2">
                <span>Upload</span>
              </button>
            </div>
              
            {
              message && (
                <div className="form-group">
                  <div className="alert alert-danger mt-3" role="alert">
                    {message}
                  </div>
                </div>
              ) && (
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