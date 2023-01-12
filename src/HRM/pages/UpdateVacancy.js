import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import userService from "../../services/user.service";
import { useFormik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required(" ")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  // email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required(" ")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const UpdateVacancy = () => {
  const navigate = useNavigate();

  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [totalVacancy, setTotalVacancy] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("")

  const handleDepartment = (e) => {
    const department = e.target.value;
    setDepartment(department)
  }
  const handleExperience = (e) => {
    const experience = e.target.value;
    setExperience(experience)
  }
  const handleTotalVacancy = (e) => {
    const totalVacancy = e.target.value;
    setTotalVacancy(totalVacancy)
  }
  const handleDescription = (e) => {
    const description = e.target.value;
    setDescription(description)
  }
  const form = useRef();

  // const formik = useFormik({
  //   initialValues: {
  //     department: " ",
  //     experience: " ",
  //   },
  //   validationSchema,
  //   onSubmit: (data) => {
  //     console.log(JSON.stringify(data, null, 2));
  //   },
  // });
  const handleUpload = (event) => {
    event.preventDefault();
    const data = {
      position : department,
      experience : experience,
      totalVacancy : totalVacancy,
      description : description
    }; userService.updateVacancy(data).then((response) => {
      console.log(response)
      setMessage(response.data.message)
      navigate("/vacancy-hiring")
    },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          setMessage(resMessage.message);
      }
    );
    console.log(data)
  }
  return (
    <div className="bg-grey-color d-flex align-items-center">
      <Sidebar />
      <div className="inventory-page">
        <div className="p-4">
          <form ref={form}>
            <h1 className="text-center">Update Vacancy</h1>
            <div className="form-group mb-3">
              <label htmlFor="username">Department</label>
              <input
                type="text"
                name="username"
                className={
                  'form-control'
                }
                onChange={handleDepartment}
                value={department}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="username">Experience</label>
              <input
                type="text"
                name="username"
                className={
                  'form-control'
                }
                onChange={handleExperience}
                value={experience}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="username">Total Vacancy</label>
              <input
                type="text"
                name="username"
                className={
                  'form-control'
                }
                onChange={handleTotalVacancy}
                value={totalVacancy}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="username">Description</label>
              <input
                type="text"
                name="username"
                className={
                  'form-control'
                }
                onChange={handleDescription}
                value={description}
              />
            </div>
            <div className="form-group">
              <button type="sumbit" onClick={handleUpload} className="btn bg-dark-primary text-white btn-block mt-2">
                <span>Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default UpdateVacancy;