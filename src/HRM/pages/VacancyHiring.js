import React from "react";
import Sidebar from "../Shared/Sidebar";
import Form from "react-bootstrap/Form";


const VacancyHiring = () => {

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
                <div className="col-12 col-md-12 col-lg-8">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="dropdown show">
                      <Form.Select aria-label="Default select example">
                        <option>Department</option>
                        <option value="1">Angular</option>
                        <option value="2">Marketing</option>
                        <option value="3">Python</option>
                        <option value="3">React Js</option>
                        <option value="3">Data Entry</option>
                        <option value="3">Designer</option>
                        <option value="3">Dot Net</option>
                      </Form.Select>
                    </div>
                    <div className="dropdown show">
                      <Form.Select aria-label="Default select example">
                        <option>Designation</option>
                        <option value="1">Angular</option>
                        <option value="2">Marketing</option>
                        <option value="3">Python</option>
                        <option value="3">React Js</option>
                        <option value="3">Data Entry</option>
                        <option value="3">Designer</option>
                        <option value="3">Dot Net</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 profile-badge bg-white p-4 mt-5">
            <div className="leave-sec">
              <div className="row">
                <div className="col-12 col-md-12 mb-3">
                  <div>
                    <table className="table table-hover table-striped">
                      <thead className="bg-dark-primary">
                        <tr>
                          <th
                            scope="col"
                            className="border-end-1 border-1 border-start-0 border-top-0 text-center px-3"
                          >
                            SEO
                          </th>
                          <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">
                            SEO Executive
                          </th>
                          <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">
                            Interview
                          </th>
                          <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">
                            Feed Back
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            scope="row"
                            className="border-end-1 border-start-0 border-1 text-center px-3"
                          >
                            ytt
                          </td>
                          <td className="border-end-1 border-1 text-center">
                            ytt
                          </td>
                          <td className="border-end-1 border-1 text-center">
                            hgg
                          </td>
                          <td className="border-end-1 border-1 text-center">hgjg</td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="border-end-1 border-start-0 border-1 text-center px-3"
                          >
                            ytt
                          </td>
                          <td className="border-end-1 border-1 text-center">
                            ytt
                          </td>
                          <td className="border-end-1 border-1 text-center">
                            hgg
                          </td>
                          <td className="border-end-1 border-1 text-center">hgjg</td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="border-end-1 border-start-0 border-1 text-center px-3"
                          >
                            ytt
                          </td>
                          <td className="border-end-1 border-1 text-center">
                            ytt
                          </td>
                          <td className="border-end-1 border-1 text-center">
                            hgg
                          </td>
                          <td className="border-end-1 border-1 text-center">hgjg</td>
                        </tr>
                      </tbody>
                    </table>
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

export default VacancyHiring;
