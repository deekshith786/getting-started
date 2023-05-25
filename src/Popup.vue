<template>
  <div>
    <h1>this is a popup</h1>
    <input type="text" v-model="name" />
    <button @click="$emit('close', name)">close popup</button>
  </div>
</template>

<script>
export default {
  name: "PopupView",
  //   validation of emitted data
  emits: {
    close: (name) => {
      if (!name) return false;
      else return true;
    },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped></style>
