<template>
  <div id="category-and-color">
    <p>Choose posts by color:</p>
    <div id="colors-list">
      <ul>
        <li v-for="(color, id) in colors" v-bind:key="id">
          <input
            type="radio"
            name="color"
            v-bind:value="color"
            v-bind:id="color"
            v-model="selectedColor"
          />
          <label v-bind:for="color">{{ color }}</label>
        </li>
        <li>
          <input
            type="radio"
            name="color"
            value="any"
            id="any"
            v-model="selectedColor"
          />
          <label for="any">any</label>
        </li>
      </ul>
      <button v-on:click="$emit('new-color', selectedColor)">
        Select color
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryAndColor",

  data() {
    return {
      selectedColor: "",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    colors() {
      let colors = this.posts.map((post) => post.color.split(", " || ","));
      let mergedColors = [].concat.apply([], colors);

      // Return unique, sorted categories
      return [...new Set(mergedColors)].sort();
    },
  },
};
</script>

<style scoped>
#category-and-color {
  text-align: center;
  /* background-color: #ffdc00; */
  padding: 15px;
  border: 1px solid #ffdc00;
}
p {
  margin: 0;
  font-weight: bold;
}

ul {
  columns: auto 3;
}

li {
  list-style: none;
  margin: 0 0 0 40px;
  text-align: left;
}
label {
  margin: 0 10px;
}

button {
  width: 20%;
}
</style>
