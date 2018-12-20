const cart = {
  state: {
    items: []
  },
  reducers: {
    addProduct(state, product) {
      const item = state.items.find(item => item.product.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          product: product,
          quantity: 1
        });
      }
    },

    removeProduct(state, productId, quantity) {
      state.items = state.items.filter(item => item.product.id !== productId);
    },

    setQuantity(state, productId, quantity) {
      if (quantity === 0) {
        state.items = state.items.filter(item => item.product.id !== productId);
      } else {
        const item = state.items.find(item => item.product.id === productId);
        item.quantity = quantity;
      }
    }
  }
};

export default cart;

const STORAGE_KEY = "cart";

export function loadStateFromLocalStorage() {
  let storageData = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(storageData) || cart.state;
}

export function saveStateToLocalStorage(store) {
  const cartState = store.getState().cart;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartState));
}
