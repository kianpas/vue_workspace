const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event, name) {
      this.name = event.target.value + " " + name;
    },
    submitForm() {
      alert("Submitted");
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  },
});

app.mount("#events");
