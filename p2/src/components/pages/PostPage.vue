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
      <show-one-post v-bind:post="post" v-bind:posts="posts"></show-one-post>
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
    posts: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    post() {
      return this.posts.filter((post) => {
        return post.id == this.id;
      }, this.id)[0];
    },
    postNotExist() {
      return this.post == null;
    },
  },
};
</script>

<style></style>
