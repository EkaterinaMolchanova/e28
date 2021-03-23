const Game = {
  data() {
    return {
      playerName: "",
      startGame: false,
      currentTotal: 0,
      userInput: "",
      computerInput: "",
      userInputLast: "",
      computerInputLast: "",
      lastInput: "",
      gameOver: false,
      win: "",
    };
  },
  // computed: {
  //     computerInputCalc() {
  //         let computerInput = Math.ceil(Math.random() * 12);
  //         console.log('computed: ' + computerInput);
  //         return computerInput
  //     }
  // },
  watch: {
    currentTotal() {
      if (this.currentTotal >= 100) {
        console.log("game over!");
        this.gameOver = true;
        this.win = this.lastInput === "computer";
      }
    },
  },
  methods: {
    gameStarted() {
      this.startGame = true;
      this.currentTotal = 0;
      this.userInputLast = "";
      this.computerInputLast = "";
      this.gameOver = false;
      this.win = "";
    },
    addNumber() {
      this.currentTotal += this.userInput;

      this.userInputLast = this.userInput;
      this.lastInput = "user";
      this.userInput = "";

      if (this.currentTotal < 100) {
        if (this.currentTotal < 88) {
          this.computerInput = Math.ceil(Math.random() * 12);
        } else if (this.currentTotal < 99) {
          this.computerInput = 99 - this.currentTotal;
        } else {
          this.computerInput = 1;
        }
        console.log("methods: " + this.computerInput);

        this.currentTotal += this.computerInput;

        this.computerInputLast = this.computerInput;
        this.lastInput = "computer";
      }
    },
  },
};

const app = Vue.createApp(Game).mount("#app");
