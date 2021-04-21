<template>
  <div class="show-product">
    <h3>{{ post.title }}</h3>
    <img
      class="pic"
      v-bind:src="require('@/assets/images/posts/' + this.post.sku + '-0.jpg')"
    />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style></style>
