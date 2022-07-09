<template>
  <form>
    <input
      type="search"
      @input="search"
      :value="searchTerm.value"
      placeholder="Filter items"
    />
  </form>
</template>

<script>
// import { defineProps, defineEmits, ref } from 'vue';

// const props = defineProps({ searchTerm: String });
// console.log(props.searchTerm);
// const searchTerm = ref(props.searchTerm);
// console.log(searchTerm);

// const emit = defineEmits(['search']);

// function search(event) {
//   console.log(props);
//   console.log(searchTerm.value);
//   console.log(event.target.value);
//   emit('search', event.target.value);
// }

export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      console.log(this.searchTerm);
      this.$emit('search', event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>
