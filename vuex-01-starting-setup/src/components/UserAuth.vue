<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-else>Logout</button>
  <p>{{ isTestAuth }}</p>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      login: 'login',
      logout: 'logout',
    }),
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIstAuth;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    },
  },
};
</script>
