import React from "react";
import { getCourses, deleteCourse } from "../../services/userServices";
import { paginate } from "../../utils/paginate";
import Pagination from "../Pagination";
import { toast } from "react-toastify";

class AllCourses extends React.Component {
  state = {
    courses: [],
    currentPage: 1,
    pageSize: 5,
  };

  async componentDidMount() {
    const { data } = await getCourses();
    this.setState({ courses: data });
  }

  getPaginatedPost = () => {
    const { courses, currentPage, pageSize } = this.state;
    const paginatedCourse = paginate(courses, currentPage, pageSize);

    return {
      totalCourses: courses.length,
      paginatedCourse,
    };
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = async (courseId) => {
    const orginalCourses = this.state.courses;
    const courses = this.state.courses.filter((p) => p.id !== courseId);
    this.setState({ courses: courses });

    try {
      const { status } = await deleteCourse(courseId);
      if (status === 200) {
        toast.success("دوره با موفقیت حذف شد", {
          position: "bottom-right",
          closeOnClick: true,
        });
      }
    } catch (error) {
      if (error.respone && error.respone.status === 404) {
        toast.error("دوره با همچین شناسه ای یافت نشد");
      }
      this.setState({ courses: orginalCourses });
    }
  };

  handleRedirect = (course) => {
    this.props.history.push({
      pathname: "/admin/editCourse",
      course: course,
    });
  };

  render() {
    const { totalCourses, paginatedCourse } = this.getPaginatedPost();
    const { currentPage, pageSize } = this.state;

    let count = 1;
    return (
      <div className="bg-light m-3 p-4 border rounded">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان دوره</th>
              <th>زمان دوره</th>
              <th>قیمت دوره</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCourse.map((course) => (
              <tr key={course._id}>
                <th scope="row">{count++}</th>
                <td>{course.title}</td>
                <td>{course.time}</td>
                <td>{course.price}</td>
                <td>
                  <button
                    onClick={() => this.handleRedirect(course)}
                    className="btn btn-primary"
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(course._id)}
                    className="btn btn-danger"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalPosts={totalCourses}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default AllCourses;
