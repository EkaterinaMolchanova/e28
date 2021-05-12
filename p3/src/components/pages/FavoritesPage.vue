<template>
  <div>
    <div v-if="user">
      <h1 data-test="welcome-message">Hi, {{ user.name }}!</h1>

      <div id="favorites">
        <h2>Your Favorites</h2>
        <p v-if="favorites && favorites.length == 0">No favorites yet.</p>

        <div class="posts">
          <router-link
            class="show-post"
            v-for="post in favorites"
            v-bind:to="'/post/' + post.id"
            v-bind:key="post.id"
          >
            <show-post v-bind:post="post"></show-post>
            <fav-buttons v-bind:post="post"></fav-buttons>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="!user" class="noUser">
      Please <router-link v-bind:to="'/login'">log in </router-link> or
      <router-link v-bind:to="'/signup'">sign up </router-link> to add and see
      your favorites
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import ShowPost from "@/components/ShowPost.vue";
import FavButtons from "@/components/FavButtons.vue";

export default {
  components: {
    "show-post": ShowPost,
    "fav-buttons": FavButtons,
  },
  data() {
    return {
      favorites: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    loadFavorites() {
      if (this.user) {
        axios
          .get("favoritePost/query?user_id=" + this.user.id)
          .then((response) => {
            console.log(response);
            this.favorites = response.data.favoritePost.map((favoritePost) => {
              return this.$store.getters.getPostById(favoritePost.post_id);
            });
          });
      }
    },
  },
  watch: {
    user() {
      this.loadFavorites();
    },
  },
  mounted() {
    this.loadFavorites();
  },
};
</script>

<style></style>
