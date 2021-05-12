<template>
  <div id="account-page">
    <div v-if="!user" id="signupForm">
      <h1>Sign up</h1>
      <small class="formHelp">
        (Form is prefilled for demonstration purposes; remove in final
        application)
      </small>
      <div>
        <label>
          Name:
          <input type="text" v-model="data.name" v-on:blur="validate" />
        </label>
        <div v-if="errors && errors.name" class="negativeFeedback">
          Please add your name.
        </div>
      </div>
      <div>
        <label>
          Email:
          <input
            type="text"
            v-model="data.email"
            v-on:blur="validate"
            data-test="email-input"
          />
        </label>
        <div v-if="errors && errors.email" class="negativeFeedback">
          Please add your email.
        </div>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            v-model="data.password"
            v-on:blur="validate"
            data-test="password-input"
          />
        </label>
        <div v-if="errors && errors.password" class="negativeFeedback">
          Please add your password.
        </div>
      </div>

      <ul v-if="errors && !errors.name && !errors.email && !errors.password">
        <li
          class="negativeFeedback"
          v-for="(error, index) in errors"
          :key="index"
        >
          {{ error }}
        </li>
      </ul>

      <button
        v-on:click="signup"
        v-bind:disabled="errors"
        id="signupButton"
        data-test="signup-button"
      >
        Sign up
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
        name: "Kate",
        email: "kate@harvard.edu",
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
        name: "required",
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
    signup() {
      axios.post("register", this.data).then((response) => {
        console.log(response);
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$store.commit("setUser", response.data.user);
          this.$router.push("/favorite");
        }
      });
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  display: block;
  width: 100%;
  font-size: 1.2rem;
  border: 1px solid #dddddd;
}

label {
  display: block;
  margin: 20px 0 0;
}

.formHelp {
  color: #aaaaaa;
  display: block;
  text-align: center;
}

.negativeFeedback {
  color: #ff4136;
  font-size: 0.8em;
  font-weight: bold;
  font-style: italic;
  margin: 0 0 1rem 0;
}

button {
  margin: 25px 0;
}
</style>
