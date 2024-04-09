import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../Store/ProductStore";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../components/ProductList.css";
import useCartStore from "../Store/CartStore";

const ProductList = ({ id }) => {
  const { data: products, loading, fetchProducts, error ,deleteProduct} = useProductStore();

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  

  if (loading) {
    return (
      <div className="product-list-container">
        <h1>Products Marketing</h1>
        <Link to="/cart">
          <p>Cart Count: {cart ? cart.length : 0}</p>
        </Link>
        <ul className="product-grid">
          {[...Array(10)].map((_, index) => (
            <li key={index} className="product-card">
              <Skeleton height={200} width={400} />
              <div className="product-details">
                <Skeleton count={2} />
              </div>
              <Skeleton height={20} width={100} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!products) {
    return null;
  }

  return (
    <div className="product-list-container">
      <h1>Products Marketing</h1>
      
      <ul className="product-grid">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <img src={product.image} alt="Product" />
            <div className="product-details">
              <p>{product.category}</p>
              <p>{product.title}</p>
            </div>
            <div className="btns">
              <button className="green" onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
