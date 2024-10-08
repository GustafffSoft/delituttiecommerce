import React, { useState } from 'react';
import { Store, Cake } from 'lucide-react';

const franchises = [
  { id: 1, name: 'Deli Tutti Downtown', address: '123 Main St, Cityville', cakes: ['Chocolate Fudge', 'Strawberry Shortcake', 'Red Velvet'] },
  { id: 2, name: 'Deli Tutti Mall', address: '456 Shopping Ave, Malltown', cakes: ['Vanilla Bean', 'Lemon Meringue', 'Carrot Cake'] },
  { id: 3, name: 'Deli Tutti Beachside', address: '789 Ocean Blvd, Beachville', cakes: ['Coconut Cream', 'Pineapple Upside-Down', 'Key Lime Pie'] },
];

const Franchises = () => {
  const [selectedFranchise, setSelectedFranchise] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <Store className="mr-2" /> Our Franchises
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {franchises.map((franchise) => (
            <div
              key={franchise.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 cursor-pointer"
              onClick={() => setSelectedFranchise(franchise)}
            >
              <h2 className="text-xl font-semibold mb-2">{franchise.name}</h2>
              <p>{franchise.address}</p>
            </div>
          ))}
        </div>
        <div>
          {selectedFranchise && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <h2 className="text-2xl font-bold mb-4">{selectedFranchise.name}</h2>
              <p className="mb-4">{selectedFranchise.address}</p>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Cake className="mr-2" /> Available Cakes
              </h3>
              <ul>
                {selectedFranchise.cakes.map((cake, index) => (
                  <li key={index} className="mb-2">{cake}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Franchises;