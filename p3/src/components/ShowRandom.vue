<template>
  <div id="show-random">
    <h2>Featured posts</h2>
    <div class="featured-posts">
      <router-link
        class="show-post"
        v-for="post in randomPosts"
        v-bind:to="'/post/' + post.id"
        v-bind:key="post.id"
      >
        <show-post v-bind:post="post" data-test="random-product"></show-post>
      </router-link>
      <router-link v-bind:to="'/posts'">This way to see more...</router-link>
    </div>
  </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";

export default {
  components: {
    "show-post": ShowPost,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    //select random posts for the home page, check that the random posts are unique
    randomPosts() {
      let ids = [],
        randomId;
      for (let i = 0; ids.length < 3; i++) {
        randomId = Math.ceil(Math.random() * 12);
        if (!ids.includes(randomId)) {
          ids.push(randomId);
        }
      }
      var randomPosts = [];
      this.posts.filter((post) => {
        if (ids.includes(post.id)) {
          randomPosts.push(post);
        }
        return randomPosts;
      });
      return randomPosts;
    },
  },
};
</script>

<style scoped>
#show-random {
  border: 1px solid #ffdc00;
  margin: 0 0 50px;
}

h2 {
  background-color: #ffdc00;
  text-align: center;
  padding: 25px 0;
  margin: 0;
}
.featured-posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.show-post {
  flex: 0 0 30%;
  margin: 15px 10px;
}

.pic {
  width: 100%;
  max-width: 350px;
}
</style>
