import React, { useState, useEffect } from "react";
import Sidebar from "../Shared/Sidebar";
import Img from "../../assets/images/rahul.png";
import Button from "react-bootstrap/Button";
import AuthService from "../../services/auth.service";
import userService from "../../services/user.service";



function AttandanceMangement() {

  const [content, setContent] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    userService
      .getAttendanceAllUser()
      .then((response) => {
        console.log("get", response);
        setContent(response.data.data);
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

  // const itemList = [  ];

  // const [filteredList, setFilteredList] = new useState(itemList);

  // const filterBySearch = (event) => {
  //   const query = event.target.value;
  //   var updatedList = [...itemList];
  //   updatedList = updatedList.filter((item) => {
  //     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   setFilteredList(updatedList);
  // };
  
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file.raw);

    userService.attendanceUpload(formData).then((response) => {
      console.log("========================", response);
    }).catch((error) => {
      setErr(error);
    })
  };


  const [file, setFile] = useState({ preview: "", raw: "" });

  const handleSheet = (e) => {
    console.log("------------------", e.target);
    const data = e.target.files[0];
    setFile(data);

    if (e.target.files.length) {
      setFile({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div>
      <div className="bg-grey-color custom-grid h-100">
        <Sidebar />
        <div className="card p-5">
          <div className="header">
            <h2 >Attendance Sheet</h2>
          </div>
          <div className="body overflow-auto">
            <div className="example-container">
              <form

                noValidate=""
                ng-reflect-form="[object Object]"
                className="ng-untouched ng-pristine ng-valid"
              >
                <div className="row mb-3">
                  <div className="col-3">
                    <div className="search-text">Choose start date:</div>
                    <input className="w-100 custom_input form-control" type="date" />
                  </div>
                  <div className="col-3">
                    <div className="search-text">Choose end date:</div>
                    <input className="w-100 custom_input form-control" type="date" />
                  </div>
                  <div className="col-3">
                    <div className="search-text">Search:</div>
                    <Button
                      className="btn bg-dark-primary"
                      type="Button"
                    >
                      Search
                    </Button>

                  </div>
                  <div className="col-3">
                    <div className="search-text">Choose File</div>
                    <input className="w-100 custom_input form-control" id="excel-file-id"
                      accept=".xls,.xlsx" type="file" onChange={handleSheet} />
                    <Button
                      className="btn bg-dark-primary"
                      type="Button"
                      onClick={handleUpload}
                    >
                      Sheet Upload
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <table

              className="table table-bordered border-bottom"
            >
              <thead >
                <tr role="row">
                  <th className="border-bottom-0">
                    {" "}
                    Employee Name
                  </th>
                  <th className="border-bottom-0">
                    {" "}
                    Designation
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    1
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    2
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    3
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    4
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    5
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    6
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    7
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    8
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    9
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    10
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    11
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    12
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    13
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    14
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    15
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    16
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    17
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    18
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    19
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    20
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    21
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    22
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    23
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    24
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    25
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    26
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    27
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    28
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    29
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    30
                  </th>
                  <th

                    className="border-bottom-0 cell-dimention"
                  >
                    31
                  </th>
                </tr>
              </thead>
              {
                content &&
                content.map((data, i) => (
                  <tbody >
                    <tr key={i} >
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >{data.name}</h6>
                          </div>
                        </div>
                      </td>
                      <div className="mt-sm-2">
                        <h6 >{data.designation}</h6>
                      </div>
                      {data.attendance.map((item, index) =>
                        <td key={index}>
                          {item.status}
                        </td>
                      )}
                      {/*<td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td> */}
                    </tr>
                    {/* <tr className="even">
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >Angelica Ramos</h6>
                          </div>
                        </div>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                    </tr> */}
                    {/* <tr className="odd">
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >Jens Brincker</h6>
                          </div>
                        </div>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fas fa-adjust col-orange position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fas fa-adjust col-orange position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fas fa-adjust col-orange position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                    </tr> */}
                    {/* <tr className="even">
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >Mark Hay</h6>
                          </div>
                        </div>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fas fa-adjust col-orange position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                    </tr> */}
                    {/* <tr className="odd">
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >Cara Stevens</h6>
                          </div>
                        </div>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fas fa-adjust col-orange position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                    </tr> */}
                    {/* <tr className="even">
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >John Doe</h6>
                          </div>
                        </div>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fas fa-adjust col-orange position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                    </tr> */}
                    {/* <tr className="odd">
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >Ashton Cox</h6>
                          </div>
                        </div>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fas fa-adjust col-orange position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-times-circle text-danger position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                    </tr> */}
                    {/* <tr className="even">
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >Angelica Ramos</h6>
                          </div>
                        </div>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fas fa-adjust col-orange position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                    </tr> */}
                    {/* <tr className="odd">
                      <td >
                        <div className="d-flex">
                          <span className="me-2 attnd-user">
                            <img

                              alt="image"
                              src={Img}
                              className="rounded-circle"
                            />
                          </span>
                          <div className="mt-sm-2">
                            <h6 >Airi Satou</h6>
                          </div>
                        </div>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>{" "}
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>{" "}
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>{" "}
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td

                        className="attendance-icon position-relative"
                      >
                        <span

                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td
                        className="attendance-icon position-relative"
                      >
                        <span
                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td
                        className="attendance-icon position-relative"
                      >
                        <span
                          className="fa fa-star text-warning position-absolute"
                        ></span>
                      </td>
                      <td
                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td
                        className="attendance-icon position-relative"
                      >
                        <span
                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td
                        className="attendance-icon position-relative"
                      >
                        <span
                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td
                        className="attendance-icon position-relative"
                      >
                        <span
                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                      <td
                        className="attendance-icon position-relative"
                      >
                        <span

                          className="far fa-check-circle text-success position-absolute"
                        ></span>
                      </td>
                    </tr> */}
                  </tbody>
                ))
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttandanceMangement