<template>
  <div id="posts-page">
    <div id="selections">
      <category-and-color
        v-bind:posts="posts"
        v-on:new-color="setUserColor($event)"
      ></category-and-color>
    </div>
    <div id="posts">
      <router-link
        class="show-post"
        v-for="post in selectPosts"
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
import CategoryAndColor from "@/components/CategoryAndColor.vue";

export default {
  name: "PostsPage",
  components: {
    "show-post": ShowPost,
    "category-and-color": CategoryAndColor,
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

<style>
#posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  padding: 10px;
}

.show-post {
  flex: 0 0 45%;
  margin: 15px 10px;
}

h3 {
  height: 2.2em;
  vertical-align: bottom;
}

.pic {
  width: 100%;
  max-width: 350px;
}
</style>
