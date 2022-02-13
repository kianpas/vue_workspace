<template>
  <section>
    <form @submit.prevent="submitUser">
      <div>
        <label for="">name</label>
        <input type="text" v-model="enteredName" />
      </div>
      <div>
        <label for="">age</label>
        <input type="number" v-model="enteredAge" />
      </div>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["submit-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitUser() {
      this.$emit("submit-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>
