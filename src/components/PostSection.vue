<template>
    <PostList v-bind:posts="posts"></PostList>
        
</template>
<script>
import PostList from "./PostList";
export default {
  name: "PostSection",
  data() {
    return {
      posts: [{ name: "Post 1" }, { name: "Post 2" }]
    };
  },
  components: {
    PostList
  },
  methods: {
    addToList(post) {
      this.posts.push(post);
    }
  }
};
</script>
<style lang="scss">
</style>

