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

  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="btn"
      >
        Trước
      </button>
      <span>Trang: {currentPage}/{totalPages}</span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="btn"
      >
        Tiếp
      </button>
    </div>
  );
};

export default Pagination;
