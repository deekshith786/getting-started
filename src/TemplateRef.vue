<template>
    <div>
        <input type="text" ref="inputRef" />
        <PostList ref="postListRef" />
    </div>
</template>

<script>
import PostList from './requests/PostList.vue';

    export default {
    name: "TemplateRefs",
    mounted() {
        console.log(this.$refs.postListRef);
        this.$refs.inputRef.focus();
    },
    components: { PostList }
}
</script>

<style scoped>

</style>