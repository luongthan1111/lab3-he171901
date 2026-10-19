import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail">
        <h1>Không tìm thấy sản phẩm</h1>
        <p>Sản phẩm với ID {id} không tồn tại.</p>
        <button onClick={() => navigate('/products')} className="btn">
          Quay lại Sản phẩm
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <h1>Chi tiết sản phẩm</h1>
      <div className="product-detail-card">
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Tên:</strong> {product.name}</p>
        <p><strong>Danh mục:</strong> {product.category}</p>
        <p><strong>Giá:</strong> {product.price.toLocaleString('vi-VN')} đ</p>
        <p><strong>Mô tả:</strong> {product.description}</p>
      </div>
      <button onClick={() => navigate('/products')} className="btn">
        Quay lại Sản phẩm
      </button>
    </div>
  );
};

export default ProductDetail;
