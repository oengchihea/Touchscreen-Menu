// Menu.js
import React from 'react';

const Menu = ({ onAddFood }) => {
  const menuItems = [
  ];

  return (
    <div className="p-4 bg-gray-700">
      <h1 className="text-3xl text-white mb-8">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-gray-600 p-4 rounded-lg">
            <h2 className="text-xl text-white mb-2">{item.name}</h2>
            <p className="text-orange-500 text-lg mb-4">{item.price}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg" onClick={() => onAddFood(item)}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
