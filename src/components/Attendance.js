import React, { useState, useEffect } from "react";
import Calendar from "calendar-reactjs";
import Sidebar from "../shared/components/Sidebar";
import DatePicker from "react-datepicker";
import userService from "../services/user.service";
import moment from "moment";

const Attendance = () => {
  const [date, setDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("2023-01");
  const [content, setContent] = useState();

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  useEffect(() => {
    setTimeout(() => {
      userService
        .getParticularUser()
        .then((response) => {
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
    }, 1000);
  }, []);

  return (
    <div className="bg-grey-color custom-grid h-100  ">
      <Sidebar />
      <div className="attendance-clndr d-flex flex-column justify-content-center align-items-center py-5 ">
        <h2 className="text-white mb-3">Attendence Sheet</h2>
        {/* <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen}
        /> */}
        <input
          type={"date"}
          name="date"
          // defaultValue={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <h3 className="text-white my-4">
          {moment(selectedMonth).format("MMMM, YYYY")}
        </h3>
        {content && content.attendance.length >= 1 && (
          <Calendar
            onCellClick={(val) => console.log(val)}
            month={{
              date: date,
              days: content.attendance,
            }}
            emptyCellStyle={{ backgroundColor: "white" }}
            status={{
              Present: {
                labelStyle: {
                  backgroundColor: "#14c314",
                  color: "black",
                  borderRadius: "8px",
                  padding: "0px 0px 3px 0px",
                },
              },
              Absent: {
                labelStyle: {
                  backgroundColor: "red",
                  color: "black",
                  borderRadius: "8px",
                  padding: "0px 0px 3px 0px",
                },
              },
              Vacation: {
                labelStyle: {
                  backgroundColor: "#78d6f1",
                  color: "black",
                  borderRadius: "8px",
                  padding: "0px 0px 3px 0px",
                },
              },
              Leave: {
                labelStyle: {
                  backgroundColor: "orange",
                  color: "black",
                  borderRadius: "8px",
                  padding: "0px 0px 3px 0px",
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Attendance;
