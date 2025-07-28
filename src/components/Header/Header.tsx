import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">VaultTrack</h1>
      <nav>
        <span className="text-sm">Menu de navegação</span>
      </nav>
    </header>
  );
};

export default Header;
