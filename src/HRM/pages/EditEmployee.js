import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AmeoLogos from "../../assets/images/Ameo.Logo.jpg";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/user.service";
import Sidebar from "../Shared/Sidebar";
import AuthService from "../../services/auth.service";
import { Toast } from "react-bootstrap";

const EditEmployee = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");

  const [content, setContent] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();


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
      phone: "",
      designation: "",
      department: "",
      doj: "",
      dob: "",
      CurrentCTC: "",
      BankDetail: "",
      PassportSizep: "",
      SalarySlip: "",
      PanCard: "",
      AadhaarCard: "",
      ExperienceLetter: "",
      address: "",
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

//   /////// Get Emp ///////
// 	useEffect(() => {
// 		var empId = { "id": id }
// 		AuthService.getEmpById(empId).then(
// 			(response) => {
// 				setContent(response.data.data);
// 				console.log(response.data.data)
// 			},
// 			(error) => {
// 				const _content =
// 					(error.response && error.response.data) ||
// 					error.message ||
// 					error.toString();
// 				setContent(_content);
// 			}
// 		);
// 		formik.values.id = id
// 	}, []);
// 	console.log(content)

// 	///////// Update Emp ////////
	const onUpdate = async () => {
		const data = formik.values;
		console.log(data)
		UserService.UpdateEmployeeDetails(data).then(
			(response) => {
				setContent(response.data.data);
				Toast.success(response.data.message)
				navigate('/emp-details');
			},
			(error) => {
				const _content =
					(error.response && error.response.data) ||
					error.message ||
					error.toString();
				setContent(_content);
			}
		);
	}

  /////// Get Profile ///////
  useEffect(() => {
    var profileId = { id: id };
    UserService.getParticularProfile(profileId).then(
      (response) => {
        setContent(response.data.data);
        console.log(response.data.data);
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
  console.log(content);

  const handleSubmit = () => {
    console.log("---------", formik.values);
  };

  const previewFile = () => {};

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    console.log("------------------", e.target)
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

  const [file, setFile] = useState("");

  const handleChanges = (e) => {
    const data = e.target.files[0];
    setFile(data);
  };

  return (
    <div className="bg-grey-color custom-grid h-100">
      <Sidebar />
      <div className="container-fluid mb-5">
      
        <div className="row justify-content-center mt-5">
          <div className="col-xs-12 col-md-10 profile-badge p-5 bg-white rounded">
          <div className="text-center mb-5">
             <h3>Update Details</h3>
          </div>
            <div className="user-detail">
              <form onSubmit={formik.onSubmit}>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        defaultValue={content.name}
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
                        name="email"
                        onChange={handleChange}
                        defaultValue={content.email}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="uname">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="uname"
                        name="Username"
                        onChange={handleChange}
                        defaultValue={content.username}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="Mobile">Phone </label>
                      <input
                        type="number"
                        className="form-control"
                        id="Mobile"
                        name="Mobile"
                        onChange={handleChange}
                        defaultValue={content.phone}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="Designation">Designation</label>
                      <input
                        type="text"
                        className="form-control"
                        id="designation"
                        name="Designation"
                        onChange={handleChange}
                        defaultValue={content.designation}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="department"> Department</label>
                        <input
                            type="text"
                            className="form-control"
                            id="department"
                            name="Department"
                            onChange={handleChange}
                            defaultValue={content.department}
                        />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="DOJ"> Date of Joining</label>
                      <input
                        type="date"
                        className="form-control"
                        id="DOJ"
                        name="DOJ"
                        onChange={handleChange}
                        defaultValue={content.doj}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="DOB"> DOB</label>
                      <input
                        type="date"
                        className="form-control"
                        id="DOB "
                        name="DOB"
                        onChange={handleChange}
                        defaultValue={content.dob}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="CurrentCTC"> Current CTC</label>
                      <input
                        type="text"
                        className="form-control"
                        id="CurrentCTC"
                        name="CurrentCTC"
                        onChange={handleChange}
                        defaultValue={content.currentCTC}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="BankDetail"> Bank Detail</label>
                      <input
                        type="text"
                        className="form-control"
                        id="BankDetail "
                        placeholder="Enter Bank Detail"
                        name="BankDetail"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="PassportSizep">Passport Size P</label>
                      <input
                        type="file"
                        className="form-control"
                        id="AadhaarCard"
                        onChange={handleChange}
                        placeholder="Attached AAdhar Card"
                        name="PassportSizep"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-3">
                      <label htmlFor="SalarySlip">Salary Slips Last 3 Months</label>
                      <input
                        type="file"
                        className="form-control"
                        id="ExperienceLetter"
                        onChange={handleChange}
                        placeholder="Attached Experience Letter"
                        name="SalarySlip"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-3">
                      <label htmlFor="PanCard"> PAN Card</label>
                      <input
                        type="file"
                        className="form-control"
                        id="PanCard"
                        onChange={handleChange}
                        placeholder="Attached Pan Card"
                        name="PanCard"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-3">
                      <label htmlFor="AadhaarCard"> Aadhaar Card</label>
                      <input
                        type="file"
                        className="form-control"
                        id="AadhaarCard "
                        onChange={handleChange}
                        placeholder="Attached AAdhar Card"
                        name="AadhaarCard"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-3">
                      <label htmlFor="ExperienceLetter">Experience Letter </label>
                      <input
                        type="file"
                        className="form-control"
                        id="FileInput"
                        onChange={handleChange}
                        name="ExperienceLetter"
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
                        name="Address"
                        onChange={handleChange}
                        defaultValue={content.address}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="Button"
                    className="btn bg-dark-primary"
                    value="Update Profile"
                    onClick={onUpdate}
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

export default EditEmployee;
