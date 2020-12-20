import React from "react";

const Skill = () => {
  return (
    <div className="container-fluid">
      <div className="card m-2">
        <p className="card-title text-center m-2">مهارت های من</p>
        <div className="card-body">
          جاوا اسکریپت
          <div className="progress m-2">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "80%" }}
            />
          </div>
          ری اکت
          <div className="progress m-2">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: "80%" }}
            />
          </div>
          بوت استرپ
          <div className="progress m-2">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
