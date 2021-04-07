<!-- src/components/ShowProducts.vue -->
<template>
  <div id="products-page">
    <h2>Products</h2>
    <div id="products">
      <show-product v-for="product in products" v-bind:key="product.id" v-bind:product="product"></show-product>
    </div>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import { products } from "@/common/products.js";

export default {
  data() {
    return {
      products: products
    };
  },
  components: {
    "show-product": ShowProduct
  }
};
</script>

<style scoped>
#products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
</style>