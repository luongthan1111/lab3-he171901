import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p><strong>Danh mục:</strong> {product.category}</p>
      <p><strong>Giá:</strong> {product.price.toLocaleString('vi-VN')} đ</p>
      <Link to={`/products/${product.id}`} className="btn">
        Xem chi tiết
      </Link>
    </div>
  );
};

export default ProductItem;
