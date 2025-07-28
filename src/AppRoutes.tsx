import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import BanksPage from './pages/Banks/BanksPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="banks" element={<BanksPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
