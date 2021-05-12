<template>
  <button v-on:click="logout" data-test="logout-button">Logout</button>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  methods: {
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", false);
          //this check is in place to make sure that if logging out from the restricted page, the access is closed after log out
          if (this.$router.currentRoute._value.meta.requiresAuth) {
            this.$router.push("/denied");
          }
        }
      });
    },
  },
};
</script>

<style scoped>
button {
  background-color: #aaaaaa;
  margin-left: 4em;
}
</style>
