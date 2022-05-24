import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import productsModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
  modules: { prods: productsModule, cart: cartModule },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
