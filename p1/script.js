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
            roundResults: [],
            number: 0,
            userWins: 0,
            computerWins: 0,
        };
    },
    watch: {
        currentTotal() {
            if (this.currentTotal >= 100) {
                this.gameOver = true;
                this.win = this.lastInput === "computer";
                this.roundResults.push({
                    number: this.number,
                    winner: this.lastInput
                });
                if (this.lastInput === "computer") {
                    this.userWins++;
                } else {
                    this.computerWins++;
                }

                console.log(this.roundResults);
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
            this.number++;
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

                this.currentTotal += this.computerInput;

                this.computerInputLast = this.computerInput;
                this.lastInput = "computer";
            }
        },
        deleteResult(number) {
            // console.log(this.game.number);
            this.roundResults = this.roundResults.filter(game => game.number != number)
        }
    },
};

//component details
const GameResults = {
    name: 'GameResults',
    props: {
        number: {
            type: Number,
            default: 0
        },
        winner: {
            type: String,
            required: true
        },
        playerName: {
            type: String,
            required: true
        },
        userWins: {
            type: Number,
            required: true
        },
        computerWins: {
            type: Number,
            required: true
        }

    },
    data() {
        return {}
    },
    template: '#game-results'

}

//Root Vue instance mounting
const app = Vue.createApp(Game);
app.component('game-results', GameResults);
app.mount("#app");