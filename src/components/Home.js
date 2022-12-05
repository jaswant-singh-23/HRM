import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../shared/components/Sidebar";

const Home = () => {
  return (
    <div className="bg-grey-color custom-grid h-100vh">
      <Sidebar />
      <div className="home-page bg-img position-relative h-100">
        <div className="d-flex justify-content-center">
          <h1 className="text-white text-center mt-5">
            Welcome To
            <br />
            Ameotech Informatics
          </h1>
        </div>
        <div className="text-center mt-3">
          <div className=" ">
            <Link to="/profile" className="text-white text-decoration-none">
              <div className="d-flex justify-content-center">
                <div className="mr-4">
                  <button className="btn bg-dark-primary">
                  Go to profile page
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="position-absolute bottom-0">
          <p className="text-white ms-3">Contact Us:- +91 172 4029651</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
