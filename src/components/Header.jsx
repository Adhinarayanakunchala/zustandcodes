import React from "react";
import { GrCart } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import "../components/Header.css";
import useCartStore from "../Store/CartStore";
const Header = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <div className="header_container">
      <div className="header_box1">
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product:id">Product</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        <div className="cart_icon">
        <Link to="/cart">
          <span>{cart ? cart.length : 0}</span>
          <GrCart className="cart_cat"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
