<template>
  <h2>{{ uName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
  firstName: String,
  lastName: String,
});

// const { firstName, lastName } = ref(props);

const uName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});
</script>

<style></style>
