<template>
    <div>
        <h1>hello {{ name }} - {{ heroName }} </h1>
    </div>
</template>

<script>
export default {
    name:"ComponentView",
    props: ["name", "heroName"],
}
</script>

<style>

</style>