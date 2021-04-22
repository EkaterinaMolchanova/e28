<template>
  <div id="posts-page">
    <div id="posts">
      <router-link
        class="show-post"
        v-for="post in posts"
        v-bind:to="'/post/' + post.id"
        v-bind:key="post.id"
      >
        <show-post v-bind:post="post"></show-post>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";

export default {
  components: {
    "show-post": ShowPost,
  },
  props: {
    posts: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style>
#posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.show-post {
  flex: 0 0 45%;
  margin: 15px 10px;
}

.pic {
  width: 100%;
  max-width: 350px;
}
</style>
