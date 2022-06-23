<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setNewData">Change Age</button>
  </section>
</template>

<script setup>
// import { ref } from 'vue';
import { reactive } from 'vue';

//reactive는 객체만 가능
const user = reactive({ name: 'Maximilian', age: 31 });
// const uAge = ref(31);

//동적 처리를 위해 ref 사용
//ref로 저장하면 value 아래 저장됨
// const uName = ref('Maximilian');
// const uAge = ref(31);
// const user = ref({ name: 'Maximilian', age: 31 });

//ref화
// const userRefs = toRefs(user);

// console.log(userRefs.name);

function setNewData() {
  user.age = 32;
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
