import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import userService from "../../services/user.service";
import EditIcon from "../../assets/images/edit-icon.png";
import TrashIcon from "../../assets/images/trash.png";
import XLSX from "sheetjs-style";
import * as FileSaver from "file-saver";
import { Tooltip } from "@mui/material";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Toast from "../Shared/Toast";
import AuthService from "../../services/auth.service";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {deleteEmployeeAccount} from '../../services/user.service'


/////////////// Single Entry ////////////



const EmpDetails = ({ excelData, fileName }) => {

  const [detail , setDetail] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [currentCTC, setCurrentCTC] = useState("");
  const [address, setAddress] = useState("");

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  }
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  }
  const handleUserName = (e) => {
    const username = e.target.value;
    setUsername(username);
  }
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  }
  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  }
  const handleDesignation = (e) => {
    const designation = e.target.value;
    setDesignation(designation);
  }
  const handleDepartment = (e) => {
    const department = e.target.value;
    setDepartment(department);
  }
  const handleDOJ = (e) => {
    const doj = e.target.value;
    setDoj(doj);
  }
  const handleDOB = (e) => {
    const dob = e.target.value;
    setDob(dob);
  }
  const handleCurrentCTC = (e) => {
    const currentCTC = e.target.value;
    setCurrentCTC(currentCTC);
  }
  const handleAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  }

  const handleEntry = () => {
    const data = {
      name: name,
      email:  email,
      username: username,
      password:  password,
      phone:  phone,
      designation: designation,
      department: department,
      dob: dob,
      doj: doj,
      currentCTC: currentCTC,
      address: address,
    };
    AuthService.register(data)
    .then((response) => {
      console.log(response);
      // setContent(response.data.data);
    })
    .catch((error) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    });

  }


 
  

  const handleAngular = () => {
    setDetail(!detail.true);
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response);
        setContent(response.data.data.angular);
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
  const handleSale = () => {
    setDetail(!detail.true);
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response);
        setContent(response.data.data.marketing);
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
  const handlePython = () => {
    setDetail(!detail.true);
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response);
        setContent(response.data.data.python);
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
  const handleReactjs = () => {
    setDetail(!detail.true);
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response);
        setContent(response.data.data.reactjs);
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
  const handleDataentry = () => {
    setDetail(!detail.true);
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response);
        setContent(response.data.data.dataentry);
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
  const handleDesigner = () => {
    setDetail(!detail.true);
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response);
        setContent(response.data.data.designer);
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
  const handleDotNet = () => {
    setDetail(!detail.true);
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response);
        setContent(response.data.data.dotnet);
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

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bulkShow, setBulkShow] = useState(false);

  const bulkhandleAddUpload = () => setBulkShow(false);
  const bulkhandleShow = () => setBulkShow(true);

  const bulkhandleUpload = () => {
    console.log("========================", file);
    const formData = new FormData();
    formData.append("file", file.raw);
    AuthService.addNewUser(formData).then(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
    bulkhandleAddUpload();
  };

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  /////// Get Quizs ///////
  useEffect(() => {
    userService.getAllProfileDetail().then(
      (response) => {
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
  }, []);

  //////// Delete  ////////
  const handleDelete = (data) => {
    const itemId = { id: data };
    console.log(itemId);
    userService.deleteEmployeeAccount(itemId).then(
      (response) => {
        console.log(response);
        Toast.success(response.data.message);
        // window.location.reload();
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  };

  // ////////////// Excel Sheet handle ///////////////
  // const [addFile, setAddFile] = useState({
  //   file: "",
  // });

  // const handleSheet = (e) => {
  //   const content = e.target.value;
  //   setAddFile({ ...addFile, content: file });
  // };

  const [file, setFile] = useState({ preview: "", raw: "" });

  const handleSheet = (e) => {
    console.log("------------------", e.target);
    const data = e.target.files[0];
    setFile(data);

    if (e.target.files.length) {
      setFile({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

////////////// Single value /////////////////////

// const [user, setUser] = useState({
//   name: '',
//   email:  '',
//   username:  '',
//   phone:  '',
//   designation: '',
//   department:  '',
//   dob: '',
//   doj: '',
//   currentCTC: '',
//   address: '',
// });


// const onValueChange = (e) => {
//   setUser({...user, [e.target.name]: e.target.value})
// }


  return (
    <div className="custom-grid h-100vh">
      <Sidebar />
      <div className="bg-grey-color container-fluid">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 profile-badge bg-white p-4">
            <div>
              <h3 className="text-center mb-4">Welcome to Hr Department</h3>
            </div>
            <div className="leave-sec">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                  <div className="d-flex align-items-start flex-wrap dropdown justify-content-end h-100">
                    <p className="mb-0 me-3 text-nowrap mt-1">
                      Please Select Department:-
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="dropdown show">
                      <a
                        className="btn bg-dark-primary dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Department
                      </a>

                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleAngular}
                        >
                          Angular
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSale}
                        >
                          Marketing
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handlePython}
                        >
                          Python
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleReactjs}
                        >
                          React Js
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleDataentry}
                        >
                          Dataentry
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleDesigner}
                        >
                          Designer
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleDotNet}
                        >
                          Dot Net
                        </a>
                      </div>
                    </div>
                    <p className="">
                      <button
                        className="btn bg-dark-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Add New Employee
                      </button>
                    </p>
                  </div>
                  <div className="collapse mt-3" id="collapseExample">
                    <div className="d-flex justify-content-center aligns-items-center text-center">
                      <div className="text-center me-3">
                        <Link>
                          <Button
                            className="btn bg-dark-primary"
                            type="Button"
                            variant="contained"
                            onClick={(e) => {
                              bulkhandleShow();
                            }}
                          >
                            Bulk Entry
                          </Button>
                        </Link>
                      </div>
                      <div className="text-center">
                        <button
                          type="Button"
                          className="btn bg-dark-primary"
                          onClick={handleShow}
                        >
                          Single Entry
                        </button>
                        <Modal
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                          keyboard={false}
                          className="emp-model"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Add Employee</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group controlId="exampleForm.ControlInput1">
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    Name
                                  </Form.Label>
                                  <Form.Control
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={ handleName}
                                    placeholder="Enter Employee Name"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    Email
                                  </Form.Label>
                                  <Form.Control
                                  value={email}  
                                  onChange={handleEmail}  
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    User Name
                                  </Form.Label>
                                  <Form.Control
                                    name="username"
                                    value={username}
                                    onChange={handleUserName}  
                                    type="text"
                                    placeholder="Enter User Name"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    Password
                                  </Form.Label>
                                  <Form.Control
                                  value={password}  
                                  onChange={handlePassword} 
                                    name="password" 
                                    type="password"
                                    placeholder="Enter Password"                              
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    Phone
                                  </Form.Label>
                                  <Form.Control
                                  value={phone}  
                                  onChange={handlePhone}  
                                    name="phone"
                                    type="number"
                                    placeholder="Enter Phone Number"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    Designation
                                  </Form.Label>
                                  <Form.Control
                                    name="designation"
                                    value={designation}
                                    onChange={handleDesignation}  
                                    type="text"
                                    placeholder="Enter Designation"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    Department
                                  </Form.Label>
                                  <Form.Control
                                    name="department"
                                    value={department}
                                    onChange={handleDepartment}  
                                    type="text"
                                    placeholder="Enter Department Name"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    Date of Joining
                                  </Form.Label>
                                  <Form.Control
                                    name="doj"
                                    value={doj}
                                    onChange={handleDOJ}  
                                    type="date"
                                    placeholder="Enter Date of Joining"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                <Form.Label className="fw-h7 mb-1">
                                  Date of Birth
                                </Form.Label>
                                <Form.Control
                                  name="dob"
                                  value={dob}
                                  onChange={handleDOB}  
                                  type="date"
                                  placeholder="Enter Date of Birth"
                                  autoFocus
                                />
                              </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">
                                    Current CTC
                                  </Form.Label>
                                  <Form.Control
                                    name="currentCTC"
                                    value={currentCTC}
                                    onChange={handleCurrentCTC}  
                                    type="number"
                                    placeholder="Enter Current CTC"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3">
                                  <Form.Label className="fw-h7 mb-1">
                                    Address
                                  </Form.Label>
                                  <Form.Control
                                    name="address"
                                    value={address}
                                    onChange={handleAddress}  
                                    type="address"
                                    placeholder="Enter Address"
                                    autoFocus
                                  />
                                </div>
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <button
                              className="btn bg-dark-primary"
                              type="button"
                              variant="primary"
                              onClick={ handleEntry}
                            >
                              Save Changes
                            </button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 profile-badge bg-white p-4 mt-5"
            style={{ display: detail ? "block" : "none" }}
          >
            <table className="table table-hover table-striped ">
              <thead className="bg-dark-primary">
                <tr>
                  <th
                    scope="col"
                    className="border-end-1 border-1 border-start-0 border-top-0 text-center px-3"
                  >
                    #
                  </th>
                  <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">
                    Name
                  </th>
                  <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">
                    Department
                  </th>
                  <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.map((data, i) => (
                  <tr key={i}>
                    <th
                      scope="row"
                      className="border-end-1 border-start-0 border-1 text-center px-3"
                    >
                      {i + 1}
                    </th>
                    <td className="border-end-1 border-1 text-center">
                      {data.name}
                    </td>
                    <td className="border-end-1 border-1 text-center">
                      {data.designation}
                    </td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <Link
                          className="text-light text-decoration-none"
                          to={"/edit-emp/" + data.username}
                        >
                          <span className="me-1 d-flex align-items-center">
                            <img src={EditIcon} width="17px" alt="edit-image" />
                          </span>
                        </Link>
                        <span
                          className="ms-2 cursor-pointer"
                          onClick={() => handleDelete(data.username)}
                        >
                          <img src={TrashIcon} alt="" width="16px" />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <form>
        <Modal
          show={bulkShow}
          onHide={bulkhandleAddUpload}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Excel Sheet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" name="file" onChange={handleSheet} />
          </Modal.Body>
          <Modal.Footer>
            <Tooltip title="Excel Sheet">
              <Button
                className="btn bg-dark-primary"
                type="Button"
                variant="contained"
                onClick={(e) => {
                  exportToExcel(fileName);
                }}
                style={{ cursor: "pointer" }}
              >
                Download Excel Sheet
              </Button>
            </Tooltip>
            <Button
              className="btn bg-dark-primary"
              type="Button"
              onClick={bulkhandleUpload}
            >
              Sheet Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
};

export default EmpDetails;
