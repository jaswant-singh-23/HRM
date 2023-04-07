import React from "react";
import Sidebar from "../shared/components/Sidebar";

const Map = () => {
  return (
    <div className="bg-grey-color custom-grid h-100">
      <Sidebar/>
      <div className="container-fluid p-4 overflow-auto">
        <div className="main-body">
          <div className="col-12 profile-badge bg-gray pt-2">
            <div
              id="emp_profile"
              className="pro-overview tab-pane fade show active"
            >
              <div className="row mt-lg-4">
                <div className="position-relative text-align-right h-100 w-100 mt-4">
                  <iframe
                    style={{ width: "100%", height: "400px" }}
                    src="https://maps.google.com/maps?q=ameotech &t=&z=10&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
