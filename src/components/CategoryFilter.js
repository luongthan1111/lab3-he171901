import React from 'react';
import { useSearchParams } from 'react-router-dom';

const CategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || '';

  const categories = [
    'Tất cả danh mục',
    'Điện thoại',
    'Laptop',
    'Máy tính bảng',
    'Phụ kiện'
  ];

  const handleCategoryChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    const selectedCategory = e.target.value;
    
    if (selectedCategory && selectedCategory !== 'Tất cả danh mục') {
      newParams.set('category', selectedCategory);
    } else {
      newParams.delete('category');
    }
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  return (
    <div className="category-filter">
      <label htmlFor="category-select">Danh mục:</label>
      <select
        id="category-select"
        value={currentCategory}
        onChange={handleCategoryChange}
        className="category-select"
      >
        {categories.map((category) => (
          <option key={category} value={category === 'Tất cả danh mục' ? '' : category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
