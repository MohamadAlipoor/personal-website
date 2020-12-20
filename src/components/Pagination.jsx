import React from "react";
import _ from "lodash";
const Pagination = ({
  currentPage,
  pageSize,
  totalPosts,
  handlePageChange,
}) => {
  const pageCount = Math.ceil(totalPosts / pageSize);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            className={currentPage === page ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
