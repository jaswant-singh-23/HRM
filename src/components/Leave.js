import React from "react";

const Leave = () => {
  return (
    <div className="bg-grey-color">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-5 profile-badge p-5">
            <div>
              <h3 className="text-center mb-5">Welcome User</h3>
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
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Apply for Leave
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="form-group d-flex align-items-center mb-3">
                        <label className="fw-semibold me-2">from:-</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="form-group d-flex align-items-center mb-3">
                        <label className="fw-semibold me-4 me-sm-2">To:-</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="form-group d-flex align-items-center mb-3">
                        <label className="fw-semibold me-2">Dept:-</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="form-group d-flex align-items-center mb-3">
                        <label className="fw-semibold me-4 me-sm-2">CC:-</label>
                        <input type="text" className="form-control" />
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
                    <div className="text-center">
                      <input
                        type="Button"
                        className="btn btn-primary"
                        value="Submit"
                      />
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
