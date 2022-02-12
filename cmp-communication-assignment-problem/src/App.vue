<template>
  <div>
    <ul>
      <li>
        <active-user
          v-for="data in userData"
          :key="data.id"
          :id="data.id"
          :name="data.name"
          :age="data.age"
        ></active-user>
      </li>
    </ul>
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
      console.log(name, age);
      const newUser = {
        id: new Date().toISOString(),
        name,
        age,
      };
      this.userData.push(newUser);
    },
  },
};
</script>

<style></style>
