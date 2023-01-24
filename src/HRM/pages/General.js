import React, { useEffect, useState } from 'react'
import Sidebar from '../Shared/Sidebar';
import userService from '../../services/user.service';

const General = () => {

  const [content, setContent] = useState([])

/////////////////////// Get Department ////////////////////

  useEffect(() => {
    userService.generalDepartment().then(
      (response) => {
        console.log(response)
        setContent(response.data.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  ////////////// Count Employee ////////////////////
  
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const arrSum = content.reduce((acc, { totalCount }) => acc + totalCount, 0);
    setTotal(arrSum);
  }, [content]);

  return (
    <div className="custom-grid h-100vh">
      <Sidebar />
      <div className="bg-grey-color container-fluid">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-9 profile-badge bg-white p-4">
            <div>
              <h3 className="text-center mb-4">Welcome to Hr Department</h3>
            </div>
            <div className="leave-sec">
              <div className="row">
                <div className="col-12 col-md-12 mb-3">
                  <div>
                    <table className="table table-striped">
                      <thead className="bg-dark-primary">
                        <tr>
                          <th scope="col"
                            className="border-end-1 border-1 border-start-0 border-top-0 text-center px-3">Id</th>
                          <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Department</th>
                          <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Employee Count</th>

                        </tr>
                      </thead>
                      <tbody>
                        {
                          content.map((item, i) => (
                            <tr key={i}>
                              <th className="border-end-1 border-1 text-center"> {i + 1}</th>
                              <td className="border-end-1 border-1 text-center">{item._id.department}</td>
                              <td className="border-end-1 border-1 text-center">{item.totalCount}</td>
                            </tr>
                          ))
                        }
                        <tr>
                           <th className="border-end-1 border-1 text-center"></th>
                           <th className="border-end-1 border-1 text-center">Total Employee</th>
                           <th className="border-end-1 border-1 text-center">{total}</th>
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

export default General;
