import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  totalMoney: 0,
  init: () => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      set(JSON.parse(cartData));
    }
  },
  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          cart: updatedCart,
          totalMoney: state.totalMoney + product.price,
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
          totalMoney: state.totalMoney + product.price,
        };
      }
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === id);
  
      if (existingProduct) {
        const updatedCart = state.cart.filter((item) => item.id !== id);
  
        return {
          cart: updatedCart,
          totalMoney: state.totalMoney - existingProduct.price * existingProduct.quantity,
        };
      }
  
      return state;
    });
  },
  
  incrementQuantity: (product) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          cart: updatedCart,
          totalMoney: state.totalMoney + product.price,
        };
      }
    });
  },
  decrementQuantity: (product) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct && existingProduct.quantity > 1) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        return {
          cart: updatedCart,
          totalMoney: state.totalMoney - product.price,
        };
      } else if (existingProduct) {
        const updatedCart = state.cart.filter((item) => item.id !== product.id);

        return {
          cart: updatedCart,
          totalMoney: state.totalMoney - product.price,
        };
      }

      return state;
    });
  },
  onSet: (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
  },
}));

export default useCartStore;
