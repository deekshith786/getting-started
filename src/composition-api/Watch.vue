<template>
    <div>
        <input type="text" placeholder="Name" v-model="name" /><br>
        <input type="text" placeholder="Name" v-model="first_name" /><br>
        <input type="text" placeholder="Name" v-model="last_name" />
    </div>
</template>

<script>
import {ref, watch } from 'vue';
    export default {
        name:"WatcherView",
        setup(){
            const first_name = ref('')
            const last_name = ref('wayne')
            
            watch([first_name, last_name], (newValues, oldValues) => {
                console.log("first name old",oldValues[0]);
                console.log("first name new",newValues[0]);
                console.log("last name old",oldValues[1]);
                console.log("last name new",newValues[1]);
            },
            {
                immediate: true
            })


            return {
                first_name,
                last_name
            }
        },
        
        
        data(){
            return{
                name:""
            }
        },
        watch: {
            name(newValue, oldValue){
                console.log("old",oldValue);
                console.log("new",newValue);
            }

        }
    }
</script>

<style scoped>

</style>