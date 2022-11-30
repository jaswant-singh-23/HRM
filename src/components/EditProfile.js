import React, { useState } from "react";
import Sidebar from "../shared/components/Sidebar";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AmeoLogos from "../assets/images/Ameo.Logo.jpg";



const EditProfile = (props) => {
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

  // --------------Attached --------------------

  const [file, setFile] = useState('')

  const handleChanges = (e) => {
    const data = e.target.files[0]
    setFile(data)
  }


  return (
    <div className="bg-grey-color custom-grid h-100">
      <Sidebar />
      <div className="container-fluid mb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-xs-12 col-md-10 profile-badge p-5 bg-white rounded">
            {/* <img src="https://dummyimage.com/600x400/000/">  */}

            <div className="profile-pic">
            
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
                    <img alt="User Pic" src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png"
                    id="profile-image1" />
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
              <input id="profile-image-upload" className="hidden" type="file" onChange={previewFile} />
            </div>
            <div className="user-detail">
              <form onSubmit={formik.onSubmit}>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="name">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name"

                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="email">Email</label>
                      <input type="varchar" className="form-control" id="email" placeholder="Enter Email " name="email"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="uname">Username</label>
                      <input type="text" className="form-control" id="uname" placeholder="Enter UserName" name="Username"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="Mobile">Phone </label>
                      <input type="number" className="form-control" id="Mobile" placeholder="Enter Phone Number"
                        name="Mobile"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="Designation">Designation</label>
                      <select className="custom-select" id="Designation">
                        <option selected>...Choose...</option>
                        <option value="1">Technical Lead/Engineering Lead/Team Lead</option>
                        <option value="2">Senior Software Engineer/Senior Software Developer</option>
                        <option value="3">Junior Software Developer</option>
                        <option value="4">Intern Software Developer</option>
                        <option value="5">Social Media Marketing Manager</option>
                        <option value="6">Software Engineer</option>
                        <option value="7">Software Developer</option>
                        <option value="8">Technical Project Manager</option>
                        <option value="9">Digital Marketing Manager</option>
                        <option value="10">Senior Manager IT</option>
                        <option value="11">Three</option>
                      
                      </select>
                    </div>
                    </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="department"> Department</label>
                      <select className="custom-select" id="Designation">
                        <option selected>...Choose...</option>
                        <option value="1">Marketing & Proposals Department</option>
                        <option value="2">sales Department</option>
                        <option value="3">Project Department</option>
                        <option value="4">Designing Department</option>
                        <option value="5">Finance Department</option>
                        <option value="6">Research & Development Department</option>
                        <option value="7">Information Technology Department</option>
                        <option value="8">Administration department</option>
                        <option value="3">Design & Development</option>
                        <option value="3">Front End Developer</option>
                        <option value="3">Front-End Designer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="DOJ">  Date of Joining</label>
                      <input type="date" className="form-control" id="DOJ" placeholder="Enter  Date of Joining" name="doj"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="DOB"> DOB</label>
                      <input type="date" className="form-control" id="DOB " placeholder="Enter Date Of Birth" name="DOB"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="CurrentCTC"> Current CTC</label>
                      <input type="text" className="form-control" id="CurrentCTC" placeholder="Enter Current CTC" name="CurrentCTC"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="BankDetail"> Bank Detail</label>
                      <input type="text" className="form-control" id="BankDetail " placeholder="Enter Bank Detail" name="BankDetail"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="AadhaarCard">Passport Size P</label>
                      <input type="file" className="form-control" id="AadhaarCard" onChange={handleChanges} placeholder="Attached AAdhar Card" name="AadhaarCard"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label for="ExperienceLetter">Salary Slips Last 3 Months</label>
                      <input type="file" className="form-control" id="ExperienceLetter" onChange={handleChanges} placeholder="Attached Experience Letter" name="ExperienceLetter"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-3">
                      <label for="PanCard"> PAN Card</label>
                      <input type="file" className="form-control" id="PanCard" onChange={handleChanges} placeholder="Attached Pan Card" name="PanCard"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-3">
                      <label for="AadhaarCard"> Aadhaar Card</label>
                      <input type="file" className="form-control" id="AadhaarCard " onChange={handleChanges} placeholder="Attached AAdhar Card" name="AadhaarCard"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-3">
                      <label for="ExperienceLetter">Experience Letter </label>
                      <input type="file" className="form-control" id="FileInput" onChange={handleChanges} name="ExperienceLetter"
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
                { /* <div className="col-12 col-lg-12">
                    <div className="form-group mb-5">
                      <label for="Address"> Hobbies</label>
                      <input type="text" className="form-control" id="Hobbies" placeholder="Enter Your Hobbies" name="Hobbies"
                      />
                    </div>
                </div> */}
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