import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(searchParams.get('keyword') || '');

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    if (searchKeyword.trim()) {
      newParams.set('keyword', searchKeyword);
    } else {
      newParams.delete('keyword');
    }
    newParams.set('page', '1');
    setSearchParams(newParams);
  }, [searchKeyword]);

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm:"
        value={searchKeyword}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
