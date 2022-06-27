<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <h3>{{ uAge }}</h3>
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
    <p>{{ uName }}</p>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

//reactive는 객체만 가능
const user = reactive({ name: 'Maximilian', age: 31 });

const firstName = ref('');
const lastName = ref('');

//v-model로도 바인딩 가능
// function setFirstName(event) {
//   firstName.value = event.target.value;
// }
// function setLastName(event) {
//   lastName.value = event.target.value;
// }

const uAge = ref(31);

//watch
watch(uAge, function (newValue, oldValue) {
  console.log('old age : ' + oldValue);
  console.log('new age : ' + newValue);
});



//컴퓨트 함수
const uName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});

watch([uAge, uName], function (newValues, oldValues) {
  console.log('old age : ' + oldValues[0]);
  console.log('new age : ' + newValues[0]);
  console.log('old name : ' + oldValues[1]);
  console.log('new name : ' + newValues[1]);
});

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
  uAge.value = 32;
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
