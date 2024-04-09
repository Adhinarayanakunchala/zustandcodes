import {create} from "zustand";
import axios from "axios";
import { BASE_URL } from "../utils/apiURL";

const useProductStore = create((set) => ({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(BASE_URL + "products");
      set({ data: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  fetchProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(BASE_URL + `products/${id}`);
      set({ data: [res.data], loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(BASE_URL + `products/${id}`);
      set({ data: [res.data], loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useProductStore;
