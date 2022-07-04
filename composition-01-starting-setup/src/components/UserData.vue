<template>
  <div>
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
  age: String,
});

const emit = defineEmits(['save-data']);

console.log(props);
console.log(emit);

// const { firstName, lastName } = ref(props);

const uName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});
</script>

<style></style>
