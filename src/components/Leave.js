import React from "react";
import Sidebar from "../shared/components/Sidebar";

const Leave = () => {
  return (
    <div className="bg-grey-color custom-grid ">
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
                  <div className="d-flex align-items-center">
                    <p className="mb-0 fw-semibold me-3 text-nowrap">
                      Total Leave Available:-
                    </p>
                    <p className="mb-0 border rounded py-1 px-2">10</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 fw-semibold me-3">Leave Taken:-</p>
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
                  <div className="row">
                    <p className="text-center mb-2">No of Days</p>
                    <div className="col-12 col-sm-12 col-md-6">
                      <div className="form-group d-flex align-items-center mb-3">
                        <label className="fw-semibold me-1 me-md-2">From:-</label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                      <div className="form-group d-flex align-items-center mb-3">
                        <label className="fw-semibold me-4 me-md-2">To:-</label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>

                    <div className="col-12 col-md-12">
                      <div className="form-group d-flex align-items-center mb-3">
                        <label className="fw-semibold me-2">Reason:</label>
                        <textarea
                          type="text"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center aligns-items-center  text-center">
                      <div className="text-center">
                        <button
                          type="Button"
                          className="btn bg-dark-primary"
                          data-toggle="collapse"
                          data-target="#collapseExample1"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >Continue</button>
                        <div className="collapse mt-3 text-left" id="collapseExample1">
                          <div>
                            <p className="">Dear Sir/Mam,</p>
                            <p className="mb-2">I am <b>Ranvijay</b> From Department <b>Reactjs</b> want leave from <b>24/11/2022</b> to <b>25/11/2022</b> Because of  <b>Urgent</b>. I will look forward for Consideration and approval please.</p>
                            <p>Thanks🙏</p>
                            <p>With Best Regards</p>
                            <p>Ranvijay </p>
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
      </div>
    </div>
  );
};

export default Leave;
