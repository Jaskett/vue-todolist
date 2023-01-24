console.log('vue ok', Vue);

const { createApp } = Vue

createApp({
    data() {
        return {
            newItem: '',
            items: [
                {
                    text: 'Ripassare VUEJs',
                    done: true
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Pulire casa',
                    done: false
                },
                {
                    text: 'Preparare la cena',
                    done: false
                },
                {
                    text: 'Portare fuori il cane',
                    done: false
                }
            ]
        }
    },
    methods: {
        
    }
}).mount('#app')