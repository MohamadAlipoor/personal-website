import React from "react";

const UserInfo = () => {
  return (
    <div className="text-center">
      <img
        src="https://www.via.placeholder.com/200x200"
        className="img-thumbnail img-fluid"
        alt="picture"
      />
      <span className="card bg-danger shadow user-fullname">
        محمدرضا محمدعلی پور
      </span>
      <p>مهندس کامپیوتر و برنامه نویس وب</p>
    </div>
  );
};

export default UserInfo;
