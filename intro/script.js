const Game = {
  data() {
    return {
      playerName: "",
      mysteryNumber: Math.ceil(Math.random() * 10),
      guess: null,
      guesses: [],
      correct: false,
    };
  },
  methods: {
    addName() {
      this.playerName;
    },
    addGuess() {
      // Note how data properties are accessed via `this`
      this.guesses.push(this.guess);
      this.correct = this.guess == this.mysteryNumber;
    },
    resetGame() {
      this.mysteryNumber = Math.ceil(Math.random() * 10);
      this.guess = null;
      this.guesses = [];
      this.correct = false;
      console.log(this.mysteryNumber);
    },
  },
};

const app = Vue.createApp(Game).mount("#app");
