// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BuyNow from "./components/BuyNow";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <section id="buy">
          <BuyNow />
        </section>
        <section id="cart">
          <Cart />
        </section>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
