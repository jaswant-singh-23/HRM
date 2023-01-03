import React, { useEffect, useState } from 'react'
import Sidebar from '../Shared/Sidebar'

import { getAllProfileDetail } from '../../services/user.service';

const General = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
        getAllUsers()
      }, [])
      
      const getAllUsers = async () => {
       let response = await getAllProfileDetail();
       setUsers(response.data.data);
       console.log("===========",response);
      }

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
                  <div>
                    <table className="table table-hover">
                      <thead className="bg-dark-primary">
                        <tr>
                          <th  scope="col"
                          className="border-end-1 border-1 border-start-0 border-top-0 text-center px-3">ID</th>
                          <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Department</th>
                          <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">TL</th>
                          <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Employee</th>
                        </tr>
                      </thead>  
                      <tbody>
                           {
                           users.map((item, i) => (
                              <tr key={i}>
                                 <th className="border-end-1 border-1 text-center"> {i + 1}</th>
                                 <td className="border-end-1 border-1 text-center">{item.department}</td>
                                 <td className="border-end-1 border-1 text-center"></td>
                                 <td className="border-end-1 border-1 text-center"></td>
                              </tr>
                            ))
                           }
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

export default General;
