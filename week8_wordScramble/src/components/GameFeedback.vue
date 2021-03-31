<template>
  <div v-if="feedback" class="feedback" v-bind:class="{ pass: correct, fail: !correct }">
    <div v-if="correct">
      You got it! Nice work.
      <button v-on:click="$emit('scramble-word',word)">Play again</button>
    </div>
    <div v-else>Sorry, that’s not correct. Please try again.</div>
  </div>
</template>

<script>
export default {
  name: "GameFeedback",
  props: {
    feedback: {
      type: Boolean,
      default: false
    },
    correct: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.feedback {
  font-weight: bold;
  color: aliceblue;
}
</style>