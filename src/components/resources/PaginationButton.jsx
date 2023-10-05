import React from "react";

const PaginationButton = ({ totalPages, currentPage, onPageChange }) => {
  const handlePaginationButtons = () => {
    const buttons = [];
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <li
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </button>
        </li>
      );
    }
    return buttons;
  };

  return (
    <ul className="pagination justify-content-center">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </button>
      </li>
      {handlePaginationButtons()}
      <li
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </button>
      </li>
    </ul>
  );
};

export default PaginationButton;
