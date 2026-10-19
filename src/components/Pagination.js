import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ totalPages, currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', newPage.toString());
    setSearchParams(newParams);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="btn nav-btn"
      >
        Trước
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`page-number ${currentPage === number ? 'active' : ''}`}
        >
          [{number}]
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="btn nav-btn"
      >
        Tiếp
      </button>
    </div>
  );
};

export default Pagination;
