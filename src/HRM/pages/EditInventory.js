import React, { useRef, useState, useEffect } from "react";
import Sidebar from '../Shared/Sidebar';
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import userService from "../../services/user.service";
import { Chip, Stack } from "@mui/material";
import Select from "react-select";


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

  const [content, setContent] = useState([]);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const form = useRef();
  
  const [itemName, setItemName] = useState([
    { keyboard: '' },
    { mouse: '' },
    { headphone: '' },
    { window10: '' }
  ])

  // const handleChange = (e) => {
  // //   const value = e.target.value;
  // //   const checked = e.target.checked;
  // //   console.log(value, checked)
  // //   if (checked) {
  // //     setItemName([...itemName, value])
  // //   }
  // // }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

  //////get inventory by id/////

  useEffect(() => {
    var getId = { id: id };
    userService.GetInventoryById(getId).then(
      (response) => {
        console.log(response)
        setContent(response.data.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
    formik.values.id = id;
  }, []);

  ///////////On Update//////////////
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      totalItems: "",
      itemName: [],
    },
    validationSchema,
  });

  const handleUpdate = async () => {
    const data = formik.values;
    data.username = content[0].username;
    data.email = content[0].email;
    data.totalItems = formik.values.totalItems ? formik.values.totalItems : content[0].totalItems;
    console.log(formik.values.itemName, "fhgfdc");
    userService.UpdateInventory(data).then(
      (response) => {
        setMessage(response.data.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setMessage(_content);
      }
    );
  }

  const optionList = [
    { value: "keyboard", label: "Keyboard" },
    { value: "mouse", label: "Mouse" },
    { value: "headphone", label: "Headphone" },
    { value: "window10", label: "Window10" },
  ];

  const handleSelect = (data) => {
    setItemName(data);
  }

  return (
    <div className="bg-grey-color d-flex align-items-center  ">
      <Sidebar />
      <div className="inventory-page">
        <div className="p-4">
          <form onSubmit={formik.handleSubmit} ref={form}>
            <h1 className="text-center">Edit Inventory</h1>
            {content != null &&
              content.map((items, i) => (
                <div key={i}>
                  <div className="form-group mb-3">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      readOnly={true}
                      className=
                      {'form-control'
                      }
                      defaultValue={items.username}
                      onChange={formik.handleChange}
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
                      readOnly={true}
                      className=
                      {'form-control'
                      }
                      defaultValue={items.email}
                      onChange={formik.handleChange}
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
                      className=
                      {'form-control' +
                        (formik.errors.totalItems && formik.touched.totalItems
                          ? ' is-invalid'
                          : '')
                      }
                      defaultValue={items.totalItems}
                      onChange={formik.handleChange}
                    />
                    <div className="invalid-feedback">
                      {formik.errors.totalItems && formik.touched.totalItems
                        ? formik.errors.totalItems
                        : null}
                    </div>
                  </div>

                  <label htmlFor="password">Items Name</label>
               {/*   <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        className={"form-check-input"}
                        defaultChecked={items.itemName[0] ? true : false}
                        value="keyboard"
                        onChange={formik.handleChange}
                        type="checkbox" id="keyboard" name="itemName" />
                      <label className="form-check-label" htmlFor="keyboard">Keyboard</label>
                    </div>

                    <div className="form-check">
                      <input className={"form-check-input"}
                        defaultChecked={items.itemName[1] ? true : false}
                        value="mouse"
                        onChange={formik.handleChange}
                        type="checkbox" id="mouse" name="itemName" />
                      <label className="form-check-label" htmlFor="mouse">Mouse</label>
                    </div>

                    <div className="form-check">
                      <input
                        className={"form-check-input"}
                        defaultChecked={items.itemName[2] ? true : false}
                        value="headphone"
                        onChange={formik.handleChange}
                        type="checkbox" id="headphone" name="itemName" />
                      <label className="form-check-label" htmlFor="headphone">Headphone</label>
                    </div>

                    <div className="form-check">
                      <input className={"form-check-input"}
                        defaultChecked={items.itemName[3] ? true : false}
                        value="window10"
                        onChange={formik.handleChange}
                        type="checkbox" id="window10" name="itemName" />
                      <label className="form-check-label" htmlFor="window10">Window10</label>
                    </div>
                  </div>  */}
                  <div className="dropdown-container">
                  <Select
                    options={optionList}
                    placeholder="Select Items"
                    // value={items.itemName}
                    defaultValue={items.itemName}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                  />
                </div>

                  <div className="form-group">
                    <button type="sumbit" onClick={() => handleUpdate(items.username)} className="btn bg-dark-primary text-white btn-block mt-2">
                      <span>Update</span>
                    </button>
                  </div>
                </div>
              ))
            }
          </form>
        </div>
      </div>
    </div>
  )
}
export default EditInventory;