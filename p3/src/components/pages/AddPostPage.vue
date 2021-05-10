<template>
  <div>
    <h1>Create new post</h1>

    <div id="form">
      <small class="formHelp">All fields are required</small>

      <label for="title" id="forTitle">Title:</label>
      <input type="text" v-model="post.title" id="title" v-on:blur="validate" />
      <small class="formHelp">Min 10 characters</small>
      <!-- give feedback in case of errors -->
      <div
        v-if="errors && errors.title"
        class="negativeFeedback"
      >The title is required and should be at least 10 characters long.</div>

      <label for="sku" id="forSKU">SKU:</label>
      <input type="text" v-model="post.sku" id="sku" v-on:blur="validate" />
      <small class="formHelp">SKU is the name of the item in Society6 and should be unique</small>
      <div
        v-if="errors && errors.sku"
        class="negativeFeedback"
      >The item's SKU is required and should be unique.</div>

      <label for="color" id="forColor">Main colors (separate with commas):</label>
      <input type="text" v-model="post.color" id="color" v-on:blur="validate" />
      <small class="formHelp">Please add main colors, separated by commas</small>
      <div v-if="errors && errors.color" class="negativeFeedback">The main colors field is required.</div>

      <label for="link" id="forLink">Link to the Society6 item:</label>
      <input type="text" v-model="post.link" id="link" v-on:blur="validate" />
      <small class="formHelp">Please add a unique link</small>
      <div
        v-if="errors && errors.link"
        class="negativeFeedback"
      >The link to the item at Society6.com is required and should be unique.</div>

      <label for="categoryHome" class="form-radio" id="forCategoryHome">
        <input
          type="radio"
          v-model="post.category"
          name="category"
          id="categoryHome"
          value="home and outdoor"
        />
        Home and Outdoor
      </label>
      <label for="categoryPersonal" class="form-radio">
        <input
          type="radio"
          v-model="post.category"
          name="category"
          id="categoryPersonal"
          value="personal items"
        />
        Personal items
      </label>
      <div v-if="errors && errors.category" class="negativeFeedback">Please choose the category.</div>

      <label for="description" id="forDescription">Description</label>
      <textarea id="description" v-model="post.description" v-on:blur="validate"></textarea>
      <small class="formHelp">Min 50 and max 500 characters</small>
      <div v-if="errors && errors.description" class="negativeFeedback">
        The description is required and should be at least 50 and up to 500
        characters long.
      </div>
    </div>

    <div v-if="showConfirmation" class="positiveFeedback">New post was added</div>

    <button v-on:click="createPost">Create new post</button>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs";

export default {
  data() {
    return {
      showConfirmation: false,
      errors: null,
      post: {
        title: "",
        sku: "",
        color: "",
        category: "",
        link: "",
        description: ""
      }
    };
  },
  methods: {
    validate() {
      let validator = new Validator(this.post, {
        title: "required|min:10",
        sku: "required|alpha_dash",
        color: "required",
        link: "required",
        description: "required|between:50, 500"
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },

    createPost() {
      if (this.validate()) {
        axios.post("/post", this.post).then(response => {
          if (response.data.errors) {
            this.errors = response.data.errors;
            this.showConfirmation = false;
          } else {
            this.$emit("update-posts");
            this.showConfirmation = true;
            this.errors = null;

            this.post.title = "";
            this.post.sku = "";
            this.post.color = "";
            this.post.category = "";
            this.post.link = "";
            this.post.description = "";

            //fade out confirmation in 3 seconds
            setTimeout(() => (this.showConfirmation = false), 3000);
          }
        });
      }
    }
  }
};
</script>

<style scoped>
textarea,
input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.2rem;
  border: 1px solid #dddddd;
}

label {
  display: block;
  margin: 0;
}

label#forTitle,
label#forSKU,
label#forColor,
label#forLink,
label#forDescription {
  display: block;
  margin: 20px 0 0;
}
label#forCategoryHome {
  display: block;
  margin: 20px 0 0;
}

.formHelp {
  color: #aaaaaa;
}

.formHelp:first-of-type {
  display: block;
  text-align: center;
}

.positiveFeedback {
  color: #2ecc40;
  font-weight: bold;
  margin: 1rem 0;
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
