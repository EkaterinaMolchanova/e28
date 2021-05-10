<template>
  <div id="account-page">
    <div v-if="user">
      <h2>Hi, {{ user.name }}!</h2>

      <div id="favorites">
        <strong>Your Favorites</strong>
        <p v-if="favorites && favorites.length == 0">No favorites yet.</p>
        <li v-for="(favorite, key) in favorites" v-bind:key="key">{{ favorite.title }}</li>
      </div>

      <button v-on:click="logout">Logout</button>
    </div>

    <div v-else id="loginForm">
      <h2>Login</h2>
      <small>
        (Form is prefilled for demonstration purposes; remove in final
        application)
      </small>
      <div>
        <label>
          Email:
          <input type="text" v-model="data.email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" v-model="data.password" />
        </label>
      </div>

      <button v-on:click="login">Login</button>

      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      // Form is prefilled for demonstration purposes; remove in final application
      // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
      data: {
        email: "jill@harvard.edu",
        password: "asdfasdf"
      },
      errors: null,
      favorites: []
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    loadFavorites() {
      if (this.user) {
        axios
          .get("favoritePost/query?user_id=" + this.user.id)
          .then(response => {
            console.log(response);
            this.favorites = response.data.favoritePost.map(favoritePost => {
              return this.$store.getters.getPostById(favoritePost.post_id);
            });
          });
      }
    },
    login() {
      axios.post("login", this.data).then(response => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
          //  location.assign("/favorite");
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    logout() {
      axios.post("logout").then(response => {
        if (response.data.success) {
          this.$store.commit("setUser", false);
        }
      });
    }
  },
  watch: {
    user() {
      this.loadFavorites();
    }
  },
  mounted() {
    this.loadFavorites();
  }
};
</script>
