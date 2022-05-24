import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

//모듈로 나눔
export default {
  //namespaced 으로 이름으로 구분
  namespaced: true,
  //모듈로 나눠진 state는 로컬 취급
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
