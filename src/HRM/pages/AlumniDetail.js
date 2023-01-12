import React, { useEffect, useState } from "react";
import Sidebar from "../Shared/Sidebar";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/images/edit-icon.png";
import TrashIcon from "../../assets/images/trash.png";
import userService from "../../services/user.service";
import Toast from "../Shared/Toast";
import RestoreIcon from "../../assets/images/restore.png";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";

const AlumniDetail = () => {
  // const [users, setUsers] = useState([]);
  const [content, setContent] = useState([]);

  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  // const getAllUsers = async () => {
  //   let response = await AlumniView();
  //   setUsers(response.data.data);
  //   console.log("===========", response);
  // };


  useEffect(() => {
    userService
      .AlumniView()
      .then((response) => {
        console.log(response)
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

  const handleDelete = (data) => {
    swal({
      title: "Are you sure?",
      text: "you want to delete your account?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const itemId = { id: data };
        console.log(itemId);
        userService.AlumniDeleteAccount(itemId).then(
          (response) => {
            console.log(response);
            swal("Poof! Your account is deleted successsfully", {
              icon: "success",
            });
            // window.location.reload();
          },
          (error) => {
            const _content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
            setContent(_content);
          }
        );
      }
    });
  };
  const handleRestore = (data) => {
    swal({
      title: "Are you sure?",
      text: "you want to restore your account?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const itemId = { id: data };
        console.log(itemId);
        userService.AlumniRestoreAccount(itemId).then(
          (response) => {
            console.log(response);
            swal("Poof! Your account is restored successsfully", {
              icon: "success",
            });
            // Toast.success(response.data.message);
            window.location.reload();
          },
          (error) => {
            const _content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
            setContent(_content);
          }
        );
      }
    });
  };

  // const ConfirmBox =()=>{

  // }

  return (
    <div className="custom-grid h-100vh">
      <Sidebar />
      <div className="bg-grey-color container-fluid">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-10 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-8 profile-badge bg-white p-4">
            <div>
              <h3 className="text-center mb-4">Alumni Details</h3>
            </div>
            <div className="leave-sec">
              <div className="row">
                <div className="col-12 col-md-12 mb-3">
                  <div>
                    <table className="table table-striped">
                      <thead className="bg-dark-primary">
                        <tr>
                          <th scope="col" className=" text-center">
                            ID
                          </th>
                          <th scope="col" className=" text-center">
                            Alumni Name
                          </th>
                          <th scope="col" className=" text-center">
                            Department
                          </th>
                          <th scope="col" className=" text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(content == null || content.length <= 0) && (
                          <tr><td colSpan={4}>
                            <div className="text-center"><p>Records not yet</p></div>
                          </td>
                          </tr>
                        )}
                        
                        {content.map((item, i) => (
                            <tr key={i}>
                              <td className="border-end-1 border-1 text-center">
                                {" "}
                                {i + 1}
                              </td>
                              <td className="border-end-1 border-1 text-center">
                                {item.name}
                              </td>
                              <td className="border-end-1 border-1 text-center">
                                {item.department}
                              </td>
                              <td className="border-end-1 border-1 text-center">
                                <div className="d-flex align-items-center justify-content-center">
                                  <Link
                                    to={"/alumni-detail"}
                                    className="text-light text-decoration-none"
                                  >
                                    <span className="ms-2 cursor-pointer d-flex">
                                      <img
                                        src={RestoreIcon}
                                        onClick={() => {
                                          handleRestore(item.username);
                                        }}
                                        alt=""
                                        width="25px"
                                      />
                                    </span>
                                  </Link>
                                  <span className="ms-2 cursor-pointer preview">
                                    <img
                                      src={TrashIcon}
                                      onClick={() => {
                                        handleDelete(item.username);
                                      }}
                                      alt=""
                                      width="16px"
                                    />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
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
