const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      taskList: [],
      show: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.show ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.taskList.push(this.enteredTask);
    },
    showToggle() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
