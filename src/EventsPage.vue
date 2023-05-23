<template>
  <div>
    <!-- Event handlers -> {InLine} -->
    <h2>{{ name }}</h2>
    <button v-on:click="changeName($event), increment(1, $event)">Change name</button>
    <h2>{{ count }}</h2>
    <div>
      <button v-on:click="increment(5)">Increment</button>
      <button v-on:click="decrement(1)">Decrement</button>
    </div>
    <!-- short hand syntax -->
    <div>
      <button @click="increment(3)">Increment</button>
      <button @click="decrement(2)">Decrement</button>
    </div>
    <div>
      <button @click="increment(3, $event)">Increment</button>
      <button @click="decrement(2)">Decrement</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventView",
  data() {
    return {
      name: "deekshith",
      count: 0,
    };
  },
  methods: {
    increment(num, event) {
      this.count += num
      console.log('Event', event);
    },
    decrement(num) {
      return (this.count -= num);
    },
    changeName(event) {
      this.name = "BatMan";
      console.log(Event, event);
    },
  },
};
</script>

<style></style>
