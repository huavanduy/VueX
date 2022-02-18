const actions = {
  updateName({ commit }, payload) {
    commit("setName", payload);
  },
  addToCart({ commit }, payload) {
    commit("addToCard", payload);
  },
  getProducts( { commit } ) {
    fetch("https://620372394d21c200170b9d37.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
          commit('setProducts', data);
      });
  },
  getProductDetail( { commit } , id ) {
    fetch(
      `https://620372394d21c200170b9d37.mockapi.io/products/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        commit('setProductDetail', data);
      });
  },
  removeCartItem( { commit }, id ) {
    console.log(id);
    commit('removeCartItem', id);
  }
};

export default actions;
