<template>
    <div>
        <PostCreate v-on:add-post="addToList"></PostCreate>
        <ul class="posts__list">
            <li v-for="(post, index) in posts" v-bind:key="index">{{post.name}}</li>
        </ul>
    </div>
</template>
<script>
import PostCreate from "./PostCreate.vue";
export default {
  name: "PostList",
  props: {
    posts: Array
  },
  components: {
    PostCreate
  },
  methods: {
    addToList(post) {
      this.posts.push(post);
    }
  }
};
</script>
<style lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.posts__list {
  box-shadow: 0px 0px 40px lightgray;
}
</style>

