<template>
  <div id="posts-page">
    <div id="selections">
      <category-and-color
        v-bind:posts="posts"
        v-on:new-color="setUserColor($event)"
      ></category-and-color>
    </div>
    <div class="posts">
      <router-link
        class="show-post"
        v-for="post in selectPosts"
        v-bind:to="'/post/' + post.id"
        v-bind:key="post.id"
      >
        <show-post v-bind:post="post"></show-post>
        <fav-buttons v-bind:post="post"></fav-buttons>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";
import CategoryAndColor from "@/components/CategoryAndColor.vue";
import FavButtons from "@/components/FavButtons.vue";

export default {
  name: "PostsPage",
  components: {
    "show-post": ShowPost,
    "category-and-color": CategoryAndColor,
    "fav-buttons": FavButtons,
  },
  data() {
    return {
      userColor: "",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    //filter posts to show only those containing the user-selected color. If no color or any color selected - all posts are shown
    selectPosts() {
      if (!this.userColor || this.userColor == "any") {
        return this.posts;
      } else {
        return this.posts.filter((post) => {
          return post.color.includes(this.userColor);
        }, this.userColor);
      }
    },
  },
  methods: {
    setUserColor(selectedColor) {
      this.userColor = selectedColor;
    },
  },
};
</script>

<style></style>
