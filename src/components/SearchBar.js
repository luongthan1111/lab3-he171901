import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(searchParams.get('keyword') || '');

  const handleSearch = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchKeyword.trim()) {
      newParams.set('keyword', searchKeyword);
    } else {
      newParams.delete('keyword');
    }
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm:"
        value={searchKeyword}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="btn">Tìm kiếm</button>
    </form>
  );
};

export default SearchBar;
