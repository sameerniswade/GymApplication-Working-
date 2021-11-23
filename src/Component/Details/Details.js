import React from "react";
import "./Details.css";

const Details = ({ info, onRouteChange }) => {
  //   console.log("Details", info);
  return (
    <div className="Details">
      <div className="exit">
        <img
          onClick={() => onRouteChange("Home")}
          alt=""
          src="data:image/png;base64,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"
        ></img>
      </div>

      <div className="details-info">
        <div className="details-imgInfo">
          <div className="img-name">
            <img alt="" src={info[0].img} />
            <div className="img-name-text">
              <p className="name">{info[0].no}</p>
              <p className="name">{info[0].name}</p>
            </div>
            <p className="img-name-text-number">{info[0].phone}</p>
          </div>
        </div>

        <div className="details-imgInfo-extra flex-cl">
          <div className="details-imgInfo-extra-text flex-cl">
            <p>{info[0].aadhar}</p>
            <p>{info[0].email}</p>
            <p>{`${info[0].plan} Month`}</p>
          </div>
          <div className="details-imgInfo-extra-date flex-rw">
            <div className="start-date flex-cl">
              <p className="start-date-head">Start Date</p>
              <div className="start-date-body flex-rw">
                <p className="start-date-body-day">25</p>
                <div className="start-date-body-my flex-cl">
                  <p className="start-date-body-my-month">Mar</p>
                  <p className="start-date-body-my-year">2021</p>
                </div>
              </div>
            </div>

            <div className="end-date flex-cl">
              <p className="end-date-head">End Date</p>
              <div className="end-date-body flex-rw">
                <p className="end-date-body-day">28</p>
                <div className="end-date-body-my flex-cl">
                  <p className="end-date-body-my-month">Apr</p>
                  <p className="end-date-body-my-year">2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
