<template>
  <div>
    <!-- options api -->
    <input type="text" placeholder="fname" v-model="fname" />
    <input type="text" placeholder="lname" v-model="lname" />
    <h2>Options full name is {{ fullName }}</h2>

    <input type="text" placeholder="fname" v-model="refFistName" />
    <input type="text" placeholder="lname" v-model="refLastName" />
    <h2>composition full name is {{ refFullName }}</h2>


    <!-- using reactive  -->
    <input type="text" placeholder="fname" v-model="reactFistName" />
    <input type="text" placeholder="lname" v-model="reactLastName" />
    <h2>composition full name is {{ reactFullName }}</h2>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from "vue";
export default {
  name: "ComputedView",
  setup() {
    const refFistName = ref("");
    const refLastName = ref("");

    const state = reactive({
      reactFirstName: "",
      reactLastName: "",
    });

    const reactFullName = computed(function () {
      return `${state.reactFirstName} ${state.reactLastName}`;
    });

    const refFullName = computed(function () {
      return `${refFistName.value} ${refLastName.value}`;
    });
    return {
      refFistName,
      refLastName,
      refFullName,
      reactFullName,
      ...toRefs(state)
    };
  },
  data() {
    return {
      fname: "",
      lname: "",
    };
  },
  computed: {
    fullName() {
      return `${this.fname} - ${this.lname}`;
    },
  },
};
</script>

<style scoped></style>
