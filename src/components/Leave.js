import React from "react";

const Leave = () => {
  return (
    <div className="bg-grey-color">
      <div className="leave-page">
        <div className="p-4 ">
          <form>
            <h1 className="text-center">On Leave</h1>
            <div>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control inp"
                />

              </div>

              <div className="form-group">
                <label htmlFor="email">Days</label>
                <select className="form-select inp" aria-label="Default select example">
                  <option selected> Select Days</option>
                  <option value="1">Full Day</option>
                  <option value="2">Half Day</option>
                  <option value="3">Two Days</option>
                </select>

              </div>
              <div className="form-group">
                <label htmlFor="password">Subject</label>
                <input
                  type="password"
                  name="password"
                  className="form-control inp"

                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Message</label>
                <textarea
                  type="password"
                  name="password"
                  className="form-control inp"
                  placeholder="Reason"

                />
              </div>


              <div className="form-group">
                <button className="btn bg-dark-color text-white btn-block">Submit</button>
              </div>
            </div>

            {/* {message && (
              <div className="form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Leave;
