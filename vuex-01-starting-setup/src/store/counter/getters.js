export default {
  //로컬 모듈이므로 글로벌 state에 접근 불가능
  //대신 rootState, rootGetter 로 접근 가능
  testAuth(state, rootState, rootGetter) {
    console.log(rootState, rootGetter);
    return state.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
