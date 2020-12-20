import React from "react";
import { getCourses } from "../services/userServices";

class Courses extends React.Component {
  state = {
    courses: [],
    currentPage: 1,
    pageSize: 5,
  };

  async componentDidMount() {
    const { data } = await getCourses();
    this.setState({ courses: data });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.courses.map((course) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-xs-6 card m-2"
              key={course._id}
            >
              <div className="card-img">
                <img
                  className="container-fluid img-thumbnail"
                  src={course.imageUrl}
                  alt="picture"
                />
              </div>

              <div clasName="card-title">
                <p className="text-center m-2">{course.title}</p>
              </div>

              <div className="card-footer">
                <span className="fa fa-clock-o m-1" />
                {course.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Courses;
