const randomValue = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth >= 0 ? this.monsterHealth + "%" : 0 };
    },
    playerBarStyle() {
      return { width: this.playerHealth >= 0 ? this.playerHealth + "%" : 0 };
    },
  },
  methods: {
    attack() {
      const attackValue = randomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = randomValue(15, 8);
      this.playerHealth -= attackValue;
    },
    spAttack() {
      const spAttackValue = randomValue(15, 8);
      this.monsterHealth -= spAttackValue;
      this.attackPlayer();
    },
    heal() {
      const healValue = randomValue(10, 5);
      this.playerHealth += healValue;
    },
    surrender() {},
  },
});

app.mount("#game");
