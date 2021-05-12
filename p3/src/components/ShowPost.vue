<template>
  <div>
    <h3 data-test="post-title">{{ post.title }}</h3>
    <img
      class="pic"
      v-bind:src="imgSrc"
      v-bind:data-test="'post-image-' + post.sku"
    />
  </div>
</template>

<script>
export default {
  component: {},
  props: {
    post: {
      type: Object,
    },
  },
  computed: {
    imgSrc() {
      try {
        return require("@/assets/images/posts/" + this.post.sku + "-0.jpg");
      } catch (e) {
        return require("@/assets/images/posts/image-not-found.jpg");
      }
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: "Montserrat", serif;
  font-weight: normal;
}
</style>
