<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div class="colors">Main colors: {{ post.color }}</div>
    <div class="post-description">
      {{ post.description }}
    </div>
    <a v-bind:href="post.link"> {{ post.title }} on Society6 </a>
    <img
      class="main-pics"
      v-bind:src="require('@/assets/images/posts/' + this.post.sku + '-0.jpg')"
    />
    <img
      class="main-pics"
      v-bind:src="require('@/assets/images/posts/' + this.post.sku + '-1.jpg')"
    />
    <div v-if="picExist">
      <img
        class="main-pics"
        v-bind:src="
          require('@/assets/images/posts/' + this.post.sku + '-2.jpg')
        "
      />
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
    picExist() {
      try {
        require("@/assets/images/posts/" + this.post.sku + "-2.jpg");
        return true;
      } catch (e) {
        return false;
      }
    },
  },
};
</script>

<style>
.colors {
  font-style: italic;
  font-weight: bold;
  font-size: 0.9em;
  margin: 1em 0;
}
.main-pics {
  width: 30%;
}
</style>
