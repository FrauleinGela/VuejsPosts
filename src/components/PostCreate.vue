<template>
    <form class="form form--add-post" @submit.prevent="addPost" novalidate="true">
        <div class="form__section">
        <label for="namePost">Name</label>
        <input id="namePost" class="form__input" type="text" v-model="post.name">
        <p v-if="errors.name" class="form__errors">
            <span v-if="errors.name.min">Minimum 4 carachters</span>
            <span v-if="errors.name.required">It is required</span>
        </p>
        </div>
        <button class="form__submit" type="submit">Save</button>
    </form>
</template>
<script>
export default {
  name: "PostCreate",
  data() {
    return {
      post: {},
      errors: {}
    };
  },
  methods: {
    addPost() {
      // TODO: Add validator directives
      this.errors = {};
      if (this.post.name) {
        if (this.post.name.length > 4) {
          this.errors = {};
          this.$emit("add-post", this.post);
          return;
        }
        return (this.errors.name = { min: true });
      }
      return (this.errors.name = { required: true });
    }
  }
};
</script>
<style scoped lang="scss">
.form__errors {
  background: #fdf2ce;
  font-weight: bold;
  padding: 5px;
  margin-top: 5px;
}

.form--add-post {
  .form__section {
    display: inline-block;
  }
  .form__input {
    width: calc(100% - 40px);
    border: 0;
    padding: 5px;
    font-size: 1.3em;
    background-color: #fff;
    border: solid 2px #42b983;
    border-radius: 4px;
    color: #687f7f;
  }
  .form__submit {
    padding: 10px;
    background: #42b983;
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    margin-right: 15px;
  }
}
</style>
