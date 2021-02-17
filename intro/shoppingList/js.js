const List = {
    data() {
        return {
            item: null,
            items: [],
            count: null,
        };
    },
    methods: {
        addItem() {
            // Note how data properties are accessed via `this`
            this.items.push(this.item);
            this.count = this.items.length;
        },
        resetList() {
            this.item = null;
            this.items = [];
            this.count = null;
        },
    },
};

const app = Vue.createApp(List).mount("#app");