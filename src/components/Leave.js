import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../shared/components/Sidebar";
import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Leave = () => {
  const navigate = useNavigate();

  const [addShow, setAddShow] = useState(false);
  const [fromLeave, setFromLeave] = useState();
  const [toLeave, setToLeave] = useState()
  const [reason, setReason] = useState()

  const handleAddShow = () => setAddShow(true);
  const handleAddClose = () => setAddShow(false);
  const handleCancel = () => navigate("/home")

  const handleFrom = (e) => {
    const fromLeave = e.target.value;
    setFromLeave(fromLeave);
  }
  const handleTo = (e) => {
    const toLeave = e.target.value;
    setToLeave(toLeave);
  }

  const handleReason = (e) => {
    const reason = e.target.value;
    setReason(reason)
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .required('Email is required'),
    username: Yup.string()
      .required('Username is required'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',

    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <div className="bg-grey-color custom-grid h-100vh">
      <Sidebar />
      <div className="container-fluid">
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
                      <p className="text-center mb-2">No of Days</p>

                      <div className="col-12 col-sm-12 col-md-6">
                        <div className="form-group d-flex align-items-center flex-wrap flex-sm-nowrap mb-3">
                          <label className="fw-semibold me-1 me-md-2">From:-</label>
                          <input type="date" className="form-control"
                            value={fromLeave}
                            onChange={handleFrom}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6">
                        <div className="form-group d-flex align-items-center flex-wrap flex-sm-nowrap mb-3">
                          <label className="fw-semibold me-4 me-md-2">To:-</label>
                          <input type="date" className="form-control"
                            value={toLeave}
                            onChange={handleTo}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-12 d-flex mb-3">
                        <div class="form-check me-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">
                            Ist Half
                          </label>
                        </div>
                        <div class="form-check me-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          <label class="form-check-label" for="flexCheckDefault1">
                            2nd Half
                          </label>
                        </div>
                        <div class="form-check me-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                          <label class="form-check-label" for="flexCheckDefault2">
                            Full Day
                          </label>
                        </div>
                      </div>

                      <div className="col-12 col-md-12">
                        <div className="form-group d-flex align-items-center mb-3">
                          <label className="fw-semibold me-2">Reason:-</label>
                          <textarea
                            type="text"
                            className="form-control"
                            value={reason}
                            onChange={handleReason}
                          ></textarea>
                        </div>
                      </div>
                      <div className="d-flex justify-content-around aligns-items-center  text-center">
                        <div className="text-center ">
                          <button
                            type="Button"
                            className="btn bg-dark-primary "
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
                          <Modal centered show={addShow} onHide={handleAddClose} >
                            <Modal.Header closeButton>
                              <Modal.Title>Leave Application</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div>
                                <p className="">Dear Sir/Mam,</p>
                                <p className="mb-2">I am <b>Ranvijay</b> From Department <b>Reactjs</b> want leave from <b>{fromLeave}</b> to <b>{toLeave}</b> Because of  <b>{reason}</b>. I will look forward for Consideration and approval please.</p>
                                <p>Thanks🙏</p>
                                <p>With Best Regards</p>
                                <p>Ranvijay </p>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button className=' btn-primary bg-dark-primary py-1 px-4' >
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
