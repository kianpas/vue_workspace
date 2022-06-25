<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <p v-if="goalIsVisible">{{ sepRef }}</p>
  <!-- => Ref Object -->
  <p v-if="user.visible">{{ user }}</p>
  <!-- => Reactive Object -->
  <p>{{ obj }}</p>
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { ref, reactive } from 'vue';
let goalIsVisible = ref(false);
const courseGoal = ref('OUTPUT COURSE GOAL');
const sepRef = ref('REFERENCE');
const user = ref({ name: 'Maximilian', age: 31, visible : false});
const obj = reactive({ goal: 'goal', obj: 'obj' });
function toggle() {
  goalIsVisible.value = !goalIsVisible.value;
  user.value.visible = !user.value.visible;
  // sepRef.value = 'toggle-favorite';
  // user.value.name = '1213';
  // obj.goal = '1213';
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
