<template>
  <div>
    <h2>Hello, I'm Kate. Welcome to my blog!</h2>
    <p>
      Here you'll find my favorities at
      <a
        href="https://society6.com/katemolchanova"
      >my shop at Society6.com.</a>
      It's filled with lots of fun merchandise from pillows to Apple Watch
      bands. I hope you enjoy it!
    </p>
    <show-random v-bind:posts="posts"></show-random>
  </div>
</template>

<script>
import ShowRandom from "@/components/ShowRandom.vue";
export default {
  components: {
    "show-random": ShowRandom
  },
  props: {
    posts: {
      type: Array,
      default: null
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 35px 0 0;
}
</style>
