<template>
  <div>
    <h1 v-for="name in names" :key="name.firstName">
      <!-- {{ name.firstName }} - {{ name.lastName }} -->
      <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "ListNameView",
  data() {
    return {
      names: [
        { firstName: "Bruce", lastName: "wayne" },
        { firstName: "clark", lastName: "Kent" },
        { firstName: "princess", lastName: "Diana" },
      ],
    };
  },
};
</script>

<style scoped></style>
