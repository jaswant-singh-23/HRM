import React, { useState } from "react";
import Sidebar from "../Shared/Sidebar";
import Img from "../../assets/images/rahul.png";
import Button from "react-bootstrap/Button";
import AuthService from "../../services/auth.service";



function AttandanceMangement() {

  const [content, setContent] = useState([]);


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
    console.log("========================", file);
    const formData = new FormData();
    formData.append("file", file.raw);
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
  console.log("------------------", file);

  return (

    <div>
      <div className="bg-grey-color custom-grid h-100">
        <Sidebar />
        <div _ngcontent-mcl-c407="" className="card p-5">
          <div _ngcontent-mcl-c407="" className="header">
            <h2 _ngcontent-mcl-c407="">Attendance Sheet</h2>
          </div>
          <div _ngcontent-mcl-c407="" className="body overflow-auto">
            <div _ngcontent-mcl-c407="" className="example-container">
              <form
                _ngcontent-mcl-c407=""
                noValidate=""
                ng-reflect-form="[object Object]"
                className="ng-untouched ng-pristine ng-valid"
              >
                <div _ngcontent-mcl-c407="" className="row mb-3">
                  <div _ngcontent-mcl-c407="" className="col-3">
                    <div className="search-text">Choose start date:</div>
                    <input className="w-100 custom_input form-control" type="date" />
                  </div>
                  <div _ngcontent-mcl-c407="" className="col-3">
                    <div className="search-text">Choose end date:</div>
                    <input className="w-100 custom_input form-control" type="date" />
                  </div>
                  <div _ngcontent-mcl-c407="" className="col-3">
                      <div className="search-text">Search:</div>
                      <Button
                      className="btn bg-dark-primary"
                      type="Button"
                    >
                      Search
                    </Button>
                    
                  </div>
                  <div _ngcontent-mcl-c407="" className="col-3">
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
              _ngcontent-mcl-c407=""
              className="table table-bordered border-bottom"
            >
              <thead _ngcontent-mcl-c407="">
                <tr _ngcontent-mcl-c407="" role="row">
                  <th _ngcontent-mcl-c407="" className="border-bottom-0">
                    {" "}
                    Employee Name
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    1
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    2
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    3
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    4
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    5
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    6
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    7
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    8
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    9
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    10
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    11
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    12
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    13
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    14
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    15
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    16
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    17
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    18
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    19
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    20
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    21
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    22
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    23
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    24
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    25
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    26
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    27
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    28
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    29
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    30
                  </th>
                  <th
                    _ngcontent-mcl-c407=""
                    className="border-bottom-0 cell-dimention"
                  >
                    31
                  </th>
                </tr>
              </thead>
              <tbody _ngcontent-mcl-c407="">
                <tr _ngcontent-mcl-c407="">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">Jacob Ryan</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
                <tr _ngcontent-mcl-c407="" className="even">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">Angelica Ramos</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
                <tr _ngcontent-mcl-c407="" className="odd">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">Jens Brincker</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fas fa-adjust col-orange position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fas fa-adjust col-orange position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fas fa-adjust col-orange position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
                <tr _ngcontent-mcl-c407="" className="even">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">Mark Hay</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fas fa-adjust col-orange position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
                <tr _ngcontent-mcl-c407="" className="odd">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">Cara Stevens</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fas fa-adjust col-orange position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
                <tr _ngcontent-mcl-c407="" className="even">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">John Doe</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fas fa-adjust col-orange position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
                <tr _ngcontent-mcl-c407="" className="odd">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">Ashton Cox</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fas fa-adjust col-orange position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-times-circle text-danger position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
                <tr _ngcontent-mcl-c407="" className="even">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">Angelica Ramos</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fas fa-adjust col-orange position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
                <tr _ngcontent-mcl-c407="" className="odd">
                  <td _ngcontent-mcl-c407="">
                    <div _ngcontent-mcl-c407="" className="d-flex">
                      <span _ngcontent-mcl-c407="" className="me-2 attnd-user">
                        <img
                          _ngcontent-mcl-c407=""
                          alt="image"
                          src={Img}
                          className="rounded-circle"
                        />
                      </span>
                      <div _ngcontent-mcl-c407="" className="mt-sm-2">
                        <h6 _ngcontent-mcl-c407="">Airi Satou</h6>
                      </div>
                    </div>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>{" "}
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>{" "}
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>{" "}
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="fa fa-star text-warning position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                  <td
                    _ngcontent-mcl-c407=""
                    className="attendance-icon position-relative"
                  >
                    <span
                      _ngcontent-mcl-c407=""
                      className="far fa-check-circle text-success position-absolute"
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttandanceMangement