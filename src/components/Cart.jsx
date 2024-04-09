import React from "react";
import useCartStore from "../Store/CartStore";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import "../components/Cart.css";
import "../components/EmptyCart.css";
import EmptyCart from "../images/emptycart_1.png";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.totalMoney);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  return (
    <div className="cart">
      {cart.length !== 0 ? (
        <div className="cart-model">
          <h1>My Shopping ({cart ? cart.length : 0})</h1>
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-item">
                <div className="cart-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="description">
                  <h2>{product.category}</h2>
                  <h4>{product.title}</h4>
                  <h4>
                    <PiCurrencyInrDuotone />
                    {product.price}
                  </h4>
                  <div className="quantity">
                    <button onClick={() => decrementQuantity(product)}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => incrementQuantity(product)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="remove-btn">
                  <button onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="cart-total">
            <h2>
              Total: <PiCurrencyInrDuotone />
              {total}
            </h2>
          </div>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-box">
            <h1>My Cart ({cart ? cart.length : 0})</h1>
            <img src={EmptyCart} alt="Cart." />
            <NavLink to="/">
              <button type="submit">Shop now</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
