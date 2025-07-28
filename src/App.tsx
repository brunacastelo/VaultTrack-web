import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BanksPage from './pages/Banks/BanksPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BanksPage />} />
        {/* <Route path="banks" element={<BanksPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
