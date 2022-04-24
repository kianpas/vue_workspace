<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanged">Save Change</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changeSaved: false };
  },
  methods: {
    confirmInput() {
      //라우팅 기능
      this.$router.push('/teams');
    },
    saveChanged() {
      this.changeSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('userList Comp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('userList comp beforeRouteLeave');
    console.log(to, from);
    if (this.changeSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? you got unsaved changed');
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
