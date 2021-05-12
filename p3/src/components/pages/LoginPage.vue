<template>
  <div id="account-page">
    <div v-if="!user" id="loginForm">
      <h1>Login</h1>
      <small class="formHelp">
        (Form is prefilled for demonstration purposes; remove in final
        application)
      </small>
      <div>
        <label>
          Email:
          <input type="text" v-model="data.email" v-on:blur="validate" />
        </label>
        <div v-if="errors && errors.email" class="negativeFeedback">
          Please check your email.
        </div>
      </div>
      <div>
        <label>
          Password:
          <input type="password" v-model="data.password" v-on:blur="validate" />
        </label>
        <div v-if="errors && errors.password" class="negativeFeedback">
          Please check your password.
        </div>
      </div>

      <ul v-if="errors && !errors.email && !errors.password">
        <li
          class="negativeFeedback"
          v-for="(error, index) in errors"
          :key="index"
        >
          {{ error }}
        </li>
      </ul>

      <button v-on:click="login" v-bind:disabled="errors" id="loginButton">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs";

export default {
  data() {
    return {
      // Form is prefilled for demonstration purposes; remove in final application
      // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
      data: {
        email: "jill@harvard.edu",
        password: "asdfasdf",
      },
      errors: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    validate() {
      let validator = new Validator(this.data, {
        email: "required",
        password: "required",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
    login() {
      axios.post("login", this.data).then((response) => {
        console.log(response);
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
          this.$router.push("/favorite");
        } else {
          this.errors = response.data.errors;
        }
      });
    },
  },
};
</script>

<style scoped></style>
