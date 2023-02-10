import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../shared/components/Sidebar";
import { useFormik } from "formik";
import "./Profile.css";
import AmeoLogos from "../assets/images/Ameo.Logo.jpg";
import { Link } from "react-router-dom";
import userService from "../services/user.service";
import { useSelector } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";
import { logout } from "../actions/auth";
import moment from "moment";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Toast from "../../src/shared/Toast";

const Profile = () => {
  const [userField, setUserField] = useState({});
  const [content, setContent] = useState([]);
  const [imgName, setImgName] = useState("");
  const [file, setFile] = useState("");
  const [upload, setUpload] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewpassword] = useState("");
  const [message, setMessage] = useState("");
  const [college, setCollege] = useState("");
  const [classs, setClasss] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");


  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });
  const {
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };

  const handleInput = () => {
    const data = {
      college: college,
      class: classs,
      department: department,
      grade: grade
    }
    console.log(data)
    setEducationInfoShow(false);
  }
  const handleCurrentPassword = (e) => {
    const currentPassword = e.target.value;
    setCurrentPassword(currentPassword);
  };
  const handleNewPassword = (e) => {
    const newPassword = e.target.value;
    setnewPassword(newPassword);
  };
  const handleConfirmNewPasword = (e) => {
    const confirmNewPassword = e.target.value;
    setConfirmNewpassword(confirmNewPassword);
  };
  const uploadButton = () => {
    setUpload(!upload.true);
  };
  const { user: currentUser } = useSelector((state) => state.auth);


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
    setUpload(!upload);
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
    setAddShow(true);
  };
  const handleAddClose = () => {
    setAddShow(false);
  };
  /////Update Password///

  // const UpdatePassword = () => {
  //   const data = {
  //     username: userField.username,
  //     oldPass: currentPassword,
  //     newPass: newPassword,
  //     confirmNewPassword: confirmNewPassword,
  //   };
  //   console.log(data);
  //   userService
  //     .updatePassword(data)
  //     .then((response) => {
  //       setAddShow(false);
  //       Toast.success(response.data.message);
  //     })
  //     .catch((error) => {
  //       const resMessage =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //     });
  // };

  /* upcoming Birthday */
  useEffect(() => {
    userService
      .upComingBirthday()
      .then((response) => {
        console.log(response, "-----------------")
        setContent(response.data.upcomingBirthdays
        );
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


  ////////////// Personal Info Modal ////////////////////

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //////////////////////// Emergency Contact Modal /////////////////////////

  const [emergencyShow, setEmergencyShow] = useState(false);

  const emergencyhandleAdd = () => setEmergencyShow(false);
  const emergencyhandleShow = () => setEmergencyShow(true);

  //////////////// Family Info Modal //////////////////

  const [familyInfoShow, setFamilyInfoShow] = useState(false);

  const familyInfohandleAdd = () => setFamilyInfoShow(false);
  const familyInfohandleShow = () => setFamilyInfoShow(true);

  //////////////////// Education Modal ////////////////////

  const [educationInfoShow, setEducationInfoShow] = useState(false);

  const educationInfohandleAdd = () => setEducationInfoShow(false);
  const educationInfohandleShow = () => setEducationInfoShow(true);

  /////////////// Experience Modal /////////////////////

  const [experienceShow, setExperienceShow] = useState(false);

  const experiencehandleAdd = () => setExperienceShow(false);
  const experiencehandleShow = () => setExperienceShow(true);






  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = value;
  //   setInputList(list);
  // };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  const isAnonymous = true;
  return (
    <div className="bg-grey-color custom-grid h-100">
      <Sidebar />
      <div className="container-fluid p-4 overflow-auto">
        <div className="main-body">
          <div className="col-12 profile-badge bg-white p-2">
            <h3 className="text-center mb-2">
              Welcome User : {userField.name}
            </h3>
          </div>
          <div className="row gutters-sm mt-4">
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
                            <div
                              className="position-absolute upload-img-inner "
                              onClick={uploadButton}
                            >
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
                      <div
                        className="text-center"
                        style={{ display: upload ? "block" : "none" }}
                      >
                        <input
                          type="Button"
                          className="btn bg-dark-primary"
                          value="Upload"
                        // onClick={handleSubmit}
                        />
                      </div>
                      {/* <div className="mb-3">
                        <Link className="bg-dark-primary" to="/profile-edit">
                          <button>Edit Profile</button>
                        </Link>
                      </div> */}
                    </div>
                    <div
                      className="profile-setting position-absolute  d-flex align-items-center justify-content-center"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                    >
                      <i className="fa-solid fa-ellipsis-vertical text-white fw-5 rounded-circle"></i>
                    </div>
                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#"> <i className="fa-solid fa-gear"></i> Setting</a>
                    </div> */}
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={handlePassword}
                      >
                        <i className="fa-solid fa-key"></i> Change Password
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa-solid fa-user"></i> Edit profile
                      </a>
                      <a
                        className="dropdown-item"
                        href="/login"
                        onClick={logOut}
                      >
                        <i className="fa-solid fa-right-from-bracket"></i>{" "}
                        Logout
                      </a>
                    </div>
                    <Modal centered show={addShow} onHide={handleAddClose} >
                      <Modal.Header closeButton>
                        <Modal.Title>Update Password</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form  >
                          <div className="form-group mb-3">
                            <label htmlFor="username">Current Password</label>
                            <input
                              type="password"
                              className={'form-control'}
                              name="currentPassword"
                              onChange={handleCurrentPassword}
                              value={currentPassword}
                            />
                          </div>

                          <div className="form-group mb-3">
                            <label htmlFor="username">New Password</label>
                            <input
                              type="password"
                              name="newPassword"
                              className={'form-control'}
                              onChange={handleNewPassword}
                              value={newPassword}
                            />
                          </div>

                          <div className="form-group mb-3">
                            <label htmlFor="username">Confirm New Password</label>
                            <input
                              type="password"
                              name="confirmNewPassword"
                              className={'form-control'}
                              onChange={handleConfirmNewPasword}
                              value={confirmNewPassword}
                            />
                          </div>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          className=" btn-primary bg-dark-primary py-1 px-4"
                          disabled={currentPassword && newPassword == confirmNewPassword ? false : true}
                        >
                          Submit
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="col-12 profile-badge bg-white p-2 mt-3">
                  <h3 className="text-center mb-2">
                    🍨Upcoming Birthdays🍨
                  </h3>
                </div>
                {
                  content.map((data, i) => (
                    <div key={i} className="card mt-3">
                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            {data.user.name} ({data.user.designation})
                          </h6>
                          <span className="text-secondary">{data.user.birthDay}{(moment().month(data.user.birthMonth - 1).format("-MMMM"))}</span>
                        </div>
                      </div>
                    </div>

                  ))
                }
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
                    <div className="col-sm-9 text-secondary">
                      {moment(userField.dateofbirth).format("MM-DD-YYYY")}
                    </div>
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
                      {moment(userField.dateofjoining).format("MM-DD-YYYY")}
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
              </div>
            </div>
          </div>
          <div className="col-12 profile-badge bg-gray pt-2">
            <div
              id="emp_profile"
              className="pro-overview tab-pane fade show active"
            >
              {/*<div className="row">
              <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">
                      Personal Informations
                      <Button
                        href="javascript:;"
                        className="edit-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#personal_info_modal"
                        variant="primary"
                        onClick={handleShow}
                      >
                        <i className="fa fa-pencil"></i>
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Personal Informations</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Passport No</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Passport Expiry Date</Form.Label>
                                <Form.Control
                                  type="date"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Mobile No.</Form.Label>
                                <Form.Control
                                  type="number"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Nationality *</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Religion</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Marital status *</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Employment of spouse</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>No. of children</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="primary" onClick={handleClose}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </h3>
                    <div className="personal-info">
                      <li>
                        <div className="title mb-1">Passport No.</div>
                        <div className="text mb-1">9876543210</div>
                      </li>
                      <li>
                        <div className="title mb-1">Passport Exp Date.</div>
                        <div className="text mb-1">9876543210</div>
                      </li>
                      <li>
                        <div className="title mb-1">Tel</div>
                        <div className="text mb-1">
                          <a href="">9876543210</a>
                        </div>
                      </li>
                      <li>
                        <div className="title mb-1">Nationality</div>
                        <div className="text mb-1">Indian</div>
                      </li>
                      <li>
                        <div className="title mb-1">Religion</div>
                        <div className="text mb-1">Christian</div>
                      </li>
                      <li>
                        <div className="title mb-1">Marital status</div>
                        <div className="text mb-1">Married</div>
                      </li>
                      <li>
                        <div className="title mb-1">Employment of spouse</div>
                        <div className="text mb-1">No</div>
                      </li>
                      <li>
                        <div className="title mb-1">No. of children</div>
                        <div className="text mb-1">2</div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">
                      Emergency Contact
                      <Button
                        href="javascript:;"
                        className="edit-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#emergency_contact_modal"
                        variant="primary"
                        onClick={emergencyhandleShow}
                      >
                        <i className="fa fa-pencil"></i>
                      </Button>
                      <Modal show={emergencyShow} onHide={emergencyhandleAdd}>
                        <Modal.Header closeButton>
                          <Modal.Title>Emergency Contact</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <h5>Primary Contact</h5>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Relationship *</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Phone No *</Form.Label>
                                <Form.Control
                                  type="number"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Alternate No</Form.Label>
                                <Form.Control
                                  type="number"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <h5>Secondary Contact</h5>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Relationship *</Form.Label>
                                <Form.Control
                                  type="text"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Phone No *</Form.Label>
                                <Form.Control
                                  type="number"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                              <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label>Alternate No</Form.Label>
                                <Form.Control
                                  type="number"
                                  // placeholder="name@example.com"
                                  autoFocus
                                />
                              </div>
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="primary" onClick={handleClose}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </h3>
                    <div>
                      <h5 className="section-title">Primary</h5>
                      <div className="personal-info">
                        <li>
                          <div className="title mb-1">Name</div>
                          <div className="text mb-1">John Doe</div>
                        </li>
                        <li>
                          <div className="title mb-1">Relationship</div>
                          <div className="text mb-1">Father</div>
                        </li>
                        <li>
                          <div className="title mb-1">Phone </div>
                          <div className="text mb-1">
                            9876543210, 9876543210
                          </div>
                        </li>
                      </div>
                    </div>
                    <div>
                      <h5 className="section-title border-top-1">Secondary</h5>
                      <div className="personal-info">
                        <li>
                          <div className="title mb-1">Name</div>
                          <div className="text mb-1">Karen Wills</div>
                        </li>
                        <li>
                          <div className="title mb-1">Relationship</div>
                          <div className="text mb-1">Brother</div>
                        </li>
                        <li>
                          <div className="title mb-1">Phone </div>
                          <div className="text mb-1">
                            9876543210, 9876543210
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div> */}
              <div className="row ">
                <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Education Informations
                        <Button
                          href="javascript:;"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#education_info"
                          variant="primary"
                          onClick={educationInfohandleShow}
                        >
                          <i className="fa fa-pencil"></i>
                        </Button>
                        <Modal
                          show={educationInfoShow}
                          onHide={educationInfohandleAdd}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Education Informations</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <div className="App">
                                  {inputList.map((x, i) => {
                                    return (
                                      <div className="box px-2 mb-3 w-100 d-inline-block">
                                        <div className="d-flex justify-content-between " >
                                          <div >
                                            <Form.Label>College</Form.Label>
                                            <Form.Control
                                              type='Form.Control'
                                              name="college"
                                              placeholder="Enter College Name"
                                              value={college}
                                              onChange={(e) => setCollege(e.target.value)}
                                            />
                                          </div>
                                          <div>
                                            <Form.Label>Class</Form.Label>
                                            <Form.Control
                                              type='Form.Control'
                                              name="class"
                                              className="ml10"
                                              placeholder="Enter Class Name"
                                              value={classs}
                                              onChange={(e) => setClasss(e.target.value)}
                                            />
                                          </div></div>
                                        <div className="d-flex justify-content-between " >
                                          <div >
                                            <Form.Label>Department</Form.Label>
                                            <Form.Control
                                              type='text'
                                              name="department"
                                              placeholder="Enter Department Name"
                                              value={department}
                                              onChange={(e) => setDepartment(e.target.value)}
                                            />
                                          </div>
                                          <div>
                                            <Form.Label>Grade</Form.Label>
                                            <Form.Control
                                              type='text'
                                              className="ml10"
                                              name="grade"
                                              placeholder="Enter Grade Name"
                                              value={grade}
                                              onChange={(e) => setGrade(e.target.value)}
                                            />
                                          </div></div>
                                        <div className="d-flex justify-content-between " >
                                          <div >
                                            <Form.Label>From</Form.Label>
                                            <Form.Control
                                              type='date'
                                              name="date"
                                              placeholder="Enter Date"
                                              value={fromDate}
                                              onChange={(e) => setFromDate(e.target.value)}
                                            />
                                          </div>
                                          <div>
                                            <Form.Label>To</Form.Label>
                                            <Form.Control
                                              type='date'
                                              className="ml10"
                                              name="date"
                                              placeholder="Enter Date"
                                              value={toDate}
                                              onChange={(e) => setToDate(e.target.value)}
                                            />
                                          </div></div>
                                        <div className="btn-box">
                                          {inputList.length !== 1 && <button
                                            className="bg-dark-primary me-2 mt-2"
                                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                                          {inputList.length - 1 === i && <button className="bg-dark-primary mt-2" onClick={handleAddClick}>➕ Add More</button>}
                                        </div>
                                      </div>

                                    );
                                  })}

                                </div>

                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="primary" onClick={handleInput}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <hr />
                      </h3>
                      <div className="experience-box">
                        <ul className="experience-list position-relative p-0">
                          <li className="position-relative ps-4">
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content mb-3">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  International College of Arts and Science (UG)
                                </a>
                                <div>Bsc Computer Science</div>
                                <span className="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                          <li className="position-relative ps-4">
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  International College of Arts and Science (PG)
                                </a>
                                <div>Msc Computer Science</div>
                                <span className="time">2000 - 2003</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">
                        Experience
                        <Button
                          href="javascript:;"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#experience_info"
                          variant="primary"
                          onClick={experiencehandleShow}
                        >
                          <i className="fa fa-pencil"></i>
                        </Button>
                        <Modal show={experienceShow} onHide={experiencehandleAdd}>
                          <Modal.Header closeButton>
                            <Modal.Title>Experience</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="name@example.com"
                                  autoFocus
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </h3>
                      <div className="experience-box">
                        <ul className="experience-list position-relative p-0">
                          <li className="position-relative ps-4">
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content mb-3">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Web Designer at Zen Corporation
                                </a>
                                <p className="time fs-6">
                                  Jan 2013 - Present (5 years 2 months)
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="position-relative ps-4">
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content mb-3">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Web Designer at Ron-tech
                                </a>
                                <p className="time fs-6">
                                  Jan 2013 - Present (5 years 2 months)
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="position-relative ps-4">
                            <div className="experience-user">
                              <div className="before-circle"></div>
                            </div>
                            <div className="experience-content mb-3">
                              <div className="timeline-content">
                                <a href="#/" className="name">
                                  Web Designer at Dalt Technology
                                </a>
                                <p className="time fs-6">
                                  Jan 2013 - Present (5 years 2 months)
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-lg-4">
                <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
                  <div className="card profile-box flex-fill">
                    <div className="card-body">
                      <h3 className="card-title">Bank information</h3>
                      <div className="personal-info">
                        <li>
                          <div className="title mb-1">Bank name</div>
                          <div className="text mb-1">ICICI Bank</div>
                        </li>
                        <li>
                          <div className="title mb-1">Bank account No.</div>
                          <div className="text mb-1">159843014641</div>
                        </li>
                        <li>
                          <div className="title mb-1">IFSC Code</div>
                          <div className="text mb-1">ICI24504</div>
                        </li>
                        <li>
                          <div className="title mb-1">PAN No</div>
                          <div className="text mb-1">TC000Y56</div>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
                  <div className="card profile-box flex-fill famliy_info">
                    <div className="card-body">
                      <h3 className="card-title">
                        Family Informations
                        <Button
                          href="javascript:;"
                          className="edit-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#family_info_modal"
                          variant="primary"
                          onClick={familyInfohandleShow}
                        >
                          <i className="fa fa-pencil"></i>
                        </Button>
                        <Modal show={familyInfoShow} onHide={familyInfohandleAdd}>
                          <Modal.Header closeButton>
                            <Modal.Title>Family Informations</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label>Name *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    // placeholder="name@example.com"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label>Relationship *</Form.Label>
                                  <Form.Control
                                    type="text"
                                    // placeholder="name@example.com"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label>Date of birth *</Form.Label>
                                  <Form.Control
                                    type="date"
                                    // placeholder="name@example.com"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label>Phone No *</Form.Label>
                                  <Form.Control
                                    type="number"
                                    // placeholder="name@example.com"
                                    autoFocus
                                  />
                                </div>
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </h3>
                      <div className="table-responsive">
                        <table className="table table-nowrap">
                          <thead>
                            <tr className="text-nowrap">
                              <th>Name</th>
                              <th>Relationship</th>
                              <th>Date of Birth</th>
                              <th>Phone</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Leo</td>
                              <td>Brother</td>
                              <td>Feb 16th, 2019</td>
                              <td>9876543210</td>
                              <td className="text-end">
                                <div
                                  className="profile-setting position-absolute  d-flex align-items-center justify-content-center"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical text-white fw-5 rounded-circle"></i>
                                </div>
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#"> <i className="fa-solid fa-gear"></i> Setting</a>
                    </div> */}
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={handlePassword}
                                  >
                                    <i className="fa-solid fa-key"></i> Change
                                    Password
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa-solid fa-user"></i> Edit
                                    profile
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="/login"
                                    onClick={logOut}
                                  >
                                    <i className="fa-solid fa-right-from-bracket"></i>{" "}
                                    Logout
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative text-align-right h-100 w-100 mt-4">
                  <div class="gmap_canvas">
                    <iframe
                      width="770" height="510" className="overflow-hidden .bg-none h-51 w-100" src="https://maps.google.com/maps?q=ozi gym&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                    <a href="https://2yu.co">2yu</a>
                    <a href="https://embedgooglemap.2yu.co">html embed google map</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Profile;
