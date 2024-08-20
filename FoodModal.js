import React from 'react';

const FoodModal = ({ isOpen, food, onClose, onSubmit }) => {
if (!isOpen) return null;

return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">{food.name}</h2>
        <p className="text-lg mb-4">Price: {food.price}</p>
        <p className="text-gray-600 mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-end space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg" onClick={onSubmit}>Confirm Order</button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg" onClick={onClose}>Close</button>
        </div>
    </div>
    </div>
);
};

export default FoodModal;
