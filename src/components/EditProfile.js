
import React, { useState } from "react";
import Sidebar from "../shared/components/Sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [hobbies, setHobbies] = useState("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    username: Yup.string().required("Username is required"),
    designation: Yup.string().required("Designation is required"),
    phone: Yup.string().required("Phone is required"),
    dob: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date of Birth must be a valid date in the format YYYY-MM-DD"
      ),
    hobbies: Yup.string().required("Hobbies is required"),
    address: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      designation: "",
      phone: "",
      dob: "",
      address: "",
      hobbies: "",
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  const handleSubmit = () => {
    console.log("---------", formik.values);
  };
  const previewFile = () => {};

  return (
    <div className="bg-grey-color custom-grid h-100">
      <Sidebar />
      <div className="container-fluid mb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-xs-12 col-md-10 profile-badge p-5 bg-white rounded">
            <div className="page-title">
              <h2>Edit Profile</h2>
            </div>
            <div className="profile-pic ">
              <img
                alt="User Pic"
                src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png"
                id="profile-image1"
                height="200"
              />
              <input
                id="profile-image-upload"
                className="hidden"
                type="file"
                onChange={previewFile}
              />
            </div>
            <div className="user-detail">
              <form onSubmit={formik.onSubmit}>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="Fname">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Fname"
                        placeholder="Enter Your Name"
                        name="name"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="varchar"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email "
                        name="mail"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="Lname">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Lname"
                        placeholder="Enter UserName"
                        name="Username"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="mobile">Phone </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Mobile"
                        placeholder="Enter Phone Number"
                        name="Mobile"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="Designation"> Designation</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Designation"
                        placeholder="Enter Designation"
                        name="Designation"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="Designation"> DOB</label>
                      <input
                        type="text"
                        className="form-control"
                        id="DOB "
                        placeholder="Enter Date Of Birth"
                        name="DOB"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-12">
                    <div className="form-group mb-3">
                      <label htmlFor="Address"> Address</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="Address"
                        placeholder="Enter Address"
                        name="Address"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12">
                    <div className="form-group mb-5">
                      <label htmlFor="Address"> Hobbies</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Hobbies"
                        placeholder="Enter Your Hobbies"
                        name="Hobbies"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="Button"
                    className="btn btn-primary"
                    value="Update Profile"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
