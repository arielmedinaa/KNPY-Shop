import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutApp from '../layout/LayoutApp';
// import MainShopPage from '../Shop/MainShopPage';
// import ProductsShopPage from '../Shop/ProductsShopPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp />} />
        {/* <Route path="/shop" element={<MainShopPage />} />
        <Route path="/products" element={<ProductsShopPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;