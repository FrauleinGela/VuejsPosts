<template>
  <div class="header">
    <nav>
      <router-link to="/">Posts</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: #42b983;
  font-weight: bold;
  margin-right: 15px;
}
nav {
  padding: 20px 20px 20px 0px;
}
</style>
