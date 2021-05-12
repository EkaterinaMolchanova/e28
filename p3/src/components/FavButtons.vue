<template>
  <div>
    <button v-if="!isFav" v-on:click="addToFav">❤︎ add to fav</button>
    <button v-if="isFav" v-on:click="removeFromFav">✘ remove from fav</button>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      isFav: false,
      favId: null,
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    isFavorite() {
      // Figure out if this post id is a favorite by pinging the `favorite` “query” route
      axios
        .get(
          "/favoritePost/query?post_id=" +
            this.post.id +
            "&user_id=" +
            this.user.id
        )
        .then((response) => {
          if (response.data.favoritePost.length > 0) {
            this.favId = response.data.favoritePost[0].id;
            this.isFav = true;
          }
        });
    },

    addToFav() {
      axios
        .post("/favoritePost", {
          post_id: this.post.id,
          user_id: this.user.id,
        })
        .then((response) => {
          if (response.data.success) {
            this.isFav = true;
            this.favId = response.data.favoritePost.id;
            this.$router.push("/favorite");
          }
        });
    },

    removeFromFav() {
      axios.delete("/favoritePost/" + this.favId).then((response) => {
        if (response.data.success) {
          this.isFav = false;
          this.favId = null;
          this.$router.push("/favorite");
        }
      });
    },
  },
  mounted() {
    this.isFavorite();
  },
};
</script>

<style></style>
