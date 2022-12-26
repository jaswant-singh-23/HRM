import React , { useRef } from "react";
import Sidebar from '../Shared/Sidebar';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import userService from "../../services/user.service";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required(" ")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  // email: Yup.string().required("Email is required").email("Email is invalid"),
  email: Yup.string()
    .required(" ")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
    totalItems: Yup.string()
    .required(" "),
});

const EditInventory = () => {
  const navigate = useNavigate()
  const form = useRef(); 
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
  
  const handleUpdate = () => {

  }
  return (

    <div className="bg-grey-color d-flex align-items-center  ">
      <Sidebar />
      <div className="inventory-page">
        <div className="p-4">
          <form onSubmit={formik.handleSubmit} ref={form}>
            <h1 className="text-center">Edit Inventory</h1>

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
              <button type="sumbit" onClick={handleUpdate} className="btn bg-dark-primary text-white btn-block mt-2">
                <span>Update</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
export default EditInventory;