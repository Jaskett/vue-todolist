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
                    done: false
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
        subM() {
            let control = null;
            if(this.newT.text == '') {
                control = false;
            } else {
                control = true;
            }
            return control;
        },
        submitNew() {
            if((this.newT.text == '') || (!isNaN(this.newT.text))) {
                alert('inserisci il titolo della nota');
            } else {
                let toDo = {
                    text: this.newT.text,
                    done: this.newT.done
                }
                this.arrList.push(toDo);
                this.newT.text = ' ';
            }
        },
        changeStat(index) {
            if(this.arrList[index].done) {
                this.arrList[index].done = false;
            } else {
                this.arrList[index].done = true;
            }
        },
        removeToDo(index) {
            this.arrList.splice(index, 1)
        }
    }
}).mount('#app')