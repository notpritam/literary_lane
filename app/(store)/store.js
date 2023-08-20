import { create, useStore } from "zustand";
import { persist } from "zustand/middleware";

const storeItems = (set, get) => ({
  cart: [{ name: "" }, { name: "" }],
  product: {},
  wishList: [],

  setProduct: (params) => {
    const { newProduct } = params;

    set((state) => {
      product: newProduct;
    });
  },
  addItemToCart: (params) => {
    const { product } = params;

    console.log(product);

    set((state) => {
      const newCart = [...state.cart, product];
      return {
        cart: newCart,
      };
    });
  },

  removeItem: (params) => {
    const { itemIndex } = params;

    set((state) => {
      const newCart = state.cart.filter(
        (element, elementIndex) => elementIndex !== itemIndex
      );
      return {
        cart: newCart,
      };
    });
  },
  addItemToWishlist: (params) => {
    const { newItem } = params;

    set((state) => {
      const newWishlist = [...state.wishList, newItem];
      wishList: newWishlist;
    });
  },

  removeItemFromWishlist: (params) => {
    const { itemIndex } = params;

    set((state) => {
      const newWishlist = state.wishList.filter(
        (item, index) => index !== itemIndex
      );
      wishList: newWishlist;
    });
  },

  emptyCart: (params) => {
    set((state) => {
      cart: [];
    });
  },
  emptyWishlist: (params) => {
    set((state) => {
      wishList: [];
    });
  },
});

const useCart = create(persist(storeItems, { name: "libertLaneStore" }));
export default useCart;
