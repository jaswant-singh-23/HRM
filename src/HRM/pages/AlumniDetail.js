import React from "react";
import Sidebar from "../Shared/Sidebar";

const data = [
  {
    Id: 1,
    Department: "IT Sales",
    TL: 2,
    Employee: 10,
  },
  {
    Id: 2,
    Department: "React Js/Native/Node js",
    TL: 1,
    Employee: 6,
  },
  {
    Id: 3,
    Department: "Dot Net",
    TL: 3,
    Employee: 15,
  },
  {
    Id: 4,
    Department: "Python",
    TL: 2,
    Employee: 17,
  },
  {
    Id: 5,
    Department: "Digital Marketing",
    TL: 1,
    Employee: 5,
  },
  {
    Id: 6,
    Department: "Data Entry",
    TL: 2,
    Employee: 7,
  },
  {
    Id: 7,
    Department: "HR",
    TL: 2,
    Employee: 3,
  },
  {
    Id: 8,
    Department: "Admin",
    TL: 1,
    Employee: 2,
  },
];

const AlumniDetail = () => {
  return (
    <div className="custom-grid h-100vh">
      <Sidebar />
      <div className="bg-grey-color container-fluid">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 profile-badge bg-white p-4">
            <div className="leave-sec">
              <div className="row">
                <div className="col-12 col-md-12 mb-3">
                  <div>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Dipartment</th>
                          <th scope="col">Employee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((info, id) => (
                          <tr>
                            <td>{info.key= id +' '}</td>
                            <td>{info.Department}</td>
                            <td>{info.TL}</td>
                            <td>{info.Employee}</td>
                          </tr>
                        ))}
                        <tr>
                          <th scope="row"></th>
                          <th>Total Emp</th>
                          <th>13</th>
                          <th>49</th>
                          <th>Grand Total= 62</th>
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

export default AlumniDetail;
