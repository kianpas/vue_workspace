const app = Vue.createApp({
  data() {
    return {
      name: "lee",
      age: 31,
      url: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    favNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
