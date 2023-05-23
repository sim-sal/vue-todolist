const {createApp} = Vue;

createApp({

    data(){
        return{
            newTask: '',
            tasks: []
        }
    },
    methods: {
        addTask(){
            if(this.newTask !== ''){
                const newItem = {
                    text: this.newTask,
                    status: false
                };
                
                console.log(newItem);
                this.tasks.unshift(newItem);

                this.newTask = '';
            }
        },

        removeTask(ind){
            console.log('rimuovi!');
            this.tasks.splice(ind, 1);
        }
    }
}).mount("#app");