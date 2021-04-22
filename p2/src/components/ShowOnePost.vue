<template>
  <div id="show-one-post">
    <h1>{{ post.title }}</h1>
    <div class="one-post-contents">
      <div class="post-text">
        <div class="colors">Main colors: {{ post.color }}</div>
        <div class="post-description">
          {{ post.description }}
        </div>
        <a v-bind:href="post.link"> {{ post.title }} on Society6 </a>
      </div>
      <div class="post-images">
        <img class="main-pics" v-bind:src="imgSrc0" />
        <img class="main-pics" v-bind:src="imgSrc1" />
        <div v-if="picExist">
          <img
            class="main-pics"
            v-bind:src="
              require('@/assets/images/posts/' + this.post.sku + '-2.jpg')
            "
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
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
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
  },
};
</script>

<style>
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

.main-pics {
  width: 100%;
  max-width: 350px;
  margin: 25px;
}
</style>
