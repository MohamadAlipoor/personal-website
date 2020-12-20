import React from "react";
import { editCourse } from "../../services/userServices";
import { toast } from "react-toastify";

class EditCourse extends React.Component {
  state = {
    _id: "",
    title: "",
    time: "",
    price: "",
    imageUrl: "",
  };

  componentDidMount() {
    const { course } = this.props.location;
    if (!course) {
      this.props.history.push("/admin/allCourses");
    }
    this.setState({
      _id: course._id,
      title: course.title,
      time: course.time,
      price: course.price,
      imageUrl: course.imageUrl,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status } = await editCourse(
        JSON.parse(JSON.stringify(this.state))
      );
      if (status === 200) {
        toast.success("دوره با موفقیت ویرایش شد", {
          position: "bottom-right",
          closeOnClick: true,
        });
      }
      this.props.history.push("/admin/allCourses/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("لطفا کلیه موارد را پر کنید", {
          position: "bottom-right",
          closeOnClick: true,
        });
      }
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-group bg-light border rounded m-2 shadow p-5"
      >
        <label className="col-md-4 control-label m-2" for="txtTitle">
          عنوان دوره
        </label>
        <input
          id="txtTitle"
          name="textinput"
          type="text"
          placeholder="عنوان دوره"
          className="form-control input-md m-2"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <label className="col-md-4 control-label m-2" for="txtCourseTime">
          زمان دوره
        </label>
        <input
          id="txtCourseTime"
          name="txtinput"
          type="text"
          placeholder="ساعت:دقیقه:ثانیه"
          className="form-control w-25 m-2"
          value={this.state.time}
          onChange={(e) => this.setState({ time: e.target.value })}
        />
        <label className="col-md-4 control-label m-2" for="txtCoursePrice">
          قیمت دوره
        </label>
        <input
          id="txtCoursePrice"
          name="txtinput"
          type="text"
          placeholder="قیمت به تومان"
          className="form-control w-25 m-2"
          value={this.state.price}
          onChange={(e) => this.setState({ price: e.target.value })}
        />
        <input
          id="txtImageUrl"
          name="txtinput"
          type="text"
          placeholder="لینک عکس"
          className="form-control m-2"
          value={this.state.imageUrl}
          onChange={(e) => this.setState({ imageUrl: e.target.value })}
        />

        <button className="btn btn-success m-5">ویرایش دوره</button>
      </form>
    );
  }
}

export default EditCourse;
