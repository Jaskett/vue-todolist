console.log('vue ok', Vue);

const { createApp } = Vue

createApp({
    data() {
        return {
            arrList: [
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
        changeStat(index) {
            if(this.arrList[index].done) {
                this.arrList[index].done = false;
            } else {
                this.arrList[index].done = true;
            }
        }
    }
}).mount('#app')