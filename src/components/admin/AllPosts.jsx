import React from "react";
import { getPosts, deletePost } from "../../services/userServices";
import { paginate } from "../../utils/paginate";
import Pagination from "../Pagination";
import { toast } from "react-toastify";

class AllPosts extends React.Component {
  state = {
    posts: [],
    currentPage: 1,
    pageSize: 5,
  };

  async componentDidMount() {
    const { data } = await getPosts();
    this.setState({ posts: data });
  }

  getPaginatedPost = () => {
    const { posts, currentPage, pageSize } = this.state;
    const paginatedPost = paginate(posts, currentPage, pageSize);

    return {
      totalPosts: posts.length,
      paginatedPost,
    };
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = async (postId) => {
    const orginalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== postId);
    this.setState(posts);

    try {
      const { status } = await deletePost(postId);
      if (status === 200) {
        toast.success("پست با موفقیت حذف شد", {
          position: "bottom-right",
          closeOnClick: true,
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("پستی با این شناسه یافت نشد", {
          position: "bottom-right",
          closeOnClick: true,
        });
      }
      this.setState({ posts: orginalPosts });
    }
  };

  handleRedirect = (post) => {
    this.props.history.push({
      pathname: "/admin/editPost",
      post: post,
    });
  };

  render() {
    const { totalPosts, paginatedPost } = this.getPaginatedPost();
    const { currentPage, pageSize } = this.state;
    let count = 1;
    return (
      <div className="bg-light m-3 p-4 border rounded">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان پست</th>
              <th>تاریخ انتشار</th>
              <th>تعداد لایک</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPost.map((post) => (
              <tr key={post._id}>
                <th scope="row">{count++}</th>
                <td>{post.postTitle}</td>
                <td>{post.postDate}</td>
                <td>{post.Like}</td>
                <td>
                  <button
                    onClick={() => this.handleRedirect(post)}
                    className="btn btn-primary"
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(post._id)}
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
          totalPosts={totalPosts}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default AllPosts;
