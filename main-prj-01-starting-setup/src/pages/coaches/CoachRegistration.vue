<template>
  <section>
    <base-card>
      <h2>Register as a Coach Now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      //push는 뒤로가기 가능, replace는 불가능
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style></style>
