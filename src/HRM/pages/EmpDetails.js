import React from "react";
import Sidebar from "../../HRM/shared/Sidebar";

const EmpDetails = () => {
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
                <div className="col-12 col-md-12 mb-3">
                  <div className="d-flex align-items-center flex-wrap dropdown">
                    <p className="mb-0 me-3 text-nowrap">
                      Please Select Department:-
                    </p>                 
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>..Select Option..</option>
                      <option value="1">IT Sales</option>
                      <option value="2">React Js/Native/Node js</option>
                      <option value="3">Dot Net</option>
                      <option value="4">Python</option>
                      <option value="5">Digital Marketing</option>
                      <option value="6">Data Entry</option>
                      <option value="7">HR</option>
                      <option value="8">Admin</option>
                    </select>
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

export default EmpDetails;
