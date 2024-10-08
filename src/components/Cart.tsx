import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <ShoppingCart className="mr-2" /> Your Cart
      </h1>
      <p>Your cart is empty. Start adding some delicious treats!</p>
    </div>
  );
};

export default Cart;