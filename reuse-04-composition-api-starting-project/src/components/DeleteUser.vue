<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import useAlert from '../hooks/alert';
import UserAlert from './UserAlert.vue';
import { ref } from 'vue';
export default {
  components: {
    UserAlert,
  },
  setup() {
    const alertTitle = ref('Delete User?');
    const [alertIsVisible, showAlert, hideAlert] = useAlert(true);

    return { alertIsVisible, showAlert, hideAlert, alertTitle };
  },
};
</script>
