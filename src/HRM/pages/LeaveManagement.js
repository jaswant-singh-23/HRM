import React, { useState, useEffect } from "react";
import Sidebar from '../Shared/Sidebar'
import leaveicon from '../../assets/images/leave-request.png'
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import userService from "../../services/user.service";

const LeaveManagement = () => {
  const [content, setContent] = useState([]);
  const [addShow, setAddShow] = useState(false);

  const [rejectReason, setRejectReason] = useState();
  
  const [openLeave, setOpenLeave] = useState({
    name: "",
    department: "",
    fromDate: "",
    toDate: "",
    reason: "",
    halfDay: "",
    username: "",
    rejectReason: "",
  });
  const [showRejectBox, setShowRejectBox] = useState(false);

  const handleRejectReason = (e) => {
    let rejectReason = e.target.value;
    setRejectReason(rejectReason);
  }

  const handleAddShow = (items) => {
    setOpenLeave({
      name: items.name, id: items.id, department: items.department, username: items.username, rejectReason: items.rejectReason,
      fromDate: items.fromDate, toDate: items.toDate, reason: items.reason, halfDay: items.halfDay,
    })
    setAddShow(true)
  };
  const handleHideShow = () => setAddShow(false);

  const handleRejectShow = () => {
    setShowRejectBox(!showRejectBox.true)
  }

  /////get leave detail/////

  useEffect(() => {
    userService
      .getLeaveDetail()
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

  /////reply leave//////

  const handleApproved = (items) => {
    const data = {
      name: items.name,
      username: items.username,
      department: items.department,
      leaveStatus: "Approved",
      rejectReason: ""
    }
    userService
      .leaveReply(data)
      .then((response) => {
        console.log(response)
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
  };

  ///////leave reject///////

  const handleRejected = (items) => {
    const data = {
      name: items.name,
      username: items.username,
      department: items.department,
      leaveStatus: "Rejected",
      rejectReason: rejectReason,
    }

    userService
      .leaveReply(data)
      .then((response) => {
        console.log(response)
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
  };

  return (
    <div className="custom-grid h-100vh">
      <Sidebar />
      <div className="bg-grey-color container-fluid ">
        <div className="text-center py-4">
          <h2 className=" ">HR Leave Section</h2>
        </div>
        <table className="table table-hover bg-white table table-striped">
          <thead className="bg-dark-primary">
            <tr>
              <th scope="col" className="border-end-1 border-1 border-start-0 border-top-0 text-center px-3">Id</th>
              <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Name</th>
              <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Department</th>
              <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">View Leave</th>
            </tr>
          </thead>
          <tbody>
            {
              content.map((items, i) =>
              (
                <tr key={i} >
                  <th scope="row" className="border-end-1 border-start-0 border-1 text-center px-3">{i + 1}</th>
                  <td className="border-end-1 border-1 text-center">{items.name}</td>
                  <td className="border-end-1 border-1 text-center">{items.department}</td>
                  <td className="border-end-1 border-1 text-center"><img src={leaveicon} onClick={() => { handleAddShow(items) }} width="20" className="m-auto cursor-pointer" /></td>
                </tr>
              )
              )
            }
          </tbody>
        </table>

        <Modal
          centered
          show={addShow}
          onHide={handleHideShow}
        >
          <Modal.Header closeButton>
            <Modal.Title>Leave Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <p className="">Dear Sir/Mam,</p>
                <p className="mb-2">
                  I am <b>{openLeave.name}</b> From
                  <b>{openLeave.department}</b> Department want
                  leave from{" "}
                  <b>
                    {moment(openLeave.fromDate).format("DD-MMM-YYYY")}
                  </b>{" "}
                  to{" "}
                  <b>{moment(openLeave.toDate).format("DD-MMM-YYYY")}</b>
                  <b>{openLeave.halfDay}</b>. Because of <b>{openLeave.reason}</b> I
                  will look forward for Consideration and
                  approval please.
                </p>
                <p>Thanks🙏</p>
                <p>With Best Regards</p>
              </div>
              <div className="mt-2 border-top" id="" style={{ display: showRejectBox ? 'block' : 'none' }}>
                <textarea class="form-control mb-3 mt-3" value={rejectReason} onChange={handleRejectReason} id="exampleFormControlTextarea1" rows="3" placeholder="Reason"></textarea>
                <Button className="btn border-0 bg-dark-primary py-1 px-4" onClick={() => { handleRejected(openLeave) }}>Submit</Button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn border-0 bg-danger " onClick={handleRejectShow}>Reject</Button>
            <Button className="btn border-0 bg-dark-primary py-1 px-4" onClick={() => { handleApproved(openLeave) }}>Approve</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}
export default LeaveManagement;