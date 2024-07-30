// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section id="cart" className="py-20 bg-neutral-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="max-w-lg mx-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 mb-4 rounded shadow"
              >
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                  <p className=" font-bold">
                    Total: ${item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
            <div className="mt-6">
              <h3 className="text-2xl font-bold border-b-2 border-green-400 w-fit mx-auto rounded-b-md px-1">
                Total Price: ${totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
