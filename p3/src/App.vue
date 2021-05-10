<template>
  <div>
    <img alt="Kate Molchanova blog logo" id="logo" src="@/assets/images/logo_full_black.png" />

    <nav>
      <ul>
        <li>
          <router-link v-for="link in links" v-bind:key="link" v-bind:to="paths[link]">{{ link }}</router-link>
        </li>
        <li v-if="!user">
          <router-link v-bind:to="'/account'">Log in</router-link>
        </li>
        <li v-if="user">
          <button v-on:click="logout">Logout</button>
        </li>
      </ul>
    </nav>

    <router-view v-bind:posts="posts" v-on:update-posts="uploadPosts"></router-view>

    <footer>
      <p>2021 Ekaterina Molchanova</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      posts: [],
      /* Store links in an array to maintain order */
      links: ["home", "all posts", "create new post", "favorites"],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        "all posts": "/posts",
        "create new post": "/post/new",
        favorites: "/favorite"
      }
    };
  },
  mounted() {
    this.uploadPosts();
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    uploadPosts() {
      this.$store.dispatch("fetchPosts");
    }
  }
};
</script>

<style src="@/assets/css/styles.css"></style>
