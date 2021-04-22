<template>
  <div id="show-random">
    <router-link
      v-for="post in posts"
      v-bind:to="'/post/' + post.id"
      v-bind:key="post.id"
      ><show-post v-bind:post="post"></show-post>
    </router-link>
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
  computed: {
    ids() {
      let ids = [],
        a;
      for (let i = 0; i < 3; i++) {
        a = Math.ceil(Math.random() * 12);
        ids.push(a);
      }
      console.log(ids);
      return ids;
    },
  },
};
</script>

<style></style>
