import React, { useState, useEffect } from "react";
import Sidebar from '../Shared/Sidebar'
import leaveicon from '../../assets/images/leave-request.png'
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import userService from "../../services/user.service";

const LeaveManagement = () => {
  const [content, setContent] = useState([]);
  const [addShow, setAddShow] = useState(false);

  const [openLeave, setOpenLeave] = useState({
    name: "",
    department: "",
    fromDate: "",
    toDate: "",
    reason: "",
    halfDay: ""
  });
  const [showRejectBox, setShowRejectBox] = useState(false);

  const handleAddShow = (item) => {
    setOpenLeave({
      name: item.name, id: item.id, department: item.department,
      fromDate: item.fromDate, toDate: item.toDate, reason: item.reason, halfDay: item.halfDay,
    })
    setAddShow(true)
  };
  const handleHideShow = () => setAddShow(false);

  const handleRejectShow = () => {
    setShowRejectBox(!showRejectBox.true)
  }

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
  return (
    <div className="custom-grid h-100vh">
      <Sidebar />
      <div className="bg-grey-color container-fluid ">
        <div className="text-center py-4">
          <span className=" ">HR Leave Section</span>
        </div>
        <table className="table table-hover bg-white ">
          <thead>
            <tr>
              <th scope="col" className="border-end-1 border-1 border-start-0 border-top-0 text-center px-3">#</th>
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
                  <b>{moment(openLeave.toDate).format("DD-MMM-YYYY")}</b>{" "}
                  <b>{openLeave.halfDay}</b>. Because of <b>{openLeave.reason}</b> I
                  will look forward for Consideration and
                  approval please.
                </p>
                <p>Thanks🙏</p>
                <p>With Best Regards</p>
              </div>
              <div className="mt-2 border-top Reject-leave" id="" style={{ display: showRejectBox ? 'block' : 'none' }}>
                <textarea class="form-control mb-3 mt-3" id="exampleFormControlTextarea1" rows="3" placeholder="Reason"></textarea>
                <Button className="btn border-0 bg-dark-primary py-1 px-4">Submit</Button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn border-0 bg-danger " onClick={handleRejectShow}>Reject</Button>
            <Button className="btn border-0 bg-dark-primary py-1 px-4">Approve</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}
export default LeaveManagement;