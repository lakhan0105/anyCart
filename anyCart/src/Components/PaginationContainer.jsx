import React from "react";
import {
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

function PaginationContainer() {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pagesArray = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  // handlePages
  function handlePages(pageNum) {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNum);
    console.log(searchParams);
    navigate(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <div className="pagination-container">
      {/* PREV */}
      <button
        onClick={() => {
          handlePages("prev");
        }}
      >
        prev
      </button>

      {pagesArray.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            onClick={() => {
              handlePages(pageNumber);
            }}
            className={`btn pag-btn ${
              pageNumber === page ? "active-pg-btn" : ""
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* NEXT */}
      <button
        onClick={() => {
          handlePages("next");
        }}
      >
        next
      </button>
    </div>
  );
}

export default PaginationContainer;
