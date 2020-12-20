import React from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./Pagination";
import { getPosts } from "../services/userServices";
import Like from "./Like";

class Posts extends React.Component {
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

  render() {
    const { totalPosts, paginatedPost } = this.getPaginatedPost();
    const { currentPage, pageSize } = this.state;
    if (totalPosts === 0) return <p>پستی برای نمایش وجود ندارد</p>;
    return (
      <React.Fragment>
        {paginatedPost.map((post) => (
          <div className="container-fluid" key={post._id}>
            <div className="card shadow-lg bg-light m-2">
              <article className="p-3">
                <div className="card-header">
                  <h3 className="card-title">
                    <a href="#">{post.postTitle}</a>
                  </h3>
                  <span className="card-subtitle">
                    <span className="fa fa-calender m-2" />
                    {post.postDate}
                  </span>
                  <img className="card-img" src={post.postImageUrl} />
                </div>
                <div className="card-body">
                  <p className="card-text">{post.postContent}</p>
                </div>
                <div className="card-footer">
                  <ul className="list-inline float-right">
                    <li className="list-inline-item">
                      <span className="fa fa-link m-1" />
                      برچسب ها :
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{post.postTags}</a>
                    </li>
                  </ul>
                  <Like post={post} />
                </div>
              </article>
            </div>
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalPosts={totalPosts}
          handlePageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Posts;
