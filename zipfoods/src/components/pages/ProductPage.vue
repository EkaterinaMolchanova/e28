<template>
  <div id="product-page">
    <div class="show-product" v-for="product in products" v-bind:key="product.id">
      <div v-if="product.id == id">
        <h1>{{ product.name }}</h1>
        <!-- <div class="name">{{ product.name }}</div> -->

        <img class="thumb" v-bind:src="require('@/assets/images/products/' + product.id + '.jpg')" />

        <div class="price">${{ product.price }}</div>
        <p class="description">{{ product.description }}</p>
      </div>
    </div>
    <div v-if="id > products.length">
      <h1>Product {{ id }} not found</h1>
      <p>
        Return to the
        <a href="/products">Products page</a>
      </p>
    </div>
  </div>
</template>

<script>
import { products } from "@/common/products.js";

export default {
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      products: products
    };
  }
};
</script>

<style></style>
