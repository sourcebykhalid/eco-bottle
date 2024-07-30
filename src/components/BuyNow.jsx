import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const BuyNow = () => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    price: 19.99,
  };

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
  };

  return (
    <section id="/" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Buy Now</h2>
        <div className="max-w-xs mx-auto bg-gray-100 p-6 rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
          <p className="text-lg mb-4">${product.price}</p>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-left mb-2 font-bold"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
