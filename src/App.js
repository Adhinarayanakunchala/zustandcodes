import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import useProductStore from "./Store/ProductStore";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </Router>
  );
}

export default App;
