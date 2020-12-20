import React from "react";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row m-2 bg-light border rounded shadow">
        <div className="col-9">
          <div className="card bg-light shadow mx-auto mt-5">
            <p className="card-title m-2">محمدرضا محمدعلی پور</p>
            <p className="card-body">علاقه من برنامه نویسی وب میباشد</p>
          </div>
        </div>
        <div className="col-3">
          <img
            className="img-fluid rounded m-2"
            src="https://www.via.placeholder.com/250x400"
            alt="picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
