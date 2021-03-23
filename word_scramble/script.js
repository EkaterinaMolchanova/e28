let WorldScramble = {
    data() {
        return {
            playerName: '',
            words: [
                ['apple', 'Sometimes red, sometimes delicious'],
                ['washington', "Rushmore's left edge"],
                ['pumpkin', "Halloween's favorite fruit"],
                ['football', 'Play with your hands or feet, depending on your location']
            ],
            gameStarted: false,
            hint: '',
            word: '',
            guess: '',
            lastWord: '',
            feedback: false,
            correct: false,
        }
    },
    computed: {
        wordScrambled() {
            let wordAsArray = this.word.split('');
            wordAsArray.sort(() => Math.random() - 0.5);
            return wordAsArray.join('');
        }
    },
    methods: {
        startGame() {
            this.gameStarted = true;
            this.scrambleWord();
        },
        scrambleWord() {
            this.feedback = false;
            this.guess = '';

            while (this.word === this.lastWord) {
                this.choice = this.words[Math.floor(Math.random() * this.words.length)];
                this.word = this.choice[0];
                this.hint = this.choice[1];
            }

            this.lastWord = this.word;
        },
        submitGuess() {
            this.correct = this.guess.toLowerCase() == this.word;
            this.feedback = true;
        },
    },
}

const GameFeedback = {
    name: 'GameFeedback',
    props: {
        feedback: {
            type: Boolean,
            default: false
        },
        correct: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {}
    },
    template: '#game-feedback'
}


const app = Vue.createApp(WorldScramble);
app.component('game-feedback', GameFeedback);
app.mount('#app');