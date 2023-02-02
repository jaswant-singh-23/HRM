import React, { useState } from "react";
import Calendar from "calendar-reactjs";
import Sidebar from "../shared/components/Sidebar";
import DatePicker from "react-datepicker";

const Attendance = () => {
  const [date, setDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState("2023-01");

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
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
          defaultValue={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Calendar
          onCellClick={(val) => console.log(val)}
          month={{
            date: date,
            days: [
              { date: `${selectedMonth}-01`, status: "vacation" },
              { date: `${selectedMonth}-02`, status: "vacation" },
              { date: `${selectedMonth}-03`, status: "present" },
              { date: `${selectedMonth}-04`, status: "present" },
              { date: `${selectedMonth}-05`, status: "present" },
              { date: `${selectedMonth}-06`, status: "present" },
              { date: `${selectedMonth}-07`, status: "present" },
              { date: `${selectedMonth}-08`, status: "vacation" },
              { date: `${selectedMonth}-09`, status: "vacation" },
              { date: `${selectedMonth}-10`, status: "present" },
              { date: `${selectedMonth}-11`, status: "present" },
              { date: `${selectedMonth}-12`, status: "present" },
              { date: `${selectedMonth}-13`, status: "present" },
              { date: `${selectedMonth}-14`, status: "present" },
              { date: `${selectedMonth}-15`, status: "vacation" },
              { date: `${selectedMonth}-16`, status: "vacation" },
              { date: `${selectedMonth}-17`, status: "absent" },
              { date: `${selectedMonth}-18`, status: "leave" },
              { date: `${selectedMonth}-19`, status: "leave" },
              { date: `${selectedMonth}-20`, status: "leave" },
              { date: `${selectedMonth}-21`, status: "leave" },
              { date: `${selectedMonth}-22`, status: "vacation" },
              { date: `${selectedMonth}-23`, status: "vacation" },
              { date: `${selectedMonth}-24`, status: "present" },
              { date: `${selectedMonth}-25`, status: "present" },
              { date: `${selectedMonth}-26`, status: "present" },
              { date: `${selectedMonth}-27`, status: "present" },
              { date: `${selectedMonth}-28`, status: "present" },
              { date: `${selectedMonth}-29`, status: "vacation" },
              { date: `${selectedMonth}-30`, status: "vacation" },
              { date: `${selectedMonth}-31`, status: "present" },
            ],
          }}
          emptyCellStyle={{ backgroundColor: "white" }}
          status={{
            present: {
              labelStyle: {
                backgroundColor: "#14c314",
                color: "black",
                borderRadius: "8px",
                padding: "0px 0px 3px 0px",
              },
            },
            absent: {
              labelStyle: {
                backgroundColor: "red",
                color: "black",
                borderRadius: "8px",
                padding: "0px 0px 3px 0px",
              },
            },
            vacation: {
              labelStyle: {
                backgroundColor: "#78d6f1",
                color: "black",
                borderRadius: "8px",
                padding: "0px 0px 3px 0px",
              },
            },
            leave: {
              labelStyle: {
                backgroundColor: "orange",
                color: "black",
                borderRadius: "8px",
                padding: "0px 0px 3px 0px",
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default Attendance