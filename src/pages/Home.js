import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to ProductStore</h1>
      <p>Mange and element products for your needs</p>
      <Link to="/products" className="btn">
        view products
      </Link>
    </div>
  );
};

export default Home;
