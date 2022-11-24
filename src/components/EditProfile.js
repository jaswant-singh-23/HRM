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
import { useFormik } from 'formik';
import * as Yup from 'yup';


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
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .required('Email is required'),
    username: Yup.string()
      .required('Username is required'),
    designation: Yup.string()
      .required('Designation is required'),
    phone: Yup.string()
      .required('Phone is required'),
    dob: Yup.string()
      .required('Date of Birth is required')
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    hobbies: Yup.string()
      .required('Hobbies is required'),
    address: Yup.string()
      .required('Password is required')
  });


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      designation: '',
      phone: '',
      dob: '',
      address: '',
      hobbies: '',
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  const handleSubmit = () => {
    console.log('---------', formik.values)
  }
  const previewFile = () => { }


  return (
    <div className="bg-grey-color custom-grid h-100">
      <Sidebar />
      <div className="container-fluid mb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-xs-12 col-md-6 profile-badge p-5 bg-white rounded">
            {/* <img src="https://dummyimage.com/600x400/000/">  */}

            <div className="profile-pic text-center">
              <img alt="User Pic" src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png"
                id="profile-image1" height="200" />
              <input id="profile-image-upload" className="hidden" type="file" onChange={previewFile} />
            </div>
            <div className="user-detail">
              <form onSubmit={formik.onSubmit}>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="Fname">Name</label>
                      <input type="text" className="form-control" id="Fname" placeholder="Enter Your Name" name="name"

                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="email">Email</label>
                      <input type="varchar" className="form-control" id="email" placeholder="Enter Email " name="mail"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="Lname">Username</label>
                      <input type="text" className="form-control" id="Lname" placeholder="Enter UserName" name="Username"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="mobile">Phone </label>
                      <input type="text" className="form-control" id="Mobile" placeholder="Enter Phone Number"
                        name="Mobile"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="Designation"> Designation</label>
                      <input type="text" className="form-control" id="Designation" placeholder="Enter Designation" name="Designation"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="Designation"> DOB</label>
                      <input type="text" className="form-control" id="DOB " placeholder="Enter Date Of Birth" name="DOB"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-12">
                    <div className="form-group mb-3">
                      <label for="Address"> Address</label>
                      <textarea type="text" className="form-control" id="Address" placeholder="Enter Address" name="Address">
                      </textarea>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12">
                    <div className="form-group mb-5">
                      <label for="Address"> Hobbies</label>
                      <input type="text" className="form-control" id="Hobbies" placeholder="Enter Your Hobbies" name="Hobbies"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <input type="Button" className="btn btn-primary" value="Update Profile" onClick={handleSubmit} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile;