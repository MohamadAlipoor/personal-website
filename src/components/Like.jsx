import React from "react";
import { incPostLike } from "../services/userServices";

class Like extends React.Component {
  state = {
    post: this.props.post,
  };

  handleLike = async (post) => {
    const orginalPost = { ...post };
    const likedPost = { ...post };
    likedPost.postLike++;
    this.setState({ post: likedPost });

    try {
      const result = await incPostLike(post._id);
    } catch (error) {
      this.setState({ post: orginalPost });
    }
  };

  render() {
    const { post } = this.state;

    return (
      <div
        className="fa fa-heart float-left"
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => this.handleLike(post)}
      >
        <span className="badge-primary badge-pill m-1">{post.postLike}</span>
      </div>
    );
  }
}

export default Like;
