const mutations = {
  setName(state, payload) {
    state.name = payload;
  },
  setCart(state, payload) {
    state.cart = payload;
  },
  setProducts(state, payload) {
    state.products = payload;
  },
  setProductDetail(state, payload) {
    state.productDetail = payload;
  },
  addToCard(state, payload) {
    state.cart = [...state.cart, payload];
  },
  removeCartItem(state, payload) {
    state.cart = state.cart.filter(item => item.id !== payload);
  }
};

export default mutations;
