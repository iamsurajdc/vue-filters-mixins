export const fruitMixin = {
    data: function() {
        return {
            title: "Hello World!",
            fruits: ['M&G: Mango', 'Me: Suraj', 'Kivi', 'Banana', 'Apple'],
            filterText: ""
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((ele) => {
                return ele.match(this.filterText);

        });

        }            
    },
    created() {
        console.log("created");
    }
}