import React from "react";
import _ from "lodash";
import { editPost } from "../../services/userServices";
import { toast } from "react-toastify";

class EditPost extends React.Component {
  state = {
    _id: "",
    postTitle: "",
    postDate: "",
    postImageUrl: "",
    postContent: "",
    postTags: "",
    postLike: "",
  };

  componentDidMount() {
    const { post } = this.props.location;
    if (!post) return this.props.history.push("/admin/allPosts");

    this.setState({
      _id: post._id,
      postTitle: post.postTitle,
      postDate: post.postDate,
      postImageUrl: post.postImageUrl,
      postContent: post.postContent,
      postTags: post.postTags,
      postLike: post.postLike,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(this.state);
      const { status } = await editPost(JSON.parse(JSON.stringify(this.state)));
      if (status === 200) {
        toast.success("پست با موفقیت ویرایش شد", {
          position: "bottom-right",
          closeOnClick: true,
        });
      }
      this.props.history.push("/admin/allPosts");
    } catch (error) {
      console.log(error);
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
        className="form-group bg-light border rounded m-2 shadow p-5"
        onSubmit={this.handleSubmit}
      >
        <label className="col-md-4 control-label" htmlFor="txtTitle">
          عنوان پست
        </label>
        <input
          id="txtTitle"
          name="postTitle"
          type="text"
          placeholder="عنوان"
          className="form-control input-md m-2"
          value={this.state.postTitle}
          onChange={(e) => this.setState({ postTitle: e.target.value })}
        />
        <input
          id="txtImgUrl"
          name="postImgUrl"
          type="text"
          placholder="(لینک عکس الزامی است)"
          className="form-control input-md m-2"
          value={this.state.postImageUrl}
          onChange={(e) => this.setState({ postImageUrl: e.target.value })}
        />
        <textarea
          name="postContent"
          className="form-control m-2"
          rows="5"
          placeholder="متن پست"
          value={this.state.postContent}
          onChange={(e) => this.setState({ postContent: e.target.value })}
        />
        <input
          id="txtTags"
          name="postTags"
          type="text"
          placeholder="(برچسب ها را با (,) از هم جدا کنید"
          className="form-control input-md m-2"
          value={this.state.postTags}
          onChange={(e) =>
            this.setState({ postTags: _.split(e.target.value, ",") })
          }
        />

        <button className="btn btn-success m-5">ویرایش پست</button>
      </form>
    );
  }
}

export default EditPost;
