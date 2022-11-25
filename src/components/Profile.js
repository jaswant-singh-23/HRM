// import React from 'react'

// const Profile = () => {
//     return (
//         <div><div className="navbar-top">
//             <div className="title">
//                 <h1>Profile</h1>
//             </div>

//             <ul>
//                 <li>
//                     <a href="#message">
//                         <span className="icon-count">29</span>
//                         <i className="fa fa-envelope fa-2x"></i>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#notification">
//                         <span className="icon-count">59</span>
//                         <i className="fa fa-bell fa-2x"></i>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#sign-out">
//                         <i className="fa fa-sign-out-alt fa-2x"></i>
//                     </a>
//                 </li>
//             </ul>
//         </div>

//             <div className="sidenav">
//                 <div className="profile">
//                     <img src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png" alt="" width="100" height="100" />

//                         <div className="name">
//                             ImDezCode
//                         </div>
//                         <div className="job">
//                             Web Developer
//                         </div>
//                 </div>

//                 <div className="sidenav-url">
//                     <div className="url">
//                         <a href="#profile" className="active">Profile</a>
//                         <hr align="center" />
//                     </div>
//                     <div className="url">
//                         <a href="#settings">Settings</a>
//                         <hr align="center" />
//                     </div>
//                 </div>
//             </div>
//             <div className="main">
//                 <h2>IDENTITY</h2>
//                 <div className="card">
//                     <div className="card-body">
//                         <i className="fa fa-pen fa-xs edit"></i>
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <td>Name</td>
//                                     <td>:</td>
//                                     <td>ImDezCode</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Email</td>
//                                     <td>:</td>
//                                     <td>imdezcode@gmail.com</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Address</td>
//                                     <td>:</td>
//                                     <td>Bali, Indonesia</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Hobbies</td>
//                                     <td>:</td>
//                                     <td>Diving, Reading Book</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Job</td>
//                                     <td>:</td>
//                                     <td>Web Developer</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Skill</td>
//                                     <td>:</td>
//                                     <td>PHP, HTML, CSS, Java</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 <h2>SOCIAL MEDIA</h2>
//                 <div className="card">
//                     <div className="card-body">
//                         <i className="fa fa-pen fa-xs edit"></i>
//                         <div className="social-media">
//                             <span className="fa-stack fa-sm">
//                                 <i className="fas fa-circle fa-stack-2x"></i>
//                                 <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <span className="fa-stack fa-sm">
//                                 <i className="fas fa-circle fa-stack-2x"></i>
//                                 <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <span className="fa-stack fa-sm">
//                                 <i className="fas fa-circle fa-stack-2x"></i>
//                                 <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <span className="fa-stack fa-sm">
//                                 <i className="fas fa-circle fa-stack-2x"></i>
//                                 <i className="fab fa-invision fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <span className="fa-stack fa-sm">
//                                 <i className="fas fa-circle fa-stack-2x"></i>
//                                 <i className="fab fa-github fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <span className="fa-stack fa-sm">
//                                 <i className="fas fa-circle fa-stack-2x"></i>
//                                 <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
//                             </span>
//                             <span className="fa-stack fa-sm">
//                                 <i className="fas fa-circle fa-stack-2x"></i>
//                                 <i className="fab fa-snapchat fa-stack-1x fa-inverse"></i>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Profile

import React, { useState } from "react";
import Sidebar from "../shared/components/Sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Profile.css";
import AmeoLogos from "../assets/images/Ameo.Logo.jpg";

const Profile = () => {
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

  // const [file,setFile]=useState('')

  // const handleChange=(e)=>{
  //     const data=e.target.files[0]
  //      setFile(data)
  // }

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

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

  return (
    <div className="bg-grey-color custom-grid h-100">
      <Sidebar />
      <div className="container-fluid">
        <div className="main-body">
          <div className="row gutters-sm">
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
                              />
                            </div>

                            <div className="position-absolute upload-img-inner ">
                              <i className="fas fa-camera text-white fw-5 rounded-circle d-flex align-items-center justify-content-center"></i>
                            </div>
                          </div>
                        ) : (
                          <div className="position-relative upload-img-sec">
                            <div className="upload-img-cover rounded-circle">
                              <img src={AmeoLogos} width="100%" alt="logo" />
                            </div>
                            <div className="position-absolute upload-img-inner ">
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
                      <h4>Anuj Yadav</h4>
                      <p className="text-secondary mb-1">
                        Full Stack Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        Bay Area, Gorakhpur, India
                      </p>
                    </div>
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
                    <span className="text-secondary">https://bootdey.com</span>
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
                    <span className="text-secondary">bootdey</span>
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
                    <span className="text-secondary">@bootdey</span>
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
                    <span className="text-secondary">bootdey</span>
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
                        className="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Anuj Yadav</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">anuj@yadav.aky</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (+91) 9874563210
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    (+91) 9874563210
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Bay Area, Gorakhpur U.P, CA
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">DOB</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">04/07/1998</div>
                  </div>
                </div>
              </div>

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
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
                <div className="col-sm-6 mb-3">
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
