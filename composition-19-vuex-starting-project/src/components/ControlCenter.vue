<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from 'vuex';
export default {
  setup() {
    //this.$store대신
    const store = useStore();
    function inc() {
      store.dispatch('increment');
    }

    return { inc };
  },
};
</script>
