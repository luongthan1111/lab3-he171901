import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SortFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get('sort') || '';

  const sortOptions = [
    { value: '', label: 'Mặc định' },
    { value: 'price-asc', label: 'Giá: Thấp đến cao' },
    { value: 'price-desc', label: 'Giá: Cao đến thấp' },
    { value: 'name-asc', label: 'Tên: A đến Z' },
    { value: 'name-desc', label: 'Tên: Z đến A' }
  ];

  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    const selectedSort = e.target.value;
    
    if (selectedSort) {
      newParams.set('sort', selectedSort);
    } else {
      newParams.delete('sort');
    }
    setSearchParams(newParams);
  };

  return (
    <div className="sort-filter">
      <label htmlFor="sort-select">Sắp xếp theo:</label>
      <select
        id="sort-select"
        value={currentSort}
        onChange={handleSortChange}
        className="sort-select"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilter;
