"use client";


import React, { useState } from 'react';
import { scroller, Element as ScrollElement } from 'react-scroll'; // Alias Element to avoid conflicts
import Menu from '../components/Menu.js';
import FoodModal from '../components/FoodModal';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
import cartIcon from '../public/assets/cart-icon.png';
import chickenImg from '../public/assets/chicken.jpg';
import StackImg from '../public/assets/stack.jpg';
import PVKImg from '../public/assets/PVK.jpg';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  const handleSubmitOrder = () => {
    console.log('Order submitted:', selectedFood);
    setIsModalOpen(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
    scroller.scrollTo('menu-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const bestSellers = [
    { id: 1, name: 'Chicken Nugget', image: '/assets/images/chicken.jpg', price: '$10' },
  ];

  return (
    <div className="font-roboto overflow-auto bg-primary tex6 top-auto bottom-100">
      <header className="fixed top-0 w-full z-50 bg-primary border-b border-accent py-4 px-8 flex justify-between items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <Image src={cartIcon} alt="Cart" width={30} height={40} className="mt-2 mr-12" />
      </header>

      <div className={`text-center flex h-screen bg-primary rounded-lg relative ${showMenu ? 'transform -translate-y-full opacity-0 transition-transform duration-800' : ''}`}>
        <div className="flex-1 overflow-hidden">
          <Image src={PVKImg} alt="Pine View Kitchen" objectFit="cover" width={20000} height={10000}/>
        </div>
        <div className="flex-1 flex flex-col justify-center items-start px-1 bg-primary relative">
          <h1 className="text-5xl  text-white absolute top-20 right-12 bottom-32">Pine View Kitchen</h1>
          <h2 className="text-3xl text-white absolute bottom-25 right-12 top-32">Digital Menu</h2>
          <div className="text-xl text-white absolute bottom-8 right-32 cursor-pointer animate-bounce" onClick={handleShowMenu}>
            Click to start view menu
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="relative">
          <ScrollElement name="menu-section">
            <Menu onAddFood={handleOpenModal} />
          </ScrollElement>
        </div>
      )}

      {isModalOpen && (
        <FoodModal
          isOpen={isModalOpen}
          food={selectedFood}
          onClose={handleCloseModal}
          onSubmit={handleSubmitOrder}
        />
      )}

      <ScrollElement name="best-seller-section">
        <div className="px-10 py-16 bg-primary">
          <h1 className="text-3xl mb-8">Best Seller</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((food) => (
              <div key={food.id} className="bg-black rounded-lg p-8">
                <Image src={chickenImg} alt={food.name} className="rounded-t-lg" width={700} height={350} objectFit="cover" />
                <div className="p-4">
                  <h2 className="text-xl mb-2">{food.name}</h2>
                  <p className="text-orange-500 text-2xl mb-4">{food.price}</p>
                  <p className="text-gray-400 mb-4">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-2" onClick={() => handleOpenModal(food)}>Add</button>
                </div>
              </div>
            ))}




          </div>
        </div>
      </ScrollElement>
    </div>
  );
};

export default Home;
