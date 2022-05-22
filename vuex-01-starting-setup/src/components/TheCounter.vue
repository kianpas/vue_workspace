<template>
  <h3>{{ finalCounter }}</h3>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    //네임스페이스, 게터이름
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
