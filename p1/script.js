const Game = {
    data() {
        return {
            playerName: "",
            mysteryNumber: Math.ceil(Math.random() * 100),

        };
    },
    methods: {
        addName() {
            this.playerName;
        },

    },
};

const app = Vue.createApp(Game).mount("#app");