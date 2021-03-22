const List = {
    data() {
        return {
            item: '',
            qty: '',
            items: [],
            count: 0,
        };
    },
    methods: {
        addItem() {
            // Note how data properties are accessed via `this`
            //add items to the list
            this.items.push({
                name: this.item,
                qty: this.qty
            });
            //count total quantity
            this.count += this.qty;
            //Clear inputs
            this.item = '';
            this.qty = '';
        },
        deleteItem(name) {
            // this.items.splice(this.items.indexOf(this.item), 1);
            // this.count -= this.qty;
            this.items = this.items.filter(item => {
                if (item.name == name) {
                    this.count -= item.qty;
                }
                return item.name != name;
            })
        },
        resetList() {
            this.item = null;
            this.items = [];
        },
    },
};

const app = Vue.createApp(List).mount('#app');