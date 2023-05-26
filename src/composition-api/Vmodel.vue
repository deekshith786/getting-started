<template>
    <div>

        <Computed />
        <hr><br>

        <!-- options api -->
        <input type="text" placeholder="fname" v-model="fname">
        <input type="text" placeholder="lname" v-model="lname">
        <br>

        <!-- composition api -->
        <input type="text" placeholder="hero Name" v-model="heroName">
        <input type="text" placeholder="first name" v-model="first_name">
        <input type="text" placeholder="last name" v-model="last_name">


    </div>
</template>

<script>
import {ref, reactive, toRefs} from 'vue';
import Computed from './Computed.vue';
    export default {
    name: "VModel",
    setup() {
        const heroName = ref("");
        const state = reactive({
            first_name: "",
            last_name: ""
        });
        return {
            heroName,
            ...toRefs(state)
        };
    },
    data() {
        return {
            fname: "",
            lname: ""
        };
    },
    components: { Computed }
}
</script>

<style scoped>

</style>