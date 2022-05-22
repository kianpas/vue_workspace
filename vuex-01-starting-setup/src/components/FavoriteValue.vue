<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>
<script>
export default {
  computed: {
    counter() {
      //네임스페이스/게터이름
      return this.$store.getters["numbers/normalizedCounter"];
    },
  },
};
</script>
