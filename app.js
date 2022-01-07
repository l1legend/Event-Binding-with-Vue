const app = Vue.createApp({
    data() {
        return {
            name: 'Michael',
            age: 35,
            imageUrl: 'images/cells2.png'    
        };
    },
    methods: {
        calculateAge() {
            return this.age - 10;
        },

        calculateRandom() {
            const randomNumber = Math.random();
            return randomNumber;       
        }
    }
});

app.mount('#assignment');