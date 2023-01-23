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
  const formik = useFormik({
    initialValues: {

    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onUpdate: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });
  const optionList = [
    { value: "keyboard", label: "Keyboard" },
    { value: "mouse", label: "Mouse" },
    { value: "headphone", label: "Headphone" },
    { value: "window10", label: "Window10" },
  ];
  const navigate = useNavigate()

  const [content, setContent] = useState([]);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const form = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [totalItems, setTotalItems] = useState("");
  const [itemName, setItemName] = useState("");


  // const handleChange = (e) => {
  //   setContent(({ ...content, [e.target.name]: e.target.value }))
  // }

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

  
 //  On Update //

  const handleUpdate = (e) => {
    const data = {
      username: username? username :content[0].username,
      email: email? email : content[0].email,
      totalItems: totalItems,
      itemName: itemName
    }
    console.log(data)
    userService.UpdateInventory(data).then(
      (response) => {
        // setMessage(response.data.message);
        navigate("/inventory-control")
        console.log(response)
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
  return (
    <div className="bg-grey-color d-flex align-items-center  ">
      <Sidebar />
      <div className="inventory-page">
        <div className="p-4">

          <h1 className="text-center">Edit Inventory</h1>
          <form ref={form}>
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
                      onChange={handleUsername}
                    />
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
                      onChange={handleEmail}
                    />

                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="password">No of Items</label>
                    <input
                      type="number"
                      name="totalItems"
                      className=
                      {'form-control'
                      }
                      defaultValue={items.totalItems}
                      onChange={handleTotalItems}
                    />
                  </div>

                  <label htmlFor="password">Items Name</label>
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
                </div>

              ))
            }
            <div className="form-group">
              <button onClick={handleUpdate} className="btn bg-dark-primary text-white btn-block mt-2">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default EditInventory;