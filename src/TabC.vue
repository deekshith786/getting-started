<template>
    <div>
        <h3>Tab C component</h3>
        <input type="text" v-model="name">
    </div>
</template>

<script>
    export default {
        name:"TabC",
        data(){
            return{
                name: ""
            }
        }
    }
</script>

<style scoped>

</style>