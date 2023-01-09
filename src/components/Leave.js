import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../shared/components/Sidebar";
import userService from "../services/user.service";
import { Modal, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { ToastContainer } from "react-toastify";
import Toast from "../shared/Toast";

const Leave = () => {
  const navigate = useNavigate();
  const [userField, setUserField] = useState({});

  const [addShow, setAddShow] = useState(false);
  const [fromLeave, setFromLeave] = useState();
  const [toLeave, setToLeave] = useState();
  const [half, setHalf] = useState();
  const [reason, setReason] = useState();

  const handleAddShow = () => setAddShow(true);
  const handleAddClose = () => setAddShow(false);
  const handleCancel = () => navigate("/home");

  const handleFrom = (e) => {
    const fromLeave = e.target.value;
    setFromLeave(fromLeave);
  };
  const handleTo = (e) => {
    const toLeave = e.target.value;
    setToLeave(toLeave);
  };

  const handleReason = (e) => {
    const reason = e.target.value;
    setReason(reason);
  };
  const handleHalf = (e) => {
    const half = e.target.value;
    setHalf(half);
  };

  //////////////// Get User Detail //////////////
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

  //////////////// Apply Leave ////////////////
  const handleSubmit = () => {
    const data = {
      reason: reason,
      name: userField.name,
      fromDate: fromLeave,
      toDate: toLeave,
      department: userField.department,
      halfDay: half,
    };
    console.log("---", data);
    userService
      .leaveApply(data)
      .then((response) => {
        handleCancel();
        Toast.success(response.message);
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

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    username: Yup.string().required("Username is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <div className="custom-grid h-100vh">
      <Sidebar />
      <div className="bg-grey-color container-fluid">
        <ToastContainer />
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 profile-badge bg-white p-4">
            <div>
              <h3 className="text-center mb-4">Apply For Leave</h3>
            </div>
            <div className="leave-sec">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <div className="d-flex align-items-center flex-wrap">
                    <p className="mb-0 me-3 text-nowrap">
                      Total Leave Available:-
                    </p>
                    <p className="mb-0 border rounded py-1 px-2">10</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 me-3">Leave Taken:-</p>
                    <p className="mb-0 border rounded py-1 px-2">2</p>
                  </div>
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
                  Apply for Leave
                </button>
              </p>
              <div className="collapse mt-3" id="collapseExample">
                <div className="card card-body">
                  <form onSubmit={formik.onSubmit}>
                    <div className="row">
                      <h5 className="text-center mb-2">No. of Days</h5>

                      <div className="col-12 col-sm-12 col-md-6">
                        <div className="form-group d-flex align-items-center flex-wrap flex-sm-nowrap mb-3">
                          <label className="fw-semibold me-1 me-md-2">
                            From<strong className="text-danger">*</strong>:-
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            value={fromLeave}
                            onChange={handleFrom}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6">
                        <div className="form-group d-flex align-items-center flex-wrap flex-sm-nowrap mb-3">
                          <label className="fw-semibold me-4 me-md-2">
                            To<strong className="text-danger">*</strong>:-
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            value={toLeave}
                            onChange={handleTo}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-12">
                        <div className="form-group d-flex align-items-center mb-3">
                          <label className="fw-semibold me-2">
                            Reason<strong className="text-danger">*</strong>:-
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            value={reason}
                            onChange={handleReason}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 d-flex mb-3">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="flexCheckDefault"
                            name="half"
                            value={"(1st-Half)"}
                            onChange={handleHalf}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            name="isthalf"
                          >
                            1st half
                          </label>
                        </div>
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="flexCheckDefault1"
                            name="half"
                            value={"(2nd-Half)"}
                            onChange={handleHalf}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault1"
                            name="2ndhalf"
                          >
                            2nd half
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center aligns-items-center text-center">
                        <div className="text-center me-3">
                          <button
                            type="Button"
                            className="btn bg-dark-primary"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="text-center">
                          <button
                            type="Button"
                            className="btn bg-dark-primary"
                            onClick={handleAddShow}
                          >
                            Continue
                          </button>
                          <Modal
                            centered
                            show={addShow}
                            onHide={handleAddClose}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Leave Application</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div>
                                <p className="">Dear Sir/Mam,</p>
                                <p className="mb-2">
                                  I am <b>{userField.name}</b> From{" "}
                                  <b>{userField.department}</b> Department want
                                  leave from{" "}
                                  <b>
                                    {moment(fromLeave).format("DD-MMM-YYYY")}
                                  </b>{" "}
                                  to{" "}
                                  <b>{moment(toLeave).format("DD-MMM-YYYY")}</b>{" "}
                                  <b>{half}</b>. Because of <b>{reason}</b> I
                                  will look forward for Consideration and
                                  approval please.
                                </p>
                                <p>Thanks🙏</p>
                                <p>With Best Regards</p>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                className=" btn-primary bg-dark-primary py-1 px-4"
                                onClick={handleSubmit}
                              >
                                Submit
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
