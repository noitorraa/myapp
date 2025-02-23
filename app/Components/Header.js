import React from "react";

const Header = ({ title, onBack }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {onBack && <button onClick={onBack} className="text-lg">← Назад</button>}
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
