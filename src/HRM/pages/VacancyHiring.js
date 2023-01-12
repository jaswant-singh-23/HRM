import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import userService from "../../services/user.service";
import Form from "react-bootstrap/Form";


const VacancyHiring = () => {
  const navigate = useNavigate()
  const [content, setContent] = useState([]);

  useEffect(() => {
    userService
      .GetVacancy()
      .then((response) => {
        console.log("____________________", response)
        setContent(response.data.data)
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

  return (
    <div className="custom-grid h-100vh">
      <Sidebar />
      <div className="bg-grey-color container-fluid">
        <div className="row d-flex justify-content-center mt-5">
          <div>
            <button className="btn bg-dark-primary mb-2 col-md-2" type="Button" variant="contained" onClick={() => navigate("/update-vacancy")}>Add New Vacancy</button>
          </div>
          {content.map((items, i) => (
            <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 profile-badge bg-white p-4 mt-3">
              <div className="leave-sec">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-8 ">
                    <div>
                      <div className=" align-items-center justify-content-between">
                        <h2>Position-: <small>{items.position}</small></h2>
                        <p>Experience-: <b>{items.experience}</b></p>
                        <p>Total Vacancy-: <b>{items.totalVacancy}</b></p>
                      </div>
                      <div>
                        <button className="btn bg-dark-primary mb-2 col-md-2 mt-4" type="Button" variant="contained" data-toggle="collapse"
                          data-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample">Description</button>
                      </div>
                      <div className="collapse mt-3" id="collapseExample">
                        {items.description}
                      </div>
                    </div>
                    {/* <div>
                      <button className="btn bg-dark-primary mb-2 col-md-2 mt-4" type="Button" >Apply Now</button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};
export default VacancyHiring;
