import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import userService from "../../services/user.service";
import EditIcon from "../../assets/images/edit-icon.png"
import TrashIcon from "../../assets/images/trash.png"
import XLSX from 'sheetjs-style';
import * as FileSaver from 'file-saver';
import { Tooltip } from '@mui/material';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Toast from "../Shared/Toast";
import { Link } from "react-router-dom";

const EmpDetails = ({ excelData, fileName }) => {
  const [content, setContent] = useState([]);
  const [detail, setDetail] = useState(false);

  const handleAngular = () => {
    setDetail(!detail.true)
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response)
        setContent(response.data.data.angular)
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

  const handleSale = () => {
    setDetail(!detail.true)
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response)
        setContent(response.data.data.marketing)
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

  const handlePython = () => {
    setDetail(!detail.true)
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response)
        setContent(response.data.data.python)

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

  const handleReactjs = () => {
    setDetail(!detail.true)
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response)
        setContent(response.data.data.reactjs)
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

  const handleDataentry = () => {
    setDetail(!detail.true)
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response)
        setContent(response.data.data.dataentry)

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

  const handleDesigner = () => {
    setDetail(!detail.true)
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response)
        setContent(response.data.data.designer)

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

  const handleDotNet = () => {
    setDetail(!detail.true)
    userService
      .getEmpDetail()
      .then((response) => {
        console.log(response)
        setContent(response.data.data.dotnet)

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

  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  /////// Get detail ///////

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
    const itemId = { Id: data };
    console.log(itemId)
    userService.deleteEmployeeAccount(itemId).then((response) => {
      Toast.success(response.data.message)
      // window.location.reload();
    }, (error) => {
      const _content =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      setContent(_content);
    })
  }
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
                      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Department
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#" onClick={handleAngular}>Angular</a>
                        <a className="dropdown-item" href="#" onClick={handleSale}>Marketing</a>
                        <a className="dropdown-item" href="#" onClick={handlePython}>Python </a>
                        <a className="dropdown-item" href="#" onClick={handleReactjs}>React Js</a>
                        <a className="dropdown-item" href="#" onClick={handleDataentry}>Dataentry </a>
                        <a className="dropdown-item" href="#" onClick={handleDesigner}>Designer </a>
                        <a className="dropdown-item" href="#" onClick={handleDotNet}>Dot Net </a>
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
                        <Tooltip>
                          <button className="btn bg-dark-primary" type="Button" variant="contained" onClick={(e) => exportToExcel(fileName)} style={{ cursor: 'pointer' }}
                          >
                            Bulk Entry
                          </button>
                        </Tooltip>
                      </div>
                      <div className="text-center">
                        <button
                          type="Button"
                          className="btn bg-dark-primary" onClick={handleShow}
                        >
                          Single Entry
                        </button>
                        <Modal show={show} onHide={handleClose} backdrop="static"
                          keyboard={false} className="emp-model">
                          <Modal.Header closeButton>
                            <Modal.Title>Add Employee</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group controlId="exampleForm.ControlInput1">
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Employee Name"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Email</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">User Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter User Name"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Password</Form.Label>
                                  <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Phone</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Enter Phone Number"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Designation</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Designation"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Department</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Department Name"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Date of Joining</Form.Label>
                                  <Form.Control
                                    type="date"
                                    placeholder="Enter Date of Joining"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Roles</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Roles"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Current CTC</Form.Label>
                                  <Form.Control
                                    type="file"
                                    placeholder="Enter Current CTC"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Attached Pan Card</Form.Label>
                                  <Form.Control
                                    type="file"
                                    placeholder="Attached Pan Card"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Attached Aadhar Card</Form.Label>
                                  <Form.Control
                                    type="file"
                                    placeholder="Attached Aadhar Card"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Address</Form.Label>
                                  <Form.Control
                                    type="address"
                                    placeholder="Enter Address"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-3 w-50 d-inline-block">
                                  <Form.Label className="fw-h7 mb-1">Date of Birth</Form.Label>
                                  <Form.Control
                                    type="date"
                                    placeholder="Enter Date of Birth"
                                    autoFocus
                                  />
                                </div>
                                <div className="px-2 mb-2">
                                  <Form.Label className="fw-h7 mb-1">Bank Detail</Form.Label>
                                  <Form.Control
                                    type="file"
                                    placeholder="Enter Bank Detail"
                                    autoFocus
                                  />
                                </div>
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <button className="btn bg-dark-primary" type="button" variant="primary" onClick={handleClose}>
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
          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 profile-badge bg-white p-4 mt-5" style={{ display: detail ? 'block' : 'none' }}>
            <table className="table table-hover table-striped ">
              <thead className="bg-dark-primary">
                <tr>
                  <th scope="col" className="border-end-1 border-1 border-start-0 border-top-0 text-center px-3">#</th>
                  <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Name</th>
                  <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Department</th>
                  <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {content != null &&
                  content.map((data, i) => (
                    <tr key={i}>
                      <th scope="row" className="border-end-1 border-start-0 border-1 text-center px-3">{i + 1}</th>
                      <td className="border-end-1 border-1 text-center">{data.name}</td>
                      <td className="border-end-1 border-1 text-center">{data.designation}</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <Link className="text-light text-decoration-none" to={"/edit-emp/" + data.username}>
                            <span className="me-1">
                              <img src={EditIcon} width="17px" alt="edit-image" />
                            </span>
                          </Link>
                          <span className="ms-2 cursor-pointer mb-4" onClick={() => handleDelete(data.username)}>
                            <img src={TrashIcon} alt="" width="16px" />

                          </span>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDetails;
