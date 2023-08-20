import { create } from "zustand";

const storeItems = (set, get) => ({
  cart: [],
  product: {},
  wishList: [],

  setProduct: (params) => {
    const { newProduct } = params;

    set((state) => {
      product: newProduct;
    });
  },
  addItemToCart: (params) => {
    const { newItem } = params;

    const newCart = [...state.cart, newItem];

    set((state) => {
      cart: newCart;
    });
  },

  removeItem: (params) => {
    const { itemIndex } = params;
    const newCart = state.cart.filter(
      (element, elementIndex) => elementIndex !== itemIndex
    );

    set((state) => {
      cart: newCart;
    });
  },
  addItemToWishlist: (params) => {
    const { newItem } = params;
    const newWishlist = [...state.wishList, newItem];

    set((state) => {
      wishList: newWishlist;
    });
  },

  removeItemFromWishlist: (params) => {
    const { itemIndex } = params;

    const newWishlist = state.wishList.filter(
      (item, index) => index !== itemIndex
    );

    set((state) => {
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

const useCart = useStore(persist(storeItems, { name: "libertLaneStore" }));
export default useCart;
