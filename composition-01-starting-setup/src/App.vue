<template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    //동적 처리를 위해 ref 사용
    //ref로 저장하면 value 아래 저장됨
    const uName = ref('Maximilian');

    setTimeout(() => {
      //아래와 같이 변경 가능
      uName.value = 'Max';
    }, 2000);

    return { userName: uName };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
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
