<template>
  <div>
    
      <active-user
        v-for="data in userData"
        :key="data.id"
        :id="data.id"
        :name="data.name"
        :age="data.age"
      ></active-user>
    
    <user-data @submit-user="submitUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    submitUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name,
        age:+age,
      };
      this.userData.push(newUser);
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
