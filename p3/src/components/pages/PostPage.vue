<template>
  <div id="post-page">
    <div v-if="postNotExist">
      <p>
        This post is not created yet. Please check
        <router-link v-bind:to="'/posts'">some other posts</router-link> while
        I'm creating this one.
      </p>
    </div>
    <div v-else-if="post">
      <show-one-post v-bind:post="post"></show-one-post>
    </div>
  </div>
</template>

<script>
import ShowOnePost from "@/components/ShowOnePost.vue";

export default {
  components: {
    "show-one-post": ShowOnePost,
  },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.$store.getters.getPostById(this.id);
    },
    postNotExist() {
      return this.post == null;
    },
  },
};
</script>

<style></style>
