import React from 'react';
import { Candy } from 'lucide-react';

const bestSellers = [
  { id: 1, name: 'Chocolate Truffles', price: 12.99, image: 'https://images.unsplash.com/photo-1548907040-4d7e36f18b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Fruit Gummies', price: 8.99, image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Caramel Popcorn', price: 6.99, image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <Candy className="mr-2" /> Best Sellers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bestSellers.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-4 bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;