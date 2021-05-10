<template>
  <div id="show-one-post">
    <!-- navigation for previous/next posts -->
    <div class="local-nav">
      <div class="previous-post" v-show="prevExist">
        <router-link v-bind:to="'/post/' + (post.id - 1)">Previous</router-link>
      </div>
      <div class="next-post" v-show="nextExist">
        <router-link v-bind:to="'/post/' + (post.id + 1)">Next</router-link>
      </div>
    </div>

    <!-- display of the post data  -->
    <h1>{{ post.title }}</h1>
    <div class="one-post-contents">
      <div class="post-text">
        <div class="colors">Main colors: {{ post.color }}</div>
        <div class="post-description">{{ post.description }}</div>
        <div class="link-to-shop">
          <a v-bind:href="post.link">{{ post.title }} on Society6</a>
        </div>
      </div>
      <div class="post-images">
        <img class="main-pics" v-bind:src="imgSrc0" />
        <img class="main-pics" v-bind:src="imgSrc1" />
        <div v-if="picExist">
          <img
            class="main-pics"
            v-bind:src="require('@/assets/images/posts/' + post.sku + '-2.jpg')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },

  data() {
    return {};
  },
  computed: {
    // post() {
    //   return this.$store.getters.getPostById(this.id);
    // },

    posts() {
      return this.$store.state.posts;
    },
    //check on existence of first two images and replace those with placeholder if required
    imgSrc0() {
      try {
        return require("@/assets/images/posts/" + this.post.sku + "-0.jpg");
      } catch (e) {
        return require("@/assets/images/posts/image-not-found.jpg");
      }
    },
    imgSrc1() {
      try {
        return require("@/assets/images/posts/" + this.post.sku + "-1.jpg");
      } catch (e) {
        return require("@/assets/images/posts/image-not-found.jpg");
      }
    },
    //check if the post has two or three images assigned. If there are three - show the third
    picExist() {
      try {
        return require("@/assets/images/posts/" + this.post.sku + "-2.jpg");
      } catch (e) {
        return false;
      }
    },
    //previous and next posts. -2 and 0 correction is made because the items in array start from 0 and ids from 1
    prevExist() {
      return this.posts[this.post.id - 2];
    },
    nextExist() {
      return this.posts[this.post.id];
    },
  },
};
</script>

<style scoped>
.local-nav {
  margin: 1em 0;
  font-weight: bold;
  font-size: 0.9em;
}

.previous-post {
  float: left;
  clear: left;
}

.next-post {
  float: right;
  clear: right;
}

h1 {
  clear: both;
}

.one-post-contents {
  display: flex;
}
.post-text {
  flex: 1 1 50%;
}
.post-images {
  flex: 1 1 50%;
}

.colors {
  font-style: italic;
  font-weight: bold;
  font-size: 0.9em;
  margin: 1em 0;
}

.link-to-shop {
  margin: 15px 0;
}

.main-pics {
  width: 100%;
  max-width: 350px;
  margin: 25px;
}
</style>
