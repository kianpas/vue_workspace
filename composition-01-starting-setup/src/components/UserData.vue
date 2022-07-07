<template>
  <div>
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
});

const emit = defineEmits(['save-data']);

const age = inject('userAge');

console.log(props);
console.log(emit);

// const { firstName, lastName } = ref(props);

const uName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});

onBeforeMount(function () {
  console.log('onBeforeMount');
});
onMounted(function () {
  console.log('onMount');
});
onBeforeUpdate(function () {
  console.log('onBeforeUpdate');
});
onUpdated(function () {
  console.log('onUpdated');
});
onBeforeUnmount(function () {
  console.log('onBeforeUnmount');
});
onUnmounted(function () {
  console.log('onUnmounted');
});

</script>

<style></style>
