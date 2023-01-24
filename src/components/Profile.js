import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../shared/components/Sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Profile.css";
import AmeoLogos from "../assets/images/Ameo.Logo.jpg";
import { Link } from "react-router-dom";
import userService from "../services/user.service";
import { useSelector } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";
import { logout } from "../actions/auth";

const Profile = () => {
  const [userField, setUserField] = useState({});
  const [imgName, setImgName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [file, setFile] = useState("");
  const [upload, setUpload] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewpassword] = useState("");
  const [message, setMessage] = useState("");

  const handleCurrentPassword = (e) => {
    const currentPassword = e.target.value;
    setCurrentPassword(currentPassword)
  }
  const handleNewPassword = (e) => {
    const newPassword = e.target.value;
    setnewPassword(newPassword)
  }
  const handleConfirmNewPasword = (e) => {
    const confirmNewPassword = e.target.value;
    setConfirmNewpassword(confirmNewPassword)
  }

  const uploadButton = () => {
    setUpload(!upload.true)
  }
  const { user: currentUser } = useSelector((state) => state.auth);

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
      avatar: "",
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });


  const [image, setImage] = useState({ preview: "", raw: "" });

  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const handleChange = (e) => {
    console.log("------------------", e.target);
    const data = e.target.files[0];
    setFile(data);

    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleSubmit = () => {
    setUpload(!upload)
    const formData = new FormData();
    formData.append("image", image.raw);
    userService
      .uploadImage(formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      });
  };

  /////////// get Profile Dedtails //////////
  useEffect(() => {
    userService
      .getProfileById()
      .then((response) => {
        setUserField(response.data.data);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      });
  }, []);

  useEffect(() => {
    if (currentUser) {
      const initials = currentUser.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      setImgName(initials);
    }
    console.log(currentUser);
  }, [currentUser]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };
  const handlePassword = () => {
    setAddShow(true)
  }
  const handleAddClose = () => {
    setAddShow(false)
  }
  /////Update Password///

  const UpdatePassword = () => {
    const data = {
      username: userField.username,
      oldPass: currentPassword,
      newPass: newPassword,
      confirmNewPassword: confirmNewPassword,
    }
    console.log(data);
    userService.updatePassword(data)
      .then((response) => {
        setMessage(response.data.message)
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      });
  };


  return (
    <div className="bg-grey-color custom-grid h-100">
      <Sidebar />
      <div className="container-fluid">
        <div className="main-body">
          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-12 profile-badge bg-white p-2 mt-3">
            <h3 className="text-center mb-2">
              Welcome User : {userField.name}
            </h3>
          </div>
          <div className="row gutters-sm mt-3">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div>
                      <label htmlFor="upload-button">
                        {image.preview ? (
                          <div className="position-relative upload-img-sec">
                            <div className="upload-img-cover rounded-circle">
                              <img
                                src={image.preview}
                                alt="dummy"
                                width="100%"
                                height="100%"
                              />
                            </div>

                            <div className="position-absolute upload-img-inner ">
                              <i className="fas fa-camera text-white fw-5 rounded-circle d-flex align-items-center justify-content-center"></i>
                            </div>
                          </div>
                        ) : (
                          <div className="position-relative upload-img-sec">
                            <div className="upload-img-cover rounded-circle">
                              <img src={userField.avatar} />
                              <div className="profileImage">{imgName}</div>
                            </div>
                            <div className="position-absolute upload-img-inner " onClick={uploadButton}>
                              <i className="fas fa-camera text-white fw-5 rounded-circle d-flex align-items-center justify-content-center"></i>
                            </div>
                            <h5 className="text-center"></h5>
                          </div>
                        )}
                      </label>
                      <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                      <br />
                      <h4 className="mb-2">{userField.name}</h4>
                      <p className="text-secondary mb-3">
                        {userField.designation}
                      </p>
                      {/* <p className="text-muted font-size-sm">
                        {userField.address}
                      </p> */}
                      <div className="text-center" style={{ display: upload ? "block" : "none" }}>
                        <input
                          type="Button"
                          className="btn bg-dark-primary"
                          value="Upload"
                          onClick={handleSubmit}
                        />
                      </div>
                      {/* <div className="mb-3">
                        <Link className="bg-dark-primary" to="/profile-edit">
                          <button>Edit Profile</button>
                        </Link>
                      </div> */}
                    </div>
                    <div className="profile-setting position-absolute  d-flex align-items-center justify-content-center" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" >
                      <i className="fa-solid fa-ellipsis-vertical text-white fw-5 rounded-circle"></i>
                    </div>
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#"> <i className="fa-solid fa-gear"></i> Setting</a>
                    </div> */}
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#" onClick={handlePassword}><i className="fa-solid fa-key"></i> Change Password</a>
                      <a className="dropdown-item" href="#"><i className="fa-solid fa-user"></i> Edit profile</a>
                      <a className="dropdown-item" href="/login" onClick={logOut}><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
                    </div>
                    <Modal
                      centered
                      show={addShow}
                      onHide={handleAddClose}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Update Password</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="form-group mb-3">
                          <label htmlFor="username">Current Password</label>
                          <input
                            type="password"
                            name="currentPassword"
                            className={
                              'form-control'
                            }
                            onChange={handleCurrentPassword}
                            value={currentPassword}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label htmlFor="username">New Password</label>
                          <input
                            type="password"
                            name="newPassword"
                            className={
                              'form-control'
                            }
                            onChange={handleNewPassword}
                            value={newPassword}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label htmlFor="username">Confirm New Password</label>
                          <input
                            type="password"
                            name="confirmNewPassword"
                            className={
                              'form-control'
                            }
                            onChange={handleConfirmNewPasword}
                            value={confirmNewPassword}
                          />
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          className=" btn-primary bg-dark-primary py-1 px-4"
                          onClick={UpdatePassword}
                        >
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>

              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Website
                    </h6>
                    <span className="text-secondary"><a href="https://www.ameotech.com">Go to Website</a></span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-github mr-2 icon-inline"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Github
                    </h6>
                    <span className="text-secondary"><a href="https://github.com/ameotech-informatics">Go to Github</a></span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-twitter mr-2 icon-inline text-info"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      Twitter
                    </h6>
                    <span className="text-secondary"><a href="https://twitter.com/theameotech">Go to Twitter page</a></span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-instagram mr-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </h6>
                    <span className="text-secondary"><a href="https://www.instagram.com/p/CmV7RbmBNTM/">Go to Instagram page</a></span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </h6>
                    <span className="text-secondary"><a href="https://www.facebook.com/theameotech/">Go to Facebook page</a></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userField.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userField.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Username</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userField.username}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userField.phone}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">DOB</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{userField.dateofbirth}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userField.address}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Department</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userField.department}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Date of Joining</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userField.dateofjoining}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gutters-sm" style={{ display: "none" }}>
                <div className="col-sm-12 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress height5 mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;