console.log('vue ok', Vue);

const { createApp } = Vue

createApp({
    data() {
        return {
            newT: {
                text: '',
                done: false
            },
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
        submitNew() {
            this.arrList.push(this.newT);
            this.newT = '';
        },
        changeStat(index) {
            if(this.arrList[index].done) {
                this.arrList[index].done = false;
            } else {
                this.arrList[index].done = true;
            }
        },
        removeToDo(index) {
            this.arrList.splice(this.arrList[index], 1)
        }
    }
}).mount('#app')