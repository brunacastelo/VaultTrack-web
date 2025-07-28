import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 shadow-md">
      <nav className="flex flex-col space-y-2">
        <Link to="/banks" className="hover:underline">Gerenciar Bancos</Link>
        <Link to="/investments" className="hover:underline">Gerenciar Investimentos</Link>
        <Link to="/summary" className="hover:underline">Resumo</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
