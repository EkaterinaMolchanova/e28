<template>
  <div>
    <h3>{{ post.title }}</h3>
    <img class="pic" v-bind:src="imgSrc" />
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
