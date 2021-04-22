<template>
  <div>
    <img
      alt="Kate Molchanova blog logo"
      id="logo"
      src="@/assets/images/logo_full_black.png"
    />

    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>

    <router-view
      v-bind:posts="posts"
      v-on:update-posts="uploadPosts"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: "App",

  data() {
    return {
      posts: [],
      /* Store links in an array to maintain order */
      links: [
        "home",
        "all posts",
        "create new post",
        "choose by color and use",
      ],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        "all posts": "/posts",
        "create new post": "/post/new",
        "choose by color and use": "/categories",
      },
    };
  },
  mounted() {
    this.uploadPosts();
  },
  methods: {
    uploadPosts() {
      axios.get("post").then((response) => {
        this.posts = response.data.post;
      });
    },
  },
};
</script>

<style src="@/assets/css/styles.css"></style>
