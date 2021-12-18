const app = Vue.createApp({
  data() {
    return {
      keyDownMsg: "",
      enterMsg: "",
    };
  },
  methods: {
    showAlert() {
      alert("message");
    },
    keyDown(event) {
      this.keyDownMsg = event.target.value;
    },
    enter(event){
        this.enterMsg = event.target.value;
    }
  },
});

app.mount("#assignment");
