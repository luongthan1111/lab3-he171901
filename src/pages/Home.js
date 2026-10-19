import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Chào mừng đến với Product Management</h1>
      <p>Khám phá và quản lý danh mục sản phẩm của chúng tôi</p>
      <Link to="/products" className="btn">
        Xem Sản phẩm
      </Link>
    </div>
  );
};

export default Home;
