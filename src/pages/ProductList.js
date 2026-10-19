import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const productsPerPage = 3;

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

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchesKeyword = product.name.toLowerCase().includes(keyword.toLowerCase());
      const matchesCategory = !category || product.category === category;
      return matchesKeyword && matchesCategory;
    });

    // Apply sorting
    if (sort) {
      result = [...result].sort((a, b) => {
        switch (sort) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
    }

    return result;
  }, [keyword, category, sort]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="product-list">
      <h1>Danh sách sản phẩm</h1>
      
      <div className="filters">
        <SearchBar />
        <CategoryFilter />
        <div className="sort-filter">
          <label htmlFor="sort-select">Sắp xếp theo:</label>
          <select
            id="sort-select"
            value={sort}
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
      </div>

      <div className="total-products">
        <p>Tổng số sản phẩm: {filteredProducts.length}</p>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-products">Không có sản phẩm nào.</p>
      ) : (
        <>
          <div className="products-grid">
            {displayedProducts.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </>
      )}
    </div>
  );
};

export default ProductList;
