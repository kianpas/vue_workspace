const app = Vue.createApp({
  data() {
    return {
      inputColor: "",
      inputClass: "",
      paragraphIsVisible: true,
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});

app.mount("#assignment");
