<template>
  <div>
    <h2>Article component</h2>
    <h2>{{ title }}</h2>
    <h2>{{ likes }}</h2>
    <h2>Published - {{ isPublished ? "Yes" : "no" }}</h2><hr>
    <DashboardPage /><hr>
  </div>
</template>

<script>
import DashboardPage from './DashboardPage.vue';


export default {
    name: "ArticleView",
    props: {
        title: {
            type: String,
            required: true,
            default: "Default Article title ",
        },
        likes: Number,
        isPublished: Boolean,
    },
    components: { DashboardPage }
};
</script>

<style scoped></style>
